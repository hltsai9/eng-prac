/* Keeping a Journal — standard record (1 round). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['keeping-a-journal'] = {
  meta: {
    slug: 'keeping-a-journal',
    date: '2026-05-06',
    titleEn: 'Keeping a Journal',
    titleZh: '寫日記的習慣',
    method: 'standard',
    navBrandText: 'Keeping a Journal',
    heroTitle: 'Keeping a Journal — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：Keeping a Journal',
    paragraphs: [
      '寫日記是一種簡單卻深刻的習慣。透過每天記錄想法與感受，我們能整理思緒、釋放壓力，並更了解自己。研究顯示，書寫有助於改善情緒、提升專注力，也能成為日後珍貴的回憶。',
      '無論是手寫或數位形式，持之以恆的記錄都能帶來意想不到的成長與療癒。許多作家、領袖與思想家長年保持寫日記的習慣，因為這個看似平凡的動作能幫助人辨識內心的模式、釐清複雜的情緒，並逐漸改變我們看待自己的方式。',
    ],
  },
  passages: {
    c1: "Have you ever considered why so many writers, leaders, and thinkers swear by the humble habit of keeping a journal? The practice essentially involves setting aside a few quiet minutes each day to capture your thoughts, emotions, and observations on the page. By externalising what's swirling around in your head, you gradually untangle complicated feelings and uncover patterns you might otherwise overlook. This simple ritual underpins a wide range of benefits — from sharper self-awareness and reduced anxiety to a richer creative life. Rather than merely recording events, journaling invites genuine reflection. It's a remarkably grounding practice that quietly transforms how we relate to ourselves.",
    b2: "Have you ever wondered why so many writers, leaders, and thinkers strongly recommend the simple habit of keeping a journal? The practice basically means taking a few quiet minutes each day to write down your thoughts, feelings, and observations. By getting what's spinning around in your head onto paper, you slowly sort out difficult feelings and notice patterns you might otherwise miss. This simple routine supports many useful benefits — from better self-awareness and less anxiety to more creative thinking. Instead of just recording events, journaling encourages real reflection. It's a clever habit that gradually changes how we see ourselves.",
    b1: 'Have you ever thought about why so many writers, leaders, and thinkers love the easy habit of keeping a journal? The practice means taking a few quiet minutes each day to write down your thoughts, feelings, and what you notice. By putting what is in your head onto paper, you slowly work out hard feelings and see patterns you might miss. This simple habit helps build many good things — like knowing yourself better, feeling less worried, and having more new ideas. Journaling is not just about writing what happened. It is a smart habit that helps you understand yourself.',
  },
  vocabulary: [
    { step: 'Hook question',    c1: 'considered / swear by',                          b2: 'wondered / strongly recommend',                          b1: 'thought about / love' },
    { step: 'Topic reveal',     c1: 'essentially involves setting aside',             b2: 'basically means taking',                                 b1: 'means taking' },
    { step: 'Definition',       c1: 'capture your thoughts, emotions, and observations', b2: 'write down your thoughts, feelings, and observations', b1: 'write down your thoughts, feelings, and what you notice' },
    { step: 'Mechanism',        c1: 'externalising / untangle / uncover patterns',    b2: 'getting onto paper / sort out / notice patterns',        b1: 'putting onto paper / work out / see patterns' },
    { step: 'Applications',     c1: 'underpins a wide range of benefits',             b2: 'supports many useful benefits',                          b1: 'helps build many good things' },
    { step: 'Closing insight',  c1: 'remarkably grounding practice',                  b2: 'clever habit',                                           b1: 'smart habit' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'Imagine you\'re chatting with a friend who\'s curious about starting a journal but isn\'t sure it\'s worth the effort. In about 60–90 seconds, explain what journaling is, how it works, and why it might help them. Use at least four target expressions from the kit.',
      mine: 'Have you ever considered why journaling <mark>never get out of trend</mark>? It essentially involves setting aside <mark>a period of time</mark> each day to note your thoughts, emotions, and observations. By putting what\'s spinning in your head onto paper, you slowly <mark>untangled</mark> complicated feelings and uncover <mark>patterns that you would have overlooked</mark>. This simple habit underpins a wide range of benefits, such as sharpening self-awareness and reducing anxiety. Rather than merely recording events, the process encourages <mark>self reflection</mark>. It gradually changes how we see ourselves.',
      polished: 'Have you ever considered why journaling <mark>never goes out of fashion</mark>? It essentially involves setting aside <mark>a few quiet minutes</mark> each day to note your thoughts, emotions, and observations. By putting what\'s spinning in your head onto paper, you slowly <mark>untangle</mark> complicated feelings and uncover <mark>patterns you might otherwise overlook</mark>. This simple habit underpins a wide range of benefits, such as sharpening self-awareness and reducing anxiety. Rather than merely recording events, the process encourages <mark>self-reflection</mark>. It gradually changes how we see ourselves.',
      corrections: [
        'Subject–verb agreement: <code>journaling never get out of trend</code> → <code>journaling never goes out of fashion</code> (singular gerund subject takes <em>-s</em>; also the natural collocation is <em>go out of fashion / style</em>, not <em>out of trend</em>)',
        'Tense consistency: <code>you slowly untangled … and uncover</code> → <code>you slowly untangle … and uncover</code> (coordinated present-tense verbs must match)',
        'Conditional aspect: <code>patterns that you would have overlooked</code> → <code>patterns you might otherwise overlook</code> (general truth needs present counterfactual, not past counterfactual)',
        'Hyphenation: <code>self reflection</code> → <code>self-reflection</code> (self-compounds are hyphenated; matches your earlier <em>self-awareness</em>)',
        'Concreteness at C1: <code>a period of time each day</code> → <code>a few quiet minutes each day</code> (more vivid; <em>a period of time</em> feels bureaucratic at C1)',
      ],
      level: { badge: 'b2', text: 'Level: B2+ reaching toward C1' },
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Round 1 Reflection',
    items: [
      { round: 1, levelPill: 'B2+', html: 'strong target-expression recycling (7 hits) and a fresh hook reframing; errors clustered on grammatical accuracy (agreement, tense, conditional aspect) rather than range' },
    ],
    note: '"Next focus: lock in tense and aspect consistency across coordinated verbs before reaching for the next rhetorical step — arguing against a friend\'s pushback."',
  },
};
