/* LLM Embeddings — standard record (3 rounds). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['llm-embeddings'] = {
  meta: {
    slug: 'llm-embeddings',
    date: '2026-05-03',
    titleEn: 'LLM Embeddings',
    titleZh: 'LLM 嵌入',
    method: 'standard',
    navBrandText: 'LLM Embeddings',
    heroTitle: 'LLM Embeddings — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：LLM Embeddings',
    paragraphs: [
      'LLM 嵌入（embeddings）是大型語言模型理解語言的核心技術。它將文字轉換成高維度的數字向量，讓電腦能以數學方式計算詞語之間的語意關聯。意思相近的詞，向量位置也相近。',
      '這項技術廣泛應用於語意搜尋、推薦系統與聊天機器人，是現代人工智慧運作的基礎。透過嵌入，機器不再只是比對字面，而是真正「理解」文字背後的意義。',
    ],
  },
  passages: {
    c1: "Have you ever wondered how a language model actually grasps what words mean? The answer lies in something called embeddings. Essentially, embeddings convert words into high-dimensional numerical vectors, allowing the model to capture subtle semantic relationships mathematically. Words with similar meanings end up clustered together in this vector space, while unrelated ones drift apart. This breakthrough underpins a wide range of applications, from semantic search and recommendation engines to sophisticated chatbots. Rather than merely matching characters on the surface, the machine genuinely interprets the underlying meaning. It's a remarkably elegant solution that quietly powers much of today's AI landscape.",
    b2: "Have you ever wondered how a language model actually understands what words mean? The answer is something called embeddings. Basically, embeddings turn words into long lists of numbers, which lets the model recognise meaning through maths. Words with similar meanings are placed close together in this number space, while unrelated words sit far apart. This idea supports many useful tools, including semantic search, recommendation systems, and chatbots. Instead of just matching letters on the surface, the machine can actually work out what the text really means. It's a clever solution that drives a huge part of modern AI today.",
    b1: "Have you ever thought about how a language model knows what words mean? The answer is something called embeddings. In simple terms, embeddings change words into long lists of numbers, so the model can find meaning using maths. Words that mean similar things are put close together in this number space, and words that are not related stay far apart. This idea helps build many useful tools, like search engines, recommendation apps, and chatbots. The machine does not just match letters. It tries to understand what the words really mean. It is a smart idea behind many AI tools today.",
  },
  vocabulary: [
    { step: 'Hook question',   c1: 'Have you ever wondered… grasps',              b2: 'Have you ever wondered… understands',     b1: 'Have you ever thought about… knows' },
    { step: 'Topic reveal',    c1: 'The answer lies in',                          b2: 'The answer is',                           b1: 'The answer is' },
    { step: 'Definition',      c1: 'convert / high-dimensional numerical vectors', b2: 'turn / long lists of numbers',           b1: 'change / long lists of numbers' },
    { step: 'Mechanism',       c1: 'clustered together / drift apart',            b2: 'placed close together / sit far apart',   b1: 'put close together / stay far apart' },
    { step: 'Applications',    c1: 'underpins a wide range of',                   b2: 'supports many useful tools',              b1: 'helps build many useful tools' },
    { step: 'Closing insight', c1: 'a remarkably elegant solution',               b2: 'a clever solution',                       b1: 'a smart idea' },
  ],
  rounds: [
    {
      number: 1,
      prompt: "Imagine you're explaining LLM embeddings to a curious friend over coffee. Use at least four target expressions from the passages.",
      mine: 'Have you ever wondered how <mark>a LLM</mark> grasps what words mean? The answer lies in something called embeddings. The LLM turns words into numerical vectors which encode semantic relationships. Words with similar meanings <mark>clustered together</mark> in the vector space, while others drift apart. This helps build a wide range of applications such as <mark>search engine</mark>, recommendation systems, and chatbots. Instead of just matching <mark>numbers</mark> on the surface, the LLM actually knows <mark>the mean</mark> behind words. It is a clever solution that drives a huge part of <mark>AI today</mark>.',
      polished: 'Have you ever wondered how <mark>an LLM</mark> grasps what words mean? The answer lies in something called embeddings. The LLM turns words into numerical vectors which encode semantic relationships. Words with similar meanings <mark>are clustered together</mark> in the vector space, while others drift apart. This helps build a wide range of applications such as <mark>search engines</mark>, recommendation systems, and chatbots. Instead of just matching <mark>characters</mark> on the surface, the LLM actually understands <mark>the meaning</mark> behind words. It is a clever solution that drives a huge part of <mark>the AI landscape today</mark>.',
      corrections: [
        'Article: <code>a LLM</code> → <code>an LLM</code> (vowel sound rule)',
        'Verb tense: <code>clustered together</code> → <code>are clustered together</code> (passive present)',
        'Plural: <code>search engine</code> → <code>search engines</code>',
        'Logic: <code>matching numbers</code> → <code>matching characters</code> (numbers are what embeddings DO use)',
        'Noun form: <code>the mean</code> → <code>the meaning</code>',
        'Naturalness: <code>a huge part of AI today</code> → <code>a huge part of the AI landscape today</code>',
      ],
      level: { badge: 'b2', text: 'Level: B2+ reaching toward C1' },
    },
    {
      number: 2,
      prompt: 'A friend pushes back: "Isn\'t this just a fancy dictionary?" Respond using at least two C1 expressions: <em>underpins, subtle semantic relationships, rather than merely, remarkably elegant, interprets the underlying meaning.</em>',
      mine: 'A word <mark>can mean differently</mark> based on context. With embeddings, the <mark>relationships of every word from the input can be formed</mark> through layers of computation. This breakthrough underpins a wide range of AI applications because it <mark>enables LLM</mark> to capture subtle semantic differences. Rather than merely looking words up, an LLM interprets the underlying meaning of words <mark>through maths</mark>.',
      polished: 'A word <mark>can mean different things depending on context</mark>. With embeddings, the <mark>relationships between words in the input are built up</mark> through layers of computation. This breakthrough underpins a wide range of AI applications because it <mark>enables an LLM</mark> to capture subtle semantic differences. Rather than merely looking words up, an LLM interprets the underlying meaning of words <mark>mathematically</mark>.',
      corrections: [
        'Adverb misuse: <code>can mean differently</code> → <code>can mean different things depending on context</code>',
        'Preposition + verb: <code>relationships of every word… can be formed</code> → <code>relationships between words… are built up</code>',
        'Article: <code>enables LLM</code> → <code>enables an LLM</code> (or <code>enables LLMs</code>)',
        'Naturalness: <code>through maths</code> → <code>mathematically</code>',
      ],
      level: { badge: 'c1', text: 'Level: Solid C1' },
    },
    {
      number: 3,
      prompt: 'Give a complete 90-second spoken explanation covering what embeddings are, how they handle context, why they matter, and one open question — using at least six expressions from across the three passages.',
      mine: 'LLM embeddings enable an LLM to understand the meaning behind words. When processing words, an LLM turns words into numerical vectors with semantic relationships. Words that are similar cluster together, while unrelated words drift apart. <mark>If there were no embeddings, if an LLM was merely matching characters,</mark> a word in <mark>different context</mark> would be interpreted in the same way. <mark>Only when an LLM grasps semantic meanings correctly, it provides</mark> <mark>meaningful response</mark>. Have you ever wondered <mark>how were the embeddings generated</mark>?',
      polished: 'LLM embeddings enable an LLM to understand the meaning behind words. When processing input, an LLM turns words into numerical vectors that encode semantic relationships. Words with similar meanings cluster together, while unrelated words drift apart. <mark>Without embeddings — if an LLM were merely matching characters —</mark> the same word in <mark>different contexts</mark> would be interpreted identically. <mark>Only when an LLM grasps semantic meaning correctly does it provide</mark> <mark>a meaningful response</mark>. Have you ever wondered <mark>how embeddings are actually generated</mark>?',
      corrections: [
        'Conditional structure: stacked <code>if</code> clauses → combine with em-dash; use subjunctive <code>were</code> consistently',
        'Plural: <code>in different context</code> → <code>in different contexts</code>',
        'Inversion after <code>Only when…</code>: <code>it provides</code> → <code>does it provide</code>',
        'Article: <code>meaningful response</code> → <code>a meaningful response</code>',
        'Embedded question word order: <code>how were the embeddings generated</code> → <code>how embeddings are generated</code>',
      ],
      level: { badge: 'c1plus', text: 'Level: Strong C1, reaching toward C2' },
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Growth Across Three Rounds',
    items: [
      { round: 1, levelPill: 'B2+', html: 'minor article and plural slips' },
      { round: 2, levelPill: 'C1',  html: 'preposition and article fine-tuning' },
      { round: 3, levelPill: 'C1+', html: 'ambitious structures (inversion, subjunctive, embedded questions)' },
    ],
    note: '"Mistakes of ambition, not confusion. Next frontier: register variation toward C2."',
  },
};
