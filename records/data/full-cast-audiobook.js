/* Full Cast Audiobook — standard record (2 rounds + 1 pending). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['full-cast-audiobook'] = {
  meta: {
    slug: 'full-cast-audiobook',
    date: '2026-05-05',
    titleEn: 'Full Cast Audiobook',
    titleZh: '全演員陣容有聲書',
    method: 'standard',
    navBrandText: 'Full Cast Audiobook',
    heroTitle: 'Full Cast Audiobook — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：Full Cast Audiobook',
    paragraphs: [
      '全演員陣容有聲書（full cast audiobook）是一種以多位配音員分別飾演不同角色的有聲書製作方式。相較傳統由單一旁白朗讀整本書的形式，全演員陣容的版本更接近廣播劇：每個角色由不同演員聲演，對話之間有互動的張力，敘述者通常只負責場景轉換與動作描寫。',
      '製作上常會加入環境音效與配樂，例如腳步聲、雨聲、緊張時刻的弦樂等，營造出沉浸式的聽覺體驗。這種形式特別適合對話豐富、角色眾多的作品。',
      '近年在奇幻、懸疑與文學小說領域特別受歡迎，知名作品如《沙丘》（Dune）與《美國眾神》（American Gods）都有推出全演員陣容版本，深受聽眾好評。',
    ],
  },
  passages: {
    c1: "Have you ever come across an audiobook that feels less like a reading and more like a film unfolding in your ears? That's the magic of a full cast audiobook. Essentially, instead of relying on a single narrator to voice every character, the production assigns each role to a different actor, often layered with subtle sound design and an atmospheric score. The result is something remarkably immersive — closer in spirit to radio drama than to a traditional recording. This approach underpins many acclaimed productions in fantasy, mystery, and literary fiction. Rather than merely reading the text aloud, the cast brings it vividly to life.",
    b2: "Have you ever listened to an audiobook that feels less like a reading and more like a film playing in your ears? That's what a full cast audiobook does. Basically, instead of using one narrator to voice every character, the production gives each role to a different actor, often with sound effects and background music added in. The result is really immersive — closer to a radio drama than to a normal recording. This style supports many popular productions in fantasy, mystery, and literary fiction. Instead of just reading the text out loud, the cast actually brings the story to life.",
    b1: "Have you ever heard an audiobook that feels more like a movie in your ears? That is what a full cast audiobook does. In simple terms, instead of one narrator reading all the characters, each role is given to a different actor. Sound effects and music are often added too. The result is very real and exciting — more like a radio play than a normal audiobook. This style helps make many popular books in fantasy, mystery, and other kinds of fiction. The actors do not just read the text. They make the story come alive for the listener.",
  },
  vocabulary: [
    { step: 'Hook question',   c1: 'come across / unfolding in your ears',                                       b2: 'listened to / playing in your ears',                                         b1: 'heard / movie in your ears' },
    { step: 'Topic reveal',    c1: "That's the magic of",                                                        b2: "That's what … does",                                                         b1: 'That is what … does' },
    { step: 'Definition',      c1: 'assigns each role to a different actor',                                     b2: 'gives each role to a different actor',                                       b1: 'each role is given to a different actor' },
    { step: 'Mechanism',       c1: 'layered with subtle sound design and an atmospheric score',                  b2: 'with sound effects and background music added in',                           b1: 'sound effects and music are often added' },
    { step: 'Applications',    c1: 'underpins many acclaimed productions in fantasy, mystery, and literary fiction', b2: 'supports many popular productions in fantasy, mystery, and literary fiction', b1: 'helps make many popular books in fantasy, mystery, and other fiction' },
    { step: 'Closing insight', c1: 'brings it vividly to life',                                                  b2: 'actually brings the story to life',                                          b1: 'make the story come alive' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'Imagine you\'re recommending a full cast audiobook to a friend who only listens to single-narrator recordings. In about 60–90 seconds, explain what a full cast audiobook is, how it differs from a traditional one, and why someone might enjoy it. Try to use at least four of these expressions: <em>"Have you ever come across…", "That\'s the magic of…", "assigns each role to…", "layered with sound design", "closer in spirit to radio drama", "brings it vividly to life".</em>',
      mine: 'Have you ever found it difficult to distinguish characters in a single-narrator audiobook? Try a full cast audiobook and you won\'t regret it. Instead of <mark>having one narrator</mark> to voice every character, the production <mark>assign</mark> each role to a different actor. Moreover, they layer the lines with sound effects and background <mark>music makes</mark> the whole experience truly immersive. This approach underpins many popular productions in fantasy, mystery, and literary fiction. Rather than merely reading the text aloud, the cast brings it vividly to life.',
      polished: 'Have you ever found it difficult to distinguish characters in a single-narrator audiobook? Try a full cast audiobook and you won\'t regret it. Instead of <mark>relying on a single narrator</mark> to voice every character, the production <mark>assigns</mark> each role to a different actor. Moreover, they layer the lines with sound effects and background <mark>music, which makes</mark> the whole experience truly immersive. This approach underpins many popular productions in fantasy, mystery, and literary fiction. Rather than merely reading the text aloud, the cast brings it vividly to life.',
      corrections: [
        'Subject–verb agreement: <code>the production assign</code> → <code>the production assigns</code> (<em>the production</em> is singular)',
        'Run-on / dangling modifier: <code>background music makes the whole experience</code> → <code>background music, which makes the whole experience</code> (added relative pronoun to fix the fused clauses)',
        'Article precision (stylistic lift): <code>one narrator</code> → <code>a single narrator</code> (sharper contrast with <em>full cast</em>)',
        'Causative pattern blend: <code>having one narrator to voice</code> → <code>relying on a single narrator to voice</code> (the <em>to</em>-infinitive needs <em>rely on</em>, not causative <em>have</em>)',
      ],
      level: { badge: 'b2', text: 'Level: B2+ reaching toward C1' },
    },
    {
      number: 2,
      prompt: 'Counter-argument round. A friend pushes back: <em>"I actually prefer a single narrator. Switching between voices breaks my immersion — I want one consistent voice in my head, like being read to."</em> Concede something genuine first, then explain why a full cast can deepen immersion rather than break it. Use at least four of: <em>That\'s a fair point, but… / I take your point, though…, far from breaking immersion, with the right production, the dynamic between voices, layered sound design, closer in spirit to radio drama.</em>',
      mine: 'That\'s a <mark>fair point and</mark> I enjoyed that too. But having multiple narrators is far from breaking immersion. With the right production, <mark>your attention will be caught tightly</mark> by the dynamic between voices. A full cast audiobook is closer in spirit to radio <mark>drama especially</mark> when it has layered sound design. It truly underpins <mark>the presentation of fantasies and mysteries</mark>. It <mark>doesn\'t harm</mark> to try it out<mark>. How about start from</mark> the full cast version of Harry Potter?',
      polished: 'That\'s a <mark>fair point, and</mark> I enjoyed that too. But having multiple narrators is far from breaking immersion. With the right production, <mark>you\'ll be completely drawn in</mark> by the dynamic between voices. A full cast audiobook is closer in spirit to radio <mark>drama, especially</mark> when it has layered sound design. It truly underpins <mark>fantasy and mystery storytelling</mark>. It <mark>doesn\'t hurt</mark> to try it out<mark> — how about starting with</mark> the full cast version of Harry Potter?',
      corrections: [
        'Collocation: <code>caught tightly</code> → <code>firmly held</code> / <code>completely drawn in</code> (attention is <em>held</em> or <em>gripped</em>, not <em>caught tightly</em> — <em>catch</em> implies a brief flash, not sustained engagement)',
        'Genre as uncountable noun: <code>fantasies and mysteries</code> → <code>fantasy and mystery</code> (genres take the uncountable singular; <em>fantasies</em> means daydreams, <em>mysteries</em> means unsolved puzzles)',
        'Idiom shape: <code>It doesn\'t harm to</code> → <code>It doesn\'t hurt to</code> (fixed idiom uses <em>hurt</em>, not <em>harm</em>; alternative: <em>there\'s no harm in trying</em>)',
        'Verb form after <em>How about</em>: <code>How about start</code> → <code>How about starting</code> (<em>How about</em> takes a gerund; <em>Why not</em> takes a bare infinitive)',
        'Preposition: <code>start from</code> → <code>start with</code> (we <em>start with</em> a book; <em>start from</em> implies a point on a path or scale)',
      ],
      level: { badge: 'c1', text: 'Level: Solid C1 with residual B2 collocation slips' },
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Round-by-Round Progress',
    items: [
      { round: 1, levelPill: 'B2+', html: 'strong C1 vocabulary recycling (<em>underpins</em>, <em>layer with sound effects</em>, <em>brings it vividly to life</em>) and a confident reframed opening, but tripped on subject–verb agreement and a run-on sentence — classic mistakes of ambition' },
      { round: 2, levelPill: 'C1', html: 'clear jump in discourse architecture — executed concede-and-pivot cleanly, used all six target expressions, and closed with a friendly recommendation; residual errors clustered around collocation and idiom precision (<em>caught tightly</em>, <em>doesn\'t harm</em>, <em>fantasies and mysteries</em>) rather than grammar' },
      { round: 3, html: '<em>Pending</em>' },
    ],
    note: '"Trajectory: B2+ → solid C1 in two rounds. The grammar foundation is steady; the next frontier is collocation precision and register-shifting. C1→C2 is mostly about which words go with which other words."',
  },
};
