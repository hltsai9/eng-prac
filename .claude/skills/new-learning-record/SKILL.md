---
name: new-learning-record
description: Add a new English learning record to this site. Triggers when the user wants to create a new record, log a study session, or add a topic to the learning library. A record consists of a Traditional Chinese intro, three CEFR-level passages (C1/B2/B1), a vocabulary mapping table, three practice rounds with corrections, and a progress summary. The skill creates records/<slug>.html and inserts a new card into index.html.
---

# Add a new English Learning Record

This is a personal English learning site. Each record covers one topic and follows a strict five-section template. Your job is to produce a new record file and register it in the listing page.

## Step 1 — Read the template before writing anything

Always read these two files first so the new record matches the existing system exactly:

1. `records/llm-embeddings.html` — the canonical example. Copy its structure: same `<head>` (linking `../assets/style.css`), same nav with the "← All records" link, same five sections (Intro / Passages / Vocabulary / Practice / Summary), same tabs/back-to-top JS at the end.
2. `index.html` — find the `<div class="records-grid" id="recordsGrid">`. New cards go directly inside the opening tag, at the top (newest first).

Do **not** read or modify `assets/style.css`. Use only the classes already defined there.

## Step 2 — Gather content from the user

You need all of the following before generating. If anything is missing, ask the user for it before continuing — do not invent content.

- **English title** (e.g. "Transformer Attention")
- **Traditional Chinese title** (e.g. "Transformer 注意力機制")
- **Slug** — short, lowercase, kebab-case (e.g. `transformer-attention`). Becomes the filename.
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
  - Key corrections — bulleted list, each item naming the issue type and showing `wrong` → `right`
  - Level — e.g. B2+, C1, C1+
- **Section 5 — Progress summary**: one line per round plus one closing italic note

If the user gave you a Markdown template that already covers all of this, parse it and proceed. Otherwise, ask for what's missing in one batch — don't drip-feed questions.

## Step 3 — Create `records/<slug>.html`

Mirror `records/llm-embeddings.html` exactly. Only these things change:

- `<title>` and `<h1>` — use the new English title
- `<meta name="record-date" content="YYYY-MM-DD">` — today's date in ISO form
- The hero `<time datetime="YYYY-MM-DD">Month D, YYYY</time>` — same date, human form
- Section content (Chinese intro, three passages, vocab table rows, three rounds, summary)
- Update the `.summary-note` italic line to fit the new topic if appropriate

In each Round's `compare-text` paragraph, wrap the spans that differ between "My response" and "Polished version" in `<mark>...</mark>` so the visual highlighting works. Keep the surrounding text identical between the two sides except for the marked spans.

Use the right badge class for the level tag:
- B2 / B2+ → `<span class="badge b2">`
- C1 → `<span class="badge c1">`
- C1+ / C2-reaching → `<span class="badge c1plus">`

## Step 4 — Add a card to `index.html`

Insert this block at the very top of `<div class="records-grid" id="recordsGrid">`, immediately after the opening tag (so it appears as the newest record):

```html
<a class="record-card" href="records/<slug>.html">
  <span class="date"><time datetime="YYYY-MM-DD">Month D, YYYY</time></span>
  <h3 class="title">[English title]</h3>
  <p class="chinese">[Chinese title]</p>
  <p class="summary">[one-sentence English summary]</p>
  <div class="tags">
    <span class="tag">[domain tag]</span>
    <span class="tag">C1 / B2 / B1</span>
    <span class="tag">3 practice rounds</span>
  </div>
  <span class="open-arrow">Open record →</span>
</a>
```

## Constraints

- **Date**: always use today's system date. Do not ask the user for it.
- **No new styles**: do not add `<style>` blocks or modify `assets/style.css`. Every visual element already has a class.
- **No new section types**: keep the five-section template intact.
- **Slug rules**: lowercase, kebab-case, no spaces, no punctuation other than hyphens. Once chosen, it must match the filename and the card link.
- **Don't touch other records** in `records/`.
- **Don't push to git** unless the user explicitly asks.

## When done

In one or two sentences, tell the user:
- The path of the new record file
- That a card was added to the top of `index.html`
- The local path the user can open in a browser to view it (`index.html`)
