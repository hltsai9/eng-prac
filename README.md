# English Learning Records

A small static site for keeping a personal collection of English learning records. Each record covers one topic and contains a Chinese intro, three CEFR-level passages (C1 / B2 / B1), a vocabulary comparison table, and three rounds of practice with polished versions and feedback.

## Project Structure

```
Eng-Prac/
├── index.html                  # Listing page — the cards of all records
├── espresso.html               # Espresso-method live practice page
├── README.md                   # This file (with the prompt template)
├── assets/
│   ├── style.css               # Shared design system used by every page
│   └── espresso-topics.js      # Editable list of Espresso prompts
└── records/
    └── llm-embeddings.html     # One record per file (the canonical example)
```

- `index.html` is the home page. It shows a grid of cards, one per record, with the creation date.
- Each record lives as its own file in `records/<slug>.html` and uses the shared stylesheet at `../assets/style.css`.
- To add a new record, you create a new file under `records/` and insert one new `<a class="record-card">` block at the top of the grid in `index.html`.

## Viewing the site

Open `index.html` directly in a browser (double-click or `file://`) — there is no build step and no server required. Click any card to open the record. Use the **← All records** link in the record's nav to come back.

## Adding a new record (in another Claude chat)

This repo ships with a Claude Code skill at `.claude/skills/new-learning-record/SKILL.md`. Open a fresh Claude Code chat with this folder as the working directory and either:

- **Use the skill**: type `/new-learning-record` (or just describe the topic — Claude will pick it up from the description). The skill knows the template, will ask for any missing content, and will create both the new record file and the listing card.
- **Or paste the prompt below** — it produces the same result without relying on the skill, useful in non-Claude-Code chats.

Open a fresh Claude Code chat with this folder as the working directory and paste the prompt below, replacing the bracketed placeholders with your topic content. Claude will read the existing record as a template, generate a new `records/<slug>.html`, and prepend a new card to `index.html`.

````markdown
# Task: Add a new English Learning Record

I have a static site at this folder for keeping English learning records. Read these two files first to understand the structure and the design system you must follow:

- `records/llm-embeddings.html` — the canonical example. Copy its structure exactly: same `<head>`, same five sections (Intro / Passages / Vocabulary / Practice / Summary), same nav with the "← All records" link, same tabs/back-to-top JS at the bottom.
- `assets/style.css` — the shared stylesheet. Use only the classes already defined here (card, prose, tabs, tab-button, table.vocab, round, compare, corrections, badge, summary-card, etc.). Do NOT add a `<style>` block; link `../assets/style.css` like the example does.
- `index.html` — the listing page. You will insert a new `<a class="record-card">` block at the TOP of the `.records-grid` (newest first), just after the `<!-- RECORDS LIST -->` comment.

Then do the following two things:

