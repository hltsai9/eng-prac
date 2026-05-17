/* Claude Skill — standard record (1 of 2 rounds done). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['claude-skill'] = {
  meta: {
    slug: 'claude-skill',
    date: '2026-05-14',
    titleEn: 'Claude Skill',
    titleZh: 'Claude 技能',
    method: 'standard',
    navBrandText: 'Claude Skill',
    heroTitle: 'Claude Skill — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：Claude Skill',
    paragraphs: [
      'Claude 的 Skill（技能）功能讓使用者把專業知識打包成可重複使用的指令集。每個 Skill 是一個資料夾，包含說明檔與相關資源，Claude 會在偵測到相關任務時自動載入。',
      '這項設計避免了重複貼上長提示，也讓團隊能共享最佳實踐，是打造一致 AI 工作流程的關鍵工具。',
    ],
  },
  passages: {
    c1: "Anyone who's spent serious time prompting Claude eventually runs into the same wall: you keep pasting the same instructions over and over. Skills are Anthropic's answer to that. Essentially, a Skill is a folder bundling a SKILL.md file with whatever scripts or references Claude needs, and the model loads it on demand whenever a task matches. Rather than cramming everything into one bloated system prompt, you let Claude pull in expertise only when it's relevant. This unlocks consistent workflows across teams, version-controlled know-how, and dramatically leaner context windows. It's a remarkably elegant fix for a problem most power users had quietly resigned themselves to.",
    b2: "Anyone who uses Claude a lot eventually hits the same problem: you end up pasting the same instructions again and again. Skills are Anthropic's solution. Basically, a Skill is a folder that contains a SKILL.md file along with any scripts or notes Claude needs, and the model opens it whenever a task matches. Instead of stuffing everything into one huge system prompt, you let Claude pull in the right knowledge only when it's useful. This supports consistent workflows across teams, version control for shared know-how, and much smaller context windows. It's a clever fix for a problem most heavy users had quietly accepted.",
    b1: "People who use Claude a lot often have the same problem. They have to paste the same instructions many times. Skills help fix this. In simple terms, a Skill is a folder. It has a file called SKILL.md and any other notes or scripts Claude needs. Claude opens the folder when a task matches it. You do not have to put everything in one long prompt. Claude only uses the right knowledge when it is needed. This helps teams work in the same way, share their know-how, and save space in the chat. It is a smart idea that solves a real problem.",
  },
  vocabulary: [
    { step: 'Hook (problem)',  c1: 'runs into the same wall',                  b2: 'hits the same problem',                    b1: 'have the same problem' },
    { step: 'Topic reveal',    c1: "Anthropic's answer to that",               b2: "Anthropic's solution",                     b1: 'Skills help fix this' },
    { step: 'Definition',      c1: 'a folder bundling a SKILL.md file',        b2: 'a folder that contains a SKILL.md file',   b1: 'a folder. It has a file called SKILL.md' },
    { step: 'Mechanism',       c1: 'loads it on demand whenever a task matches', b2: 'opens it whenever a task matches',       b1: 'opens the folder when a task matches it' },
    { step: 'Benefits',        c1: 'consistent workflows / leaner context windows', b2: 'consistent workflows / smaller context windows', b1: 'work in the same way / save space' },
    { step: 'Closing insight', c1: 'remarkably elegant fix',                   b2: 'clever fix',                               b1: 'smart idea' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'Imagine you\'re explaining Claude Skills to a coworker who\'s heard the word but doesn\'t know what it means. In about 60–90 seconds, walk them through the problem Skills solve, what a Skill actually is, and why it matters. Try to use at least four of these expressions: <em>"runs into the same wall / hits the same problem", "Anthropic\'s answer to that", "a folder bundling…", "loads it on demand", "Rather than cramming everything into…", "an elegant fix that…"</em>',
      mine: 'Anyone who uses Claude a lot <mark>run</mark> into the same wall: you keep pasting the same <mark>instruction</mark> over and over. Skills are Anthropic\'s solution. Essentially, <mark>a skill is bundling with a Skill.md file and</mark> whatever <mark>scrips</mark> or references Claude needs. <mark>There is no need to put everything in one bloated system prompt,</mark> the model loads it on demand whenever a task matches. This <mark>helps consistent workflow</mark> across teams, version control for <mark>shared know-how\'s</mark>, and much smaller context windows. It\'s a remarkably elegant fix for a problem <mark>some power users often quietly aspected it</mark>.',
      polished: 'Anyone who uses Claude a lot <mark>runs</mark> into the same wall: you keep pasting the same <mark>instructions</mark> over and over. Skills are Anthropic\'s solution. Essentially, <mark>a Skill is a folder bundling a SKILL.md file with</mark> whatever <mark>scripts</mark> or references Claude needs. <mark>There\'s no need to cram everything into one bloated system prompt —</mark> the model loads it on demand whenever a task matches. This <mark>supports consistent workflows</mark> across teams, version control for <mark>shared know-how</mark>, and much smaller context windows. It\'s a remarkably elegant fix for a problem <mark>most power users had quietly resigned themselves to</mark>.',
      corrections: [
        'Subject–verb agreement under a long relative clause: <code>Anyone who uses Claude a lot run</code> → <code>Anyone who uses Claude a lot runs</code> (the subject is <em>Anyone</em>, third-person singular; the intervening <em>who</em>-clause can pull the ear toward the wrong verb)',
        'Countability of <em>instruction</em>: <code>the same instruction over and over</code> → <code>the same instructions over and over</code> (countable in this sense — a set of directions)',
        'Missing noun head + wrong preposition: <code>a skill is bundling with a Skill.md file</code> → <code>a Skill is a folder bundling a SKILL.md file</code> (definition needs the noun <em>a folder</em>; <em>bundling X</em> means containing X, while <em>bundling with X</em> means packaged alongside X)',
        'Typo: <code>scrips</code> → <code>scripts</code>',
        'Verb complement of <em>help</em>: <code>This helps consistent workflow</code> → <code>This supports consistent workflows</code> (<em>help</em> needs an infinitive, a person/thing object, or a switch to <em>supports</em>; also <em>workflow</em> should be plural across teams)',
        'Uncountable noun: <code>shared know-how\'s</code> → <code>shared know-how</code> (no plural, no apostrophe-s — same shape as <em>advice</em> or <em>information</em>)',
        'Word coinage + dangling pronoun: <code>a problem some power users often quietly aspected it</code> → <code>a problem most power users had quietly resigned themselves to</code> (<em>aspected</em> is not a word; the relative-clause structure also can\'t carry a dangling object pronoun referring back to <em>a problem</em>)',
      ],
      level: { badge: 'b2', text: 'Level: B2+ reaching toward C1' },
    },
    {
      number: 2,
      prompt: 'Your coworker pushes back: <em>"Sounds like overengineering. Why not just save your prompts in a text file and paste them in?"</em> In about 60–90 seconds, defend Skills against this objection. Acknowledge their point, then explain what Skills do that copy-paste can\'t. Try to use at least four of these expressions: <em>"while it\'s true that…", "the crucial difference is…", "on demand", "rather than relying on…", "scales across a team", "quietly does the heavy lifting".</em>',
      status: 'Prompt delivered — defence-against-pushback attempt not yet recorded. This round will be filled in after the response is captured.',
      statusHeading: 'Status',
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Round-by-Round Progress',
    items: [
      { round: 1, levelPill: 'B2+', html: 'six target expressions reused (<em>runs into the same wall, Anthropic\'s solution, Essentially, bundling, loads it on demand, remarkably elegant fix</em>) and the full six-beat narrative structure held; held back by subject–verb agreement under a relative clause, two countability slips (<em>instructions</em>, <em>know-how</em>), a <em>help + verb</em> pattern slip, and an over-reach on the closing construction (<em>aspected it</em> in place of <em>resigned themselves to</em>)' },
      { round: 2, html: '<em>Prompt delivered (defence against the "just save your prompts in a text file" objection). Attempt pending.</em>' },
      { round: 3, html: '<em>Not yet assigned — to be issued after Round 2.</em>' },
    ],
    note: '"The growth edge is mechanical accuracy under C1-level ambition — specifically subject–verb agreement when long modifiers sit between subject and verb, and how to land high-register closing constructions cleanly without dangling pronouns. Vocabulary range is not the bottleneck; the C1 frontier is keeping basic accuracy intact while the rhetorical ceiling rises. Round 2 (defending against pushback) will test whether agreement and complement patterns hold up under argumentative load."',
  },
};
