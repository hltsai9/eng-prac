# English Learning Records

A small static site for keeping a personal collection of English learning records. Each record covers one topic and contains a Chinese intro, three CEFR-level passages (C1 / B2 / B1), a vocabulary comparison table, and three rounds of practice with polished versions and feedback.

## Project Structure

```
Eng-Prac/
├── index.html                       # Listing page — renders cards from the manifest
├── record.html                      # Single template that renders any record via ?slug=
├── espresso.html                    # Espresso-method live practice page
├── pet-history.html                 # Pet growth gallery (dynamic, per species)
├── README.md                        # This file
├── assets/
│   ├── style.css                    # Shared design system used by every page
│   ├── index-renderer.js            # Builds the grid of record cards from manifest
│   ├── record-renderer.js           # Renders a record page from its data file
│   ├── pet-registry.js              # Pluggable pet registry + loader
│   ├── pet-schedule.js              # Maps year-month → pet species
│   ├── espresso-topics.js           # Editable list of Espresso prompts
│   └── pets/
│       ├── manifest.js              # Lists pet species to auto-load
│       └── cat.js                   # Maomi the Cat (May 2026 companion)
└── records/
    ├── manifest.js                  # Cards list — slug, date, title, tags, summary
    └── data/                        # One JS data file per record
        ├── llm-embeddings.js
        ├── boba-tea.js
        └── … (one per topic)
```

- **No build step.** The site is pure static files and works directly via `file://`.
- **Adding a record = creating one file + appending one manifest entry.** The card on `index.html` and the rendered page at `record.html?slug=<slug>` both appear automatically.
- **Adding a new pet next month = dropping one file under `assets/pets/`** + listing it in `assets/pets/manifest.js` + assigning it to a month in `assets/pet-schedule.js`. Each pet is self-contained: its own SVG, growth stages, and CSS rules.

## Viewing the site

Open `index.html` directly in a browser (double-click or `file://`) — there is no build step and no server required. Click any card to open it at `record.html?slug=<slug>`. Use the **← All records** link in the record's nav to come back.

## Adding a new record (in another Claude chat)

This repo ships with a Claude Code skill at `.claude/skills/new-learning-record/SKILL.md`. Open a fresh Claude Code chat with this folder as the working directory and either:

- **Use the skill**: type `/new-learning-record` (or just describe the topic — Claude will pick it up from the description). The skill knows the data schema, will ask for any missing content, and will create both the new data file and the manifest entry.
- **Or paste the prompt below** — it produces the same result without relying on the skill, useful in non-Claude-Code chats.

````markdown
# Task: Add a new English Learning Record

I have a static site at this folder for keeping English learning records. Read these files first to understand the schema you must follow:

- `records/data/pilates.js` — the canonical example of a one-round standard record. Mirror its shape exactly.
- `records/data/llm-embeddings.js` — canonical example of a full three-round record.
- `records/data/boba-tea.js` — example with a pending round (use the `status` field).
- `records/manifest.js` — append one entry here so the card appears.
- `assets/style.css` — the shared stylesheet. Use only the classes already defined here. Do NOT add a `<style>` block.

Then do the following two things:

1. **Create `records/data/<slug>.js`** where `<slug>` is short kebab-case (e.g. `transformer-attention`). The file assigns `window.RECORD_REGISTRY[<slug>] = { meta, intro, passages, vocabulary, rounds, summary }`. In each round's `mine` and `polished` strings, wrap the differing spans in `<mark>…</mark>` for the comparison highlights. Pending rounds use `{ number, prompt, status, statusHeading: 'Status' }` instead of mine/polished/corrections/level.

2. **Append an entry** to `window.RECORDS_INDEX` in `records/manifest.js`:

   ```js
   {
     slug: '<slug>',
     date: 'YYYY-MM-DD',
     titleEn: '[Topic Title]',
     titleZh: '[Chinese title]',
     summary: '[1–2 sentence English summary]',
     tags: ['[domain]', 'C1 / B2 / B1', '3 practice rounds'],
     method: 'standard',
   },
   ```

Do not modify `assets/style.css` or any other existing record. Keep the five-section template intact for standard records.

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

For each round, provide:

- **Round N prompt:** [the speaking/writing prompt]
- **My response:** [my actual attempt, including the mistakes]
- **Polished version:** [the corrected version]
- **Key corrections:** [bulleted list — each item names the issue type and shows `wrong` → `right`]
- **Level:** [B2+ / C1 / C1+ etc.]

In the polished and "my response" strings, wrap the differing spans in `<mark>...</mark>` so the comparison highlights them, exactly as the existing examples do.

### SECTION 5 — Progress Summary

Three bullet lines (one per round) and one closing italic note. Each item: `{ round, levelPill, html }` for completed rounds, `{ round, html: '<em>Pending — …</em>' }` for pending ones.

---

When you're done, briefly tell me which two files you changed.
````

## The Espresso method (speaking practice)

A second learning mode, complementing the paragraph-based records: a timed three-round speaking drill on a single topic, with the speech window shrinking each round to force distillation.

- **Round 1**: 3-minute prep → 60-second speech
- **Round 2**: 3-minute prep (with reflection hints — pauses / errors / omissions from R1) → 50-second speech
- **Round 3**: 3-minute prep (with structural hints — cut details, lead with the strongest point) → 40-second speech
- **Capture**: write down your final speech and paste an AI-improved version side-by-side

Open `espresso.html` to start a session. The page runs the timers, shows the hints at the right moments, and at the end lets you **download a record data file** that drops into `records/data/`.

### Topics

The topic list lives at `assets/espresso-topics.js`. Edit it directly — it's a single JS array literal. Refresh `espresso.html` to pick up changes. You can also type a custom topic at the start of any session via the "Use my own" toggle.

### Saving a session as a record

After Round 3 you'll be prompted to capture your final speech and paste a polished rewrite. On the Done stage:

1. Click **Download record** — the file saves as `espresso-<slug>-<date>.js`.
2. Move the file into `records/data/`.
3. The download also includes a manifest snippet comment at the bottom — paste it into `records/manifest.js`.

## Adding a new pet (a new species each month)

Each pet is fully self-contained, so adding one next month is a small change:

1. **Create `assets/pets/<species>.js`** that calls `window.PetRegistry.register('<species>', { displayName, historyTitle, historyIntroHtml, svg, stages, css })`. Use `assets/pets/cat.js` as the template — it's a full, working example. The `stages` array can have any length and any thresholds; CSS rules in `css` should be scoped with `.pet-container[data-species="<species>"]` so they never collide with other pets.
2. **Register the species** by appending it to `window.PET_SPECIES` in `assets/pets/manifest.js`.
3. **Assign it to a month** by adding an entry to `window.PET_SCHEDULE` in `assets/pet-schedule.js`, e.g. `'2026-06': 'dog'`.

That's it — `index.html` will now show the new pet for that month, and `pet-history.html?species=<species>` will render its full stage gallery.

## Tips

- **Slugs**: keep them short and lowercase, hyphen-separated. They become the data filename and the `?slug=` URL parameter — once chosen, don't rename without also updating the manifest entry.
- **Date order**: the listing is newest-first. The renderer sorts by date — you can append manifest entries in any order.
- **Don't fork the styles**: every visual element on a record page already has a class in `assets/style.css`. If something looks unstyled, check that you used the right class — don't add a one-off `<style>` block.
- **Print**: each record is print-friendly out of the box (the nav and back-to-top button are hidden, tabs expand, comparison stays side-by-side).
