/* Sequoia National Park — standard record (1 of 2 rounds done; Round 3 not started). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['sequoia-national-park'] = {
  meta: {
    slug: 'sequoia-national-park',
    date: '2026-05-08',
    titleEn: 'Sequoia National Park',
    titleZh: '紅杉國家公園',
    method: 'standard',
    navBrandText: 'Sequoia National Park',
    heroTitle: 'Sequoia National Park — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：Sequoia National Park',
    paragraphs: [
      '紅杉國家公園位於美國加州的內華達山脈南部，以巨大的紅杉樹聞名於世。園內最有名的「薛曼將軍樹」被譽為地球上體積最大的單一生物。除了壯麗的古木森林，公園還擁有險峻的花崗岩山峰、深邃的峽谷與冰河遺跡。',
      '這裡不僅有壯麗的古樹，也是豐富野生動物的家園。黑熊、騾鹿、美洲獅與山地土撥鼠在森林與草原間漫遊。然而近年來，氣候變遷帶來的乾旱與高強度野火，對巨杉構成前所未有的威脅。2020 年的「城堡大火」就燒毀了數千棵古老的紅杉。',
      '如今園方積極進行控制焚燒與復育工作，希望讓這片古老森林能繼續屹立千年。遊客可以健行、露營，深刻體會大自然的力量與時間的悠久。',
    ],
  },
  passages: {
    c1: "Sequoia National Park, tucked away in California's southern Sierra Nevada, is renowned for its towering giant sequoias — the most colossal trees on Earth. At its heart stands the General Sherman Tree, widely regarded as the largest single living organism on the planet by volume. Beyond these ancient groves, the park boasts jagged granite peaks, dramatic canyons, and traces left behind by glaciers. Visitors can embark on hikes, pitch a tent under the stars, or simply soak in the silence of the wilderness. It's a place that compels you to reckon with nature's sheer power and the staggering passage of time.",
    b2: "Sequoia National Park, located in California's southern Sierra Nevada mountains, is famous for its huge giant sequoia trees — the largest trees in the world. At the centre of the park stands the General Sherman Tree, which is considered the largest living thing on Earth by volume. Apart from these ancient forests, the park also features sharp granite peaks, deep canyons, and signs of past glaciers. Visitors can go hiking, set up a tent under the stars, or just enjoy the quiet of the wilderness. It's a place that makes you appreciate the power of nature and the long passage of time.",
    b1: "Sequoia National Park is in the south of the Sierra Nevada mountains in California. It is famous for its very big sequoia trees, which are the largest trees in the world. In the middle of the park, you can see the General Sherman Tree. Many people say it is the biggest living thing on Earth. The park also has tall rocky mountains, deep valleys, and old marks from glaciers. Visitors can go for a walk, sleep in a tent under the stars, or just enjoy the quiet nature. It is a place that helps you feel how strong and old nature is.",
  },
  vocabulary: [
    { step: 'Hook question',   c1: "tucked away in California's Sierra Nevada",                                          b2: "located in California's Sierra Nevada",                          b1: 'is in the south of the Sierra Nevada' },
    { step: 'Topic reveal',    c1: 'renowned for its towering giant sequoias',                                           b2: 'famous for its huge giant sequoia trees',                        b1: 'famous for its very big sequoia trees' },
    { step: 'Definition',      c1: 'widely regarded as the largest single living organism',                              b2: 'considered the largest living thing',                            b1: 'many people say it is the biggest living thing' },
    { step: 'Mechanism',       c1: 'jagged granite peaks, dramatic canyons, traces left behind by glaciers',             b2: 'sharp granite peaks, deep canyons, signs of past glaciers',      b1: 'tall rocky mountains, deep valleys, old marks from glaciers' },
    { step: 'Applications',    c1: 'embark on hikes, pitch a tent, soak in the silence',                                 b2: 'go hiking, set up a tent, enjoy the quiet',                      b1: 'go for a walk, sleep in a tent, enjoy the quiet nature' },
    { step: 'Closing insight', c1: "compels you to reckon with nature's sheer power and the staggering passage of time", b2: 'makes you appreciate the power of nature and the long passage of time', b1: 'helps you feel how strong and old nature is' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'Imagine you have just returned from a trip to Sequoia National Park, and a friend asks you, <em>"So, what was it actually like?"</em> Speak for about 60–90 seconds. Describe the park\'s location, what makes the giant sequoias special, what other landscapes you saw, what you did there, and how the experience made you feel. Aim for C1 by using expressions like <em>tucked away in, renowned for, widely regarded as, embark on a hike, pitch a tent, soak in the silence, compels you to reckon with, the staggering passage of time.</em>',
      mine: "Sequoia National Park, located in California's southern Sierra Nevada mountains, is renowned for its towering giant sequoias — the most colossal trees on Earth. <mark>At the heart of it stands</mark> the General Sherman Tree, widely regarded as the largest single living organism on the planet by volume. Beyond those giant groves, the park features sharp granite peaks, <mark>deep canyon</mark>, and traces left behind by glaciers. Visitors can embark on hikes, pitch a tent under the stars, or <mark>simple soak</mark> in the serenity of the wilderness. It's a <mark>place compels</mark> you to reckon with nature's sheer power and the staggering passage of time.",
      polished: "Sequoia National Park, located in California's southern Sierra Nevada mountains, is renowned for its towering giant sequoias — the most colossal trees on Earth. <mark>At its heart stands</mark> the General Sherman Tree, widely regarded as the largest single living organism on the planet by volume. Beyond those giant groves, the park features sharp granite peaks, <mark>deep canyons</mark>, and traces left behind by glaciers. Visitors can embark on hikes, pitch a tent under the stars, or <mark>simply soak</mark> in the serenity of the wilderness. It's a <mark>place that compels</mark> you to reckon with nature's sheer power and the staggering passage of time.",
      corrections: [
        'Word order / style: <code>At the heart of it stands</code> → <code>At its heart stands</code> (more natural inverted form)',
        'Missing plural -s: <code>deep canyon</code> → <code>deep canyons</code>',
        'Adjective vs adverb: <code>simple soak</code> → <code>simply soak</code>',
        "Missing relative pronoun: <code>It's a place compels you</code> → <code>It's a place that compels you</code>",
        "Vocabulary upgrade (kept): <code>silence</code> → <code>serenity</code> — learner's own improvement, more C1",
      ],
      level: { badge: 'c1', text: 'Level: C1 (with minor article/agreement slips)' },
    },
    {
      number: 2,
      prompt: '(Same topic, new angle — wildlife and wildfires.) Give a 60–90 second talk to tourists at the visitor centre. Explain why Sequoia is special beyond its trees, what wildlife lives there, what threats it currently faces, what happened in 2020, and what is being done to protect the forest. Aim for C1 by using <em>a thriving habitat for, roam freely, come under threat from, climate-driven droughts, ferocious wildfires, wipe out, old-growth sequoias, ramp up, prescribed burns, a race against time, stand tall for millennia.</em>',
      status: 'Prompt delivered — spoken attempt not yet recorded. This round will be filled in after the response is captured.',
      statusHeading: 'Status',
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Round-by-Round Progress',
    items: [
      { round: 1, levelPill: 'C1', html: 'hit C1 lexical range confidently (7 target collocations used naturally), with surface slips in plural agreement, adverb form, and relative-pronoun omission; <em>"serenity of the wilderness"</em> was a self-initiated upgrade' },
      { round: 2, html: '<em>Prompt delivered on a new angle (wildlife &amp; wildfire threats), introducing 11 new C1 expressions. Attempt pending.</em>' },
      { round: 3, html: '<em>Not yet started.</em>' },
    ],
    note: "\"Today's session showed that the learner can already produce C1-level vocabulary and structure on demand; the next growth edge is grammatical accuracy under spoken pressure — specifically plural -s, adverb -ly, and defining relative clauses. Worth drilling these four patterns before pushing onto a harder topic.\"",
  },
};
