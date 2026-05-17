/* Claude Skill Folder and Markdown File — standard record (1 round). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['claude-skill-folder'] = {
  meta: {
    slug: 'claude-skill-folder',
    date: '2026-05-15',
    titleEn: 'Claude Skill Folder and Markdown File',
    titleZh: 'Claude 技能資料夾與 Markdown 檔案',
    method: 'standard',
    navBrandText: 'Claude Skill Folder',
    heroTitle: 'Claude Skill Folder and Markdown File — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：Claude 技能資料夾與 Markdown 檔案',
    paragraphs: [
      'Claude 的「Skill」是一個資料夾，裡面放著一份 SKILL.md 檔案，用來教 Claude 處理特定任務的最佳做法。當使用者的需求符合該技能的描述時，Claude 會先閱讀這個 Markdown 檔，再依照裡面的指引動手執行，確保輸出更專業、更一致。',
      'SKILL.md 的開頭（frontmatter）會宣告這個技能何時該被啟用，後續內容則一步步引導 Claude 完成工作流程。這種設計讓 Claude 不必只依賴訓練時學到的知識，而是能在需要時參考最新、最權威的指令。',
      '這項機制特別適合處理 .pptx、.docx、PDF 等檔案格式，或任何需要遵循固定流程的任務。團隊也能透過共享 Skill 資料夾，把專業知識制度化、版本化。',
    ],
  },
  passages: {
    c1: "Have you ever wondered how Claude consistently nails niche tasks like building slide decks or filling PDFs? The mechanism lies in something called skills. Essentially, a skill is a folder containing a single SKILL.md file — a markdown document that encodes hard-won, domain-specific best practices. The frontmatter declares when the skill should fire, while the body walks Claude through the workflow step by step. Once a user's request aligns with the description, Claude quietly consults the file before writing a single line of code. Rather than relying on memory alone, the model defers to authoritative instructions — a remarkably elegant solution that scales expertise.",
    b2: "Have you ever wondered how Claude reliably handles specific tasks like making slide decks or filling PDFs? The answer is something called skills. Basically, a skill is a folder that holds one SKILL.md file — a markdown document that contains useful, focused best practices. The top section tells Claude when to use the skill, while the rest explains the steps to follow. Once a user's request matches the description, Claude reads the file before it writes any code. Instead of just relying on what it already knows, the model follows clear instructions — a clever solution that helps it work consistently across many tasks.",
    b1: "Have you ever thought about how Claude does special jobs well, like making slides or filling PDFs? The answer is something called skills. In simple terms, a skill is a folder with one SKILL.md file inside — a markdown file with helpful tips for one kind of task. The top part tells Claude when to use the skill, and the rest shows the steps. When a user's request fits the description, Claude reads the file before writing any code. The model does not just guess from what it learned before. It follows clear notes. It is a smart idea that helps Claude work well.",
  },
  vocabulary: [
    { step: 'Hook question',    c1: 'wondered / consistently nails',                       b2: 'wondered / reliably handles',                       b1: 'thought about / does well' },
    { step: 'Topic reveal',     c1: 'The mechanism lies in',                               b2: 'The answer is',                                     b1: 'The answer is' },
    { step: 'Definition',       c1: 'folder containing / encodes hard-won best practices', b2: 'folder that holds / contains useful best practices', b1: 'folder with / has helpful tips' },
    { step: 'Mechanism',        c1: 'frontmatter declares / walks Claude through',         b2: 'top section tells / explains the steps',            b1: 'top part tells / shows the steps' },
    { step: 'Applications',     c1: 'quietly consults / defers to authoritative instructions', b2: 'reads the file / follows clear instructions',  b1: 'reads the file / follows clear notes' },
    { step: 'Closing insight',  c1: 'remarkably elegant solution that scales expertise',   b2: 'clever solution that helps it work consistently',  b1: 'smart idea that helps Claude work well' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'Imagine you\'re explaining Claude skills to a curious developer friend over coffee. In about 60–90 seconds, walk them through what a skill folder is, what\'s inside the SKILL.md file, and why this design matters. Try to use at least four of these expressions: <em>"Have you ever wondered…", "The mechanism lies in…", "encodes / contains best practices", "the frontmatter declares…", "quietly consults / defers to", "a clever solution that scales…"</em>',
      mine: "Have you ever wondered how Claude nails niche tasks like building slide decks <mark>and</mark> filling PDFs? The answer lies in skills. Essentially, a skill is a folder with a SKILL.md <mark>file, a markdown document, the frontmatter tells</mark> Claude when to invoke it, while the body walks Claude through the workflow step by step. When the task aligns with the skill description, Claude reads the file before it writes any code. Rather than relying on what it already knows, the model follows the instructions and carries out consistent processes. It's an elegant <mark>approach to scales expertise when needed</mark>.",
      polished: "Have you ever wondered how Claude nails niche tasks like building slide decks <mark>or</mark> filling PDFs? The answer lies in skills. Essentially, a skill is a folder with a SKILL.md <mark>file — a markdown document whose frontmatter tells</mark> Claude when to invoke it, while the body walks Claude through the workflow step by step. When the task aligns with the skill description, Claude reads the file before it writes any code. Rather than relying on what it already knows, the model follows the instructions and carries out consistent processes. It's an elegant <mark>approach that scales expertise across tasks</mark>.",
      corrections: [
        'Comma splice / clause stacking: <code>a markdown document, the frontmatter tells Claude when to invoke it</code> → <code>a markdown document whose frontmatter tells Claude when to invoke it</code> (use <em>whose</em> to turn the second clause into a relative clause)',
        'Preposition + verb form: <code>an elegant approach to scales expertise</code> → <code>an elegant approach that scales expertise</code> (<em>approach to</em> takes a noun/gerund, not a bare verb)',
        'Empty trailing modifier: <code>scales expertise when needed</code> → <code>scales expertise across tasks</code> (<em>when needed</em> is semantically empty here — expertise is distributed, not summoned on demand)',
        'Idiomatic choice with <em>like</em>: <code>like building slide decks and filling PDFs</code> → <code>like building slide decks or filling PDFs</code> (<em>or</em> is more idiomatic when listing examples)',
      ],
      level: { badge: 'c1plus', text: 'Level: C1, reaching toward C1+' },
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Growth Across Practice',
    items: [
      { round: 1, levelPill: 'C1+', html: 'strong vocabulary and discourse control; lost grip on sentence boundaries inside a stacked clause and on the preposition after "approach"' },
    ],
    note: '"At C1 the next ceiling isn\'t vocabulary — it\'s syntactic control under ambition. When the sentence gets long, pick the structure (relative clause vs. independent clause) before committing."',
  },
};
