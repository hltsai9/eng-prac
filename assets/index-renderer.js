/* Index renderer — builds the record-card grid from RECORDS_INDEX.
 *
 * Each card uses the same markup the page used to hardcode, so styling and
 * the view-toggle (cards/list) keep working unchanged.
 */
(function () {
  function escapeAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }
  function escapeText(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function formatHumanDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  function cardHtml(rec) {
    const tags = (rec.tags || [])
      .map(t => `        <span class="tag">${escapeText(t)}</span>`)
      .join('\n');
    return `    <a class="record-card" href="record.html?slug=${escapeAttr(rec.slug)}">
      <span class="date"><time datetime="${escapeAttr(rec.date)}">${escapeText(formatHumanDate(rec.date))}</time></span>
      <h3 class="title">${escapeText(rec.titleEn)}</h3>
      <p class="chinese">${escapeText(rec.titleZh || '')}</p>
      <p class="summary">${escapeText(rec.summary || '')}</p>
      <div class="tags">
${tags}
      </div>
      <span class="open-arrow">Open record →</span>
    </a>`;
  }

  /**
   * Render every record into `selector`, sorted newest-first.
   * Returns helpers the tracker can use to drive the pet/calendar.
   */
  function mount(selector) {
    const grid = document.querySelector(selector);
    if (!grid) return { all: [], countForMonth: () => 0, datesForMonth: () => [] };

    const all = (window.RECORDS_INDEX || []).slice().sort((a, b) =>
      b.date.localeCompare(a.date)
    );
    grid.innerHTML = all.map(cardHtml).join('\n\n');

    return {
      all,
      countForMonth(yyyyMm) {
        return all.filter(r => r.date.startsWith(yyyyMm)).length;
      },
      datesForMonth(yyyyMm) {
        return all.filter(r => r.date.startsWith(yyyyMm)).map(r => r.date);
      },
    };
  }

  window.IndexRenderer = { mount };
})();
