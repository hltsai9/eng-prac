---
name: new-learning-record
description: Add a new English learning record to this site. Triggers when the user wants to create a new record, log a study session, or add a topic to the learning library. A record consists of a Traditional Chinese intro, three CEFR-level passages (C1/B2/B1), a vocabulary mapping table, three practice rounds with corrections, and a progress summary. The skill creates records/data/<slug>.js and appends an entry to records/manifest.js — the listing card and the rendered page appear automatically.
---

# Add a new English Learning Record

This is a personal English learning site. Each record covers one topic and follows a strict five-section template. Records are stored as JS data files; a single `record.html` page renders any of them. Your job is to produce a new data file and register it in the manifest.

## Step 1 — Read the schema before writing anything

Always read these files first so the new record matches the existing system exactly:

1. `records/data/pilates.js` — canonical example of a standard record with one round. Mirror its shape exactly.
2. `records/data/llm-embeddings.js` — canonical example of a full three-round record (use this when all rounds are complete).
3. `records/data/boba-tea.js` — example with a pending round (uses the `status` field instead of mine/polished).
4. `records/manifest.js` — append one entry to `window.RECORDS_INDEX` so the card appears.

Do **not** read or modify `assets/style.css`, `record.html`, or `index.html`. The renderer and the template already exist; adding a record never touches them.

## Step 2 — Gather content from the user

You need all of the following before generating. If anything is missing, ask the user for it before continuing — do not invent content.

- **English title** (e.g. "Transformer Attention")
- **Traditional Chinese title** (e.g. "Transformer 注意力機制")
- **Slug** — short, lowercase, kebab-case (e.g. `transformer-attention`). Becomes the filename under `records/data/` and the `?slug=` URL parameter.
- **Domain tag** — one short label for the listing card (e.g. "AI", "Linguistics", "Biology")
- **One-sentence English summary** for the listing card
- **Section 1 — Chinese intro**: 2–3 short paragraphs in Traditional Chinese
- **Section 2 — Three passages**, one per CEFR level:
  - C1: ~100–130 words, sophisticated vocabulary, varied syntax
  - B2: ~100–130 words, simpler vocabulary, mostly straightforward sentences
  - B1: ~80–110 words, basic vocabulary, short sentences
- **Section 3 — Vocabulary table**: six rows mapping a narrative function to phrasing at each level. Functions are: Hook question, Topic reveal, Definition, Mechanism, Applications, Closing insight.
- **Section 4 — Three practice rounds**, each with:
  - Prompt
  - "My response" — the user's actual attempt, mistakes preserved
  - "Polished version" — corrected
  - Key corrections — list of items, each one naming the issue type and showing `wrong` → `right`
  - Level — e.g. B2+, C1, C1+
  - If the round is incomplete, the user can give just the prompt and a "status" note instead.
- **Section 5 — Progress summary**: one line per round plus one closing italic note

If the user gave you a Markdown template that already covers all of this, parse it and proceed. Otherwise, ask for what's missing in one batch — don't drip-feed questions.

## Step 3 — Create `records/data/<slug>.js`

Mirror `records/data/pilates.js` exactly. The file assigns one entry to `window.RECORD_REGISTRY`:

```js
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['<slug>'] = {
  meta: {
    slug: '<slug>',
    date: 'YYYY-MM-DD',                          // today's system date
    titleEn: '<English title>',
    titleZh: '<Chinese title>',
    method: 'standard',
    navBrandText: '<short brand text for the nav>',
    heroTitle: '<full <h1> text, often "Title — A Personal Study Record">',
  },
  intro: {
    zhTitle: '主題簡介：<English title>',
    paragraphs: ['<para 1>', '<para 2>', '<para 3>'],
  },
  passages: { c1: '<C1 paragraph>', b2: '<B2 paragraph>', b1: '<B1 paragraph>' },
  vocabulary: [
    { step: 'Hook question',   c1: '...', b2: '...', b1: '...' },
    { step: 'Topic reveal',    c1: '...', b2: '...', b1: '...' },
    { step: 'Definition',      c1: '...', b2: '...', b1: '...' },
    { step: 'Mechanism',       c1: '...', b2: '...', b1: '...' },
    { step: 'Applications',    c1: '...', b2: '...', b1: '...' },
    { step: 'Closing insight', c1: '...', b2: '...', b1: '...' },
  ],
  rounds: [
    {
      number: 1,
      prompt: '<prompt HTML — <em>, <strong> are OK>',
      mine: '<my response, with <mark>…</mark> around differing spans>',
      polished: '<polished version, with <mark>…</mark> around differing spans>',
      corrections: ['<bullet 1 HTML>', '<bullet 2 HTML>'],   // <code>, <em> allowed
      level: { badge: 'c1', text: 'Level: Solid C1' },        // badge: 'b2' | 'c1' | 'c1plus'
    },
    // pending round example:
    {
      number: 3,
      prompt: '<prompt HTML>',
      status: '<italic status text>',
      statusHeading: 'Status',
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: '<heading text>',
    items: [
      { round: 1, levelPill: 'C1', html: '<short reflection HTML>' },
      // pending summary item (no levelPill):
      { round: 3, html: '<em>Pending — …</em>' },
    ],
    note: '"<closing italic note>"',
  },
};
```

In each round's `mine` and `polished` strings, wrap the spans that differ between the two in `<mark>...</mark>`. Keep the surrounding text identical between the two sides except for the marked spans. Inline `<em>`, `<code>`, `<br>`, `<strong>` are allowed anywhere the schema accepts HTML.

Use the right badge class for the level tag:
- B2 / B2+ → `badge: 'b2'`
- C1 → `badge: 'c1'`
- C1+ / C2-reaching → `badge: 'c1plus'`

## Step 4 — Append an entry to `records/manifest.js`

Add one object to the `window.RECORDS_INDEX` array (anywhere — entries are sorted by date desc at render time):

```js
{
  slug: '<slug>',
  date: 'YYYY-MM-DD',
  titleEn: '<English title>',
  titleZh: '<Chinese title>',
  summary: '<one-sentence summary>',
  tags: ['<domain tag>', 'C1 / B2 / B1', '<rounds tag — see below>'],
  method: 'standard',
},
```

Pick the `tags[2]` wording to match the current state of the record:
- All three rounds complete → `'3 practice rounds'`
- Two complete, third pending → `'2 of 3 rounds done'`
- One complete, second pending → `'1 of 2 rounds done'`
- Single completed round → `'1 practice round'`
- Two completed rounds, no third planned → `'2 practice rounds'`

## Constraints

- **Date**: always use today's system date. Do not ask the user for it.
- **No new styles**: do not add `<style>` blocks or modify `assets/style.css`. Every visual element already has a class.
- **No new section types**: keep the five-section template intact for standard records.
- **Slug rules**: lowercase, kebab-case, no spaces, no punctuation other than hyphens. Once chosen, it must match the data filename and the manifest entry.
- **Don't touch other records** in `records/data/`.
- **Don't push to git** unless the user explicitly asks.

## When done

In one or two sentences, tell the user:
- The path of the new data file (`records/data/<slug>.js`)
- That an entry was appended to `records/manifest.js`
- The local URL the user can open in a browser to view it (`record.html?slug=<slug>`)