1. **Create `records/<slug>.html`** where `<slug>` is a short kebab-case version of the topic title (e.g. `transformer-attention`, `vector-databases`). The file must mirror `records/llm-embeddings.html` exactly in structure — change only the title, the date in the `<meta name="record-date">` and the hero `<time>` element (use today's date in `YYYY-MM-DD` and a human-friendly form like "May 3, 2026"), and the content of each section.

2. **Insert one new card** at the top of the `.records-grid` in `index.html`, matching this template:

   ```html
   <a class="record-card" href="records/<slug>.html">
     <span class="date"><time datetime="YYYY-MM-DD">Month D, YYYY</time></span>
     <h3 class="title">[Topic Title]</h3>
     <p class="chinese">[Chinese title]</p>
     <p class="summary">[1–2 sentence English summary]</p>
     <div class="tags">
       <span class="tag">[domain tag]</span>
       <span class="tag">C1 / B2 / B1</span>
       <span class="tag">3 practice rounds</span>
     </div>
     <span class="open-arrow">Open record →</span>
   </a>
   ```

Do not modify `assets/style.css` or any other existing record. Do not invent new section types — keep the five-section template intact.

---

## Record content

**Topic title (English):** [e.g. Transformer Attention]
**Topic title (Chinese):** [e.g. Transformer 注意力機制]
**Slug for filename:** [e.g. transformer-attention]
**Date:** [today's date — use the system date]

### SECTION 1 — Topic Introduction (Traditional Chinese)
[2–3 short paragraphs in Traditional Chinese explaining the topic for a general audience.]

### SECTION 2 — Three-Level English Passages

**C1 (Advanced):**
[A single paragraph at C1 level, ~100–130 words, using sophisticated vocabulary and varied syntax.]

**B2 (Upper-Intermediate):**
[Same content idea, ~100–130 words, simpler vocabulary, mostly straightforward sentences.]

**B1 (Intermediate):**
[Same content idea, ~80–110 words, basic vocabulary, short sentences.]

### SECTION 3 — Vocabulary Comparison Table

Six rows mapping a narrative function to the C1, B2, and B1 wording:

| Narrative Step    | C1                       | B2                       | B1                       |
|-------------------|--------------------------|--------------------------|--------------------------|
| Hook question     | […]                      | […]                      | […]                      |
| Topic reveal      | […]                      | […]                      | […]                      |
| Definition        | […]                      | […]                      | […]                      |
| Mechanism         | […]                      | […]                      | […]                      |
| Applications      | […]                      | […]                      | […]                      |
| Closing insight   | […]                      | […]                      | […]                      |

### SECTION 4 — Three Practice Rounds

For each of three rounds, provide:

- **Round N prompt:** [the speaking/writing prompt]
- **My response:** [my actual attempt, including the mistakes]
- **Polished version:** [the corrected version]
- **Key corrections:** [bulleted list — each item names the issue type and shows `wrong` → `right`]
- **Level:** [B2+ / C1 / C1+ etc.]

In the polished and "my response" paragraphs, wrap the differing spans in `<mark>...</mark>` so the comparison highlights them, exactly as the LLM Embeddings example does.

### SECTION 5 — Progress Summary

Three bullet lines (one per round) and one closing italic note, matching the structure of the existing `<footer class="summary">` block.

---

When you're done, briefly tell me which two files you changed.
````

## The Espresso method (speaking practice)

A second learning mode, complementing the paragraph-based records: a timed three-round speaking drill on a single topic, with the speech window shrinking each round to force distillation.

- **Round 1**: 3-minute prep → 60-second speech
- **Round 2**: 3-minute prep (with reflection hints — pauses / errors / omissions from R1) → 50-second speech
- **Round 3**: 3-minute prep (with structural hints — cut details, lead with the strongest point) → 40-second speech
- **Capture**: write down your final speech and paste an AI-improved version side-by-side

Open `espresso.html` to start a session. The page runs the timers, shows the hints at the right moments, and at the end lets you **download a record HTML file** that matches the existing record template.

### Topics

The topic list lives at `assets/espresso-topics.js`. Edit it directly — it's a single JS array literal. Refresh `espresso.html` to pick up changes. You can also type a custom topic at the start of any session via the "Use my own" toggle.

### Saving a session as a record

After Round 3 you'll be prompted to capture your final speech and paste a polished rewrite. On the Done stage:

1. Click **Download record HTML** — the file saves as `espresso-<slug>-<date>.html`.
2. Move the file into `records/`.
3. Add a matching `<a class="record-card">` block at the top of the grid in `index.html`, with a tag like `<span class="tag">Espresso · 60s/50s/40s</span>` to distinguish it from paragraph records.

## Tips

- **Slugs**: keep them short and lowercase, hyphen-separated. They become the filename and the URL — once chosen, don't rename without also updating the card link.
- **Date order**: the listing is newest-first. Insert the new card at the top of the grid, not the bottom.
- **Don't fork the styles**: every visual element on a record page already has a class in `assets/style.css`. If something looks unstyled, check that you used the right class — don't add a one-off `<style>` block.
- **Print**: each record is print-friendly out of the box (the nav and back-to-top button are hidden, tabs expand, comparison stays side-by-side).
