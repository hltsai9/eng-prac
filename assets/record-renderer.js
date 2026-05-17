/* Record renderer — turns a RECORD_REGISTRY entry into a full record page.
 *
 * The template page (record.html) reads ?slug=<name>, dynamically loads
 * records/data/<slug>.js (which assigns window.RECORD_REGISTRY[slug]), then
 * calls RecordRenderer.mount(slug, '#record-root').
 *
 * Two methods are supported, switched on meta.method:
 *   - 'standard'  → intro · 3 CEFR passages · vocab table · practice rounds · summary
 *   - 'espresso'  → topic · timed-round notes · final speech compare · summary
 *
 * Mine/polished/prompt/corrections fields accept raw HTML (so <mark>, <em>,
 * <code>, <br> survive). This matches how records are authored today.
 */
(function () {
  function escapeAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }
  function escapeText(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function formatHumanDate(iso) {
    // iso = 'YYYY-MM-DD' — parse as local to avoid TZ drift
    const [y, m, d] = iso.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  function renderNav(rec, anchors) {
    const brand = escapeText(rec.meta.navBrandText || rec.meta.titleEn);
    const links = anchors.map(a => `<a href="#${a.id}">${escapeText(a.label)}</a>`).join('\n      ');
    return `
<nav class="topnav">
  <div class="nav-inner">
    <a class="nav-brand" href="index.html">English Learning Record · <span>${brand}</span></a>
    <div class="nav-links">
      <a class="back" href="index.html">← All records</a>
      ${links}
    </div>
  </div>
</nav>`;
  }

  function renderHero(rec) {
    const subtitle = escapeText(
      rec.meta.subtitle || (rec.meta.method === 'espresso'
        ? 'Espresso method · three timed rounds · 60s → 50s → 40s'
        : 'Three reading levels · vocabulary mapping · practice and revision')
    );
    const dateIso = rec.meta.date;
    return `
<header class="hero">
  <h1>${escapeText(rec.meta.heroTitle || rec.meta.titleEn)}</h1>
  <p class="subtitle">${subtitle}</p>
  <p class="meta">Created on <time datetime="${escapeAttr(dateIso)}">${escapeText(formatHumanDate(dateIso))}</time></p>
</header>`;
  }

  /* ============================================================
   * Standard record sections
   * ============================================================ */

  function renderIntro(rec) {
    const intro = rec.intro || {};
    const paragraphs = (intro.paragraphs || [])
      .map(p => `    <p>${p}</p>`)
      .join('\n');
    return `
<section id="intro">
  <div class="section-label">Section 01</div>
  <h2>${escapeText(intro.zhTitle || `主題簡介：${rec.meta.titleEn}`)}</h2>
  <article class="card prose" lang="zh-Hant">
${paragraphs}
  </article>
</section>`;
  }

  function renderPassages(rec) {
    const p = rec.passages || {};
    const order = [
      { key: 'c1', label: 'Advanced',           levelTag: 'C1', dataLevel: 'C1 — Advanced' },
      { key: 'b2', label: 'Upper-Intermediate', levelTag: 'B2', dataLevel: 'B2 — Upper-Intermediate' },
      { key: 'b1', label: 'Intermediate',       levelTag: 'B1', dataLevel: 'B1 — Intermediate' },
    ];
    const buttons = order
      .map((o, i) => `      <button class="tab-button${i === 0 ? ' active' : ''}" data-tab="${o.key}" role="tab"><span class="level-tag">${o.levelTag}</span>${o.label}</button>`)
      .join('\n');
    const panels = order
      .map((o, i) => `    <div class="tab-panel${i === 0 ? ' active' : ''} card" id="tab-${o.key}" data-level="${escapeAttr(o.dataLevel)}">
      <p class="prose" style="margin:0;">${p[o.key] || ''}</p>
    </div>`)
      .join('\n');
    return `
<section id="passages">
  <div class="section-label">Section 02</div>
  <h2>Three-Level English Passages</h2>
  <div class="tabs">
    <div class="tab-buttons" role="tablist">
${buttons}
    </div>

${panels}
  </div>
</section>`;
  }

  function renderVocabulary(rec) {
    const rows = (rec.vocabulary || [])
      .map(r => `        <tr>
          <td>${r.step || ''}</td>
          <td>${r.c1 || ''}</td>
          <td>${r.b2 || ''}</td>
          <td>${r.b1 || ''}</td>
        </tr>`)
      .join('\n');
    return `
<section id="vocabulary">
  <div class="section-label">Section 03</div>
  <h2>Vocabulary Comparison Table</h2>
  <div class="table-wrap">
    <table class="vocab">
      <thead>
        <tr>
          <th scope="col">Narrative Step</th>
          <th scope="col">C1</th>
          <th scope="col">B2</th>
          <th scope="col">B1</th>
        </tr>
      </thead>
      <tbody>
${rows}
      </tbody>
    </table>
  </div>
</section>`;
  }

  function renderRoundStandard(r) {
    const header = `    <div class="round-header">
      <span class="round-number">Round ${r.number}</span>
    </div>`;
    const prompt = `    <div class="round-prompt">
      <strong>Prompt</strong>
      ${r.prompt || ''}
    </div>`;

    if (r.status) {
      return `  <article class="round">
${header}
${prompt}
    <div class="corrections">
      <h4>${escapeText(r.statusHeading || 'Status')}</h4>
      <p style="margin:0; font-style: italic; color: var(--text-muted);">${r.status}</p>
    </div>
  </article>`;
    }

    const corrections = (r.corrections || []).map(c => `        <li>${c}</li>`).join('\n');
    const badgeClass = r.level && r.level.badge ? r.level.badge : 'c1';
    const levelText = r.level && r.level.text ? r.level.text : '';
    return `  <article class="round">
${header}
${prompt}
    <div class="compare">
      <div class="compare-col mine">
        <div class="compare-label">My Response</div>
        <p class="compare-text">${r.mine || ''}</p>
      </div>
      <div class="compare-col polished">
        <div class="compare-label">Polished Version</div>
        <p class="compare-text">${r.polished || ''}</p>
      </div>
    </div>
    <div class="corrections">
      <h4>Key Corrections</h4>
      <ul>
${corrections}
      </ul>
      <span class="badge ${escapeAttr(badgeClass)}">${escapeText(levelText)}</span>
    </div>
  </article>`;
  }

  function renderPractice(rec) {
    const rounds = (rec.rounds || []).map(renderRoundStandard).join('\n\n');
    return `
<section id="practice">
  <div class="section-label">Section 04</div>
  <h2>My Practice Responses &amp; Polished Versions</h2>

${rounds}
</section>`;
  }

  function renderSummaryItem(item) {
    if (item.pending || !item.levelPill) {
      return `      <li><span class="round-tag">Round ${item.round}</span><span>${item.html || ''}</span></li>`;
    }
    return `      <li><span class="round-tag">Round ${item.round}</span><span><span class="level-pill">${escapeText(item.levelPill)}</span>${item.html || ''}</span></li>`;
  }

  function renderSummary(rec) {
    const s = rec.summary || {};
    const sectionLabel = escapeText(s.sectionLabel || 'Progress Summary');
    const heading = escapeText(s.heading || 'Growth Across Three Rounds');
    const items = (s.items || []).map(renderSummaryItem).join('\n');
    const note = s.note ? `    <p class="summary-note">${s.note}</p>` : '';
    return `
<footer class="summary" id="summary">
  <div class="summary-card">
    <div class="section-label">${sectionLabel}</div>
    <h2>${heading}</h2>
    <ul class="summary-list">
${items}
    </ul>
${note}
  </div>
</footer>`;
  }

  function renderStandard(rec) {
    const nav = renderNav(rec, [
      { id: 'intro',      label: 'Intro' },
      { id: 'passages',   label: 'Passages' },
      { id: 'vocabulary', label: 'Vocabulary' },
      { id: 'practice',   label: 'Practice' },
      { id: 'summary',    label: 'Summary' },
    ]);
    return [
      nav,
      renderHero(rec),
      renderIntro(rec),
      renderPassages(rec),
      renderVocabulary(rec),
      renderPractice(rec),
      renderSummary(rec),
    ].join('\n');
  }

  /* ============================================================
   * Espresso record sections
   * ============================================================ */

  function renderTopic(rec) {
    const topic = rec.topic || '';
    return `
<section id="topic">
  <div class="section-label">Section 01</div>
  <h2>Topic</h2>
  <article class="card prose">
    <p>${topic}</p>
  </article>
</section>`;
  }

  function renderRoundEspresso(r) {
    const badge = r.badge || 'c1';
    return `  <article class="round">
    <div class="round-header">
      <span class="round-number">Round ${r.number}</span>
      <span class="badge ${escapeAttr(badge)}">${escapeText(r.timeLabel || '')}</span>
    </div>
    <div class="round-prompt">
      <strong>${escapeText(r.promptTitle || 'Prep window')}</strong>
      ${r.promptHtml || ''}
    </div>
    <div class="corrections">
      <h4>${escapeText(r.notesTitle || 'Prep notes')}</h4>
      <p>${r.notesHtml || ''}</p>
    </div>
  </article>`;
  }

  function renderEspressoRounds(rec) {
    const rounds = (rec.rounds || []).map(renderRoundEspresso).join('\n\n');
    return `
<section id="rounds">
  <div class="section-label">Section 02</div>
  <h2>Round-by-Round Notes</h2>

${rounds}
</section>`;
  }

  function renderEspressoCompare(rec) {
    const fc = rec.finalCompare || {};
    return `
<section id="compare">
  <div class="section-label">Section 03</div>
  <h2>${escapeText(fc.heading || 'Final Speech vs. AI-Improved Version')}</h2>
  <div class="round">
    <div class="compare">
      <div class="compare-col mine">
        <div class="compare-label">${escapeText(fc.mineLabel || 'My Final Speech')}</div>
        <p class="compare-text">${fc.mine || ''}</p>
      </div>
      <div class="compare-col polished">
        <div class="compare-label">${escapeText(fc.polishedLabel || 'AI-Improved Version')}</div>
        <p class="compare-text">${fc.polished || ''}</p>
      </div>
    </div>
  </div>
</section>`;
  }

  function renderEspresso(rec) {
    const nav = `
<nav class="topnav">
  <div class="nav-inner">
    <a class="nav-brand" href="index.html">English Learning Record · <span>${escapeText(rec.meta.navBrandText || rec.meta.titleEn)}</span></a>
    <div class="nav-links">
      <a class="back" href="index.html">← All records</a>
      <a href="espresso.html">Espresso method</a>
      <a href="#topic">Topic</a>
      <a href="#rounds">Rounds</a>
      <a href="#compare">Final speech</a>
      <a href="#summary">Summary</a>
    </div>
  </div>
</nav>`;
    return [
      nav,
      renderHero(rec),
      renderTopic(rec),
      renderEspressoRounds(rec),
      renderEspressoCompare(rec),
      renderSummary(rec),
    ].join('\n');
  }

  /* ============================================================
   * Mount + lifecycle
   * ============================================================ */

  function attachTabHandlers(root) {
    const buttons = root.querySelectorAll('.tab-button');
    const panels = root.querySelectorAll('.tab-panel');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        buttons.forEach(b => b.classList.toggle('active', b === btn));
        panels.forEach(p => p.classList.toggle('active', p.id === 'tab-' + target));
      });
    });
  }

  function attachBackToTop() {
    const backBtn = document.getElementById('backToTop');
    if (!backBtn) return;
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function mount(slug, selector) {
    const root = document.querySelector(selector);
    if (!root) return;
    const rec = (window.RECORD_REGISTRY || {})[slug];
    if (!rec) {
      mountNotFound(slug, selector);
      return;
    }
    const method = rec.meta && rec.meta.method === 'espresso' ? 'espresso' : 'standard';
    const html = method === 'espresso' ? renderEspresso(rec) : renderStandard(rec);
    root.innerHTML = html;
    document.title = `${rec.meta.titleEn} — Learning Record`;
    attachTabHandlers(root);
    attachBackToTop();
  }

  function mountNotFound(slug, selector) {
    const root = document.querySelector(selector);
    if (!root) return;
    const safe = escapeText(slug || '(none)');
    root.innerHTML = `
<nav class="topnav">
  <div class="nav-inner">
    <a class="nav-brand" href="index.html">English Learning Record · <span>Not found</span></a>
    <div class="nav-links">
      <a class="back" href="index.html">← All records</a>
    </div>
  </div>
</nav>
<header class="hero">
  <h1>Record not found</h1>
  <p class="subtitle">No record is registered for slug <code>${safe}</code>.</p>
  <p class="meta"><a class="btn primary" href="index.html">Browse all records</a></p>
</header>`;
    document.title = 'Record not found — Learning Record';
    attachBackToTop();
  }

  window.RecordRenderer = { mount, mountNotFound };
})();
