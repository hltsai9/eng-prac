/* Records manifest — every record that should appear on the index page.
 *
 * Each entry drives one card on index.html. Cards are sorted by `date` descending,
 * so insertion order here doesn't matter. To add a new record:
 *   1. Create records/data/<slug>.js (define window.RECORD_REGISTRY[<slug>] = {...})
 *   2. Append an entry below with the matching slug.
 *
 * Fields:
 *   slug        Filename under records/data/ (kebab-case, no extension).
 *   date        ISO YYYY-MM-DD. Used for sorting + the monthly practice count.
 *   titleEn     English title, shown as the card heading.
 *   titleZh     Traditional Chinese title (subtitle).
 *   summary     One-line English summary.
 *   tags        Free-form labels shown as small pills (preserves per-card wording).
 *   method      'standard' (5-section) or 'espresso' (timed 3-round) — informational.
 */
window.RECORDS_INDEX = [
  {
    slug: 'espresso-ipad-2026-05-17',
    date: '2026-05-17',
    titleEn: 'The iPad',
    titleZh: '悄悄改變日常的科技',
    summary: "Two ways a tablet quietly reshaped daily life — digital notes that don't pile up, and travel videos that finally fit the screen.",
    tags: ['Tech', 'Espresso', '60·50·40s'],
    method: 'espresso',
  },
  {
    slug: 'claude-skill-folder',
    date: '2026-05-15',
    titleEn: 'Claude Skill Folder and Markdown File',
    titleZh: 'Claude 技能資料夾與 Markdown 檔案',
    summary: 'How a folder with a single SKILL.md file teaches Claude when to act and how to follow domain-specific best practices step by step.',
    tags: ['AI', 'C1 / B2 / B1', '1 practice round'],
    method: 'standard',
  },
  {
    slug: 'claude-skill',
    date: '2026-05-14',
    titleEn: 'Claude Skill',
    titleZh: 'Claude 技能',
    summary: "Anthropic's answer to the prompt-pasting problem — a folder bundling instructions and resources that Claude loads on demand.",
    tags: ['AI', 'C1 / B2 / B1', '1 of 2 rounds done'],
    method: 'standard',
  },
  {
    slug: 'internal-audit',
    date: '2026-05-13',
    titleEn: 'Internal Audit',
    titleZh: '內部稽核',
    summary: 'The quiet function that keeps modern companies from drifting into chaos — what internal auditors actually do, and why the role matters.',
    tags: ['Business', 'C1 / B2 / B1', '1 of 2 rounds done'],
    method: 'standard',
  },
  {
    slug: 'calves-soreness-walk',
    date: '2026-05-12',
    titleEn: 'Calves Soreness After a Long Walk',
    titleZh: '長時間步行後的小腿痠痛',
    summary: 'Why a long walk leaves your calves throbbing the next morning — and what foam rolling, hydration, and gentle stretching actually do.',
    tags: ['Health', 'C1 / B2 / B1', '1 of 2 rounds done'],
    method: 'standard',
  },
  {
    slug: 'boba-tea',
    date: '2026-05-10',
    titleEn: 'Boba Tea',
    titleZh: '珍珠奶茶',
    summary: 'Why a humble milk tea with chewy tapioca pearls — born in 1980s Taiwan — quietly became a global cultural ambassador.',
    tags: ['Food & Culture', 'C1 / B2 / B1', '2 of 3 rounds done'],
    method: 'standard',
  },
  {
    slug: 'sequoia-national-park',
    date: '2026-05-08',
    titleEn: 'Sequoia National Park',
    titleZh: '紅杉國家公園',
    summary: "How California's southern Sierra Nevada hides the largest living organisms on Earth — and what a walk among the giant sequoias reveals about deep time.",
    tags: ['Nature', 'C1 / B2 / B1', '1 of 2 rounds done'],
    method: 'standard',
  },
  {
    slug: 'pilates',
    date: '2026-05-07',
    titleEn: 'Pilates',
    titleZh: '皮拉提斯',
    summary: 'How a low-impact discipline focused on quality of movement builds core strength, posture, and body awareness — rewarding patience over exhaustion.',
    tags: ['Fitness', 'C1 / B2 / B1', '1 practice round'],
    method: 'standard',
  },
  {
    slug: 'keeping-a-journal',
    date: '2026-05-06',
    titleEn: 'Keeping a Journal',
    titleZh: '寫日記的習慣',
    summary: 'How a few quiet minutes a day with pen and paper can untangle thoughts, sharpen self-awareness, and quietly reshape how we relate to ourselves.',
    tags: ['Habits', 'C1 / B2 / B1', '1 practice round'],
    method: 'standard',
  },
  {
    slug: 'full-cast-audiobook',
    date: '2026-05-05',
    titleEn: 'Full Cast Audiobook',
    titleZh: '全演員陣容有聲書',
    summary: 'How a full cast audiobook turns a single-narrator reading into a radio-drama-style experience with multiple actors, sound design, and atmospheric scoring.',
    tags: ['Audiobooks', 'C1 / B2 / B1', '2 practice rounds'],
    method: 'standard',
  },
  {
    slug: 'placebo-effect',
    date: '2026-05-04',
    titleEn: 'The Placebo Effect',
    titleZh: '安慰劑效應',
    summary: 'How belief alone can trigger real physiological change — and why every modern drug trial must outperform a sugar pill.',
    tags: ['Medicine', 'C1 / B2 / B1', '1 practice round'],
    method: 'standard',
  },
  {
    slug: 'llm-embeddings',
    date: '2026-05-03',
    titleEn: 'LLM Embeddings',
    titleZh: 'LLM 嵌入',
    summary: 'How language models grasp meaning by turning words into high-dimensional vectors that encode semantic relationships.',
    tags: ['AI', 'C1 / B2 / B1', '3 practice rounds'],
    method: 'standard',
  },
];
