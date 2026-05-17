/* Calves Soreness After a Long Walk — standard record (1 of 2 rounds done). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['calves-soreness-walk'] = {
  meta: {
    slug: 'calves-soreness-walk',
    date: '2026-05-12',
    titleEn: 'Calves Soreness After a Long Walk',
    titleZh: '長時間步行後的小腿痠痛',
    method: 'standard',
    navBrandText: 'Calves Soreness',
    heroTitle: 'Calves Soreness After a Long Walk — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：Calves Soreness After a Long Walk',
    paragraphs: [
      '長時間步行後，小腿後方的腓腸肌容易感到痠痛緊繃。這種疼痛通常不會在當下立刻出現，而是在隔天早上才慢慢浮現，醫學上稱為「延遲性肌肉痠痛」（DOMS）。',
      '造成痠痛的主因，是肌肉纖維在長時間使力後出現極微小的撕裂，身體啟動修復機制時引發局部發炎與腫脹，於是產生那種又緊又痠的感覺。輕度伸展、補充水分、按摩放鬆與適度休息，通常能在一到兩天內舒緩不適。',
      '若痠痛持續多日、伴隨明顯腫脹或行走困難，則建議就醫進一步檢查，以排除拉傷或其他傷害。',
    ],
  },
  passages: {
    c1: "So I went on this ridiculously long walk yesterday, and now my calves are absolutely killing me. It's that deep, nagging ache that creeps in the morning after — what specialists call delayed-onset muscle soreness, or DOMS. Essentially, prolonged exertion produces microscopic tears in the muscle fibres, and the inflammation that follows triggers that tight, tender sensation. I've found that gentle stretching, staying properly hydrated, and a bit of foam rolling work wonders. Rather than pushing through it, I'm letting my legs recover. It's a surprisingly humbling reminder that even something as mundane as walking can leave you genuinely sore.",
    b2: "So I went on a really long walk yesterday, and now my calves are seriously aching. It's that deep, dull pain that shows up the morning after — what doctors call delayed-onset muscle soreness, or DOMS. Basically, walking for a long time causes tiny tears in the muscle fibres, and the swelling that follows creates that tight, sore feeling. I've noticed that gentle stretching, drinking enough water, and using a foam roller really help. Instead of pushing through the pain, I'm giving my legs time to rest. It's a useful reminder that even simple walking can actually leave you quite sore.",
    b1: "So I went on a very long walk yesterday, and now my calves really hurt. It's that deep, slow pain that comes the next morning — doctors call it delayed-onset muscle soreness, or DOMS. In simple terms, walking for a long time makes tiny tears in the muscles, and the swelling after that causes the tight, sore feeling. I've learned that soft stretching, drinking lots of water, and using a foam roller can help a lot. Instead of trying to walk through the pain, I am letting my legs rest. It shows that even normal walking can make you very sore.",
  },
  vocabulary: [
    { step: 'Hook question',   c1: 'ridiculously long walk / absolutely killing me',                       b2: 'really long walk / seriously aching',                          b1: 'very long walk / really hurt' },
    { step: 'Topic reveal',    c1: 'deep, nagging ache that creeps in / what specialists call',            b2: 'deep, dull pain that shows up / what doctors call',            b1: 'deep, slow pain that comes / doctors call it' },
    { step: 'Definition',      c1: 'delayed-onset muscle soreness, or DOMS',                               b2: 'delayed-onset muscle soreness, or DOMS',                       b1: 'delayed-onset muscle soreness, or DOMS' },
    { step: 'Mechanism',       c1: 'prolonged exertion produces microscopic tears / inflammation that follows triggers', b2: 'walking for a long time causes tiny tears / swelling that follows creates', b1: 'walking for a long time makes tiny tears / swelling causes' },
    { step: 'Applications',    c1: 'gentle stretching / staying properly hydrated / foam rolling work wonders',         b2: 'gentle stretching / drinking enough water / foam roller really help',       b1: 'soft stretching / drinking lots of water / foam roller can help' },
    { step: 'Closing insight', c1: 'Rather than pushing through it / a humbling reminder',                 b2: 'Instead of pushing through the pain / a useful reminder',      b1: 'Instead of trying to walk through the pain / It shows that' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'Imagine you\'re telling a friend over a coffee why you\'re walking a bit stiffly today. In about 60–90 seconds, describe the soreness, explain what\'s actually happening in your muscles, and share what you\'re doing about it. Try to use at least four of these expressions: <em>"absolutely killing me / seriously aching", "a deep, nagging ache that creeps in", "what specialists call delayed-onset muscle soreness", "microscopic tears / the inflammation that follows", "work wonders", "Rather than pushing through it…"</em>',
      mine: 'So I went <mark>in</mark> a super long walk yesterday, and now my calves really hurt. It\'s that deep, slow pain that comes the morning after<mark>,</mark> doctors call it delayed-onset muscle soreness, or DOMS. Essentially, a long walk <mark>makes tiny tears in the muscle fibers</mark>, and the swelling that follows causes the tight, sore feeling. I\'ve learned that gentle stretching, staying hydrated, and using a foam roller <mark>help ease the pain</mark>. <mark>It\'s a lesson learned that even simple a walk can make</mark> you really sore.',
      polished: 'So I went <mark>on</mark> a super long walk yesterday, and now my calves really hurt. It\'s that deep, slow pain that comes the morning after<mark> —</mark> doctors call it delayed-onset muscle soreness, or DOMS. Essentially, a long walk <mark>creates tiny tears in the muscle fibres</mark>, and the swelling that follows causes the tight, sore feeling. I\'ve learned that gentle stretching, staying hydrated, and using a foam roller <mark>really help</mark>. <mark>It just goes to show that even a simple walk can leave</mark> you really sore.',
      corrections: [
        'Preposition / collocation: <code>went in a super long walk</code> → <code>went on a super long walk</code> (the fixed collocation is <em>go on a walk</em> or <em>go for a walk</em>)',
        'Punctuation: comma splice <code>the morning after, doctors call</code> → em-dash <code>the morning after — doctors call</code>',
        'Spelling consistency: <code>fibers</code> → <code>fibres</code> (mixed US/UK spelling — pick one and stay consistent)',
        'Register / collocation lift: <code>help ease the pain</code> → <code>really help</code> (matches the model passages; lifts the register at C1)',
        'Idiom misuse: <code>It\'s a lesson learned that…</code> → <code>It just goes to show that…</code> (<em>lesson learned</em> works as a standalone exclamation but cannot take a <em>that</em>-clause)',
        'Article-adjective-noun order: <code>simple a walk</code> → <code>a simple walk</code> (the inverted order <em>adj + a + noun</em> only follows <em>so / as / too / how</em>)',
      ],
      level: { badge: 'b2', text: 'Level: B2, reaching toward C1' },
    },
    {
      number: 2,
      prompt: 'Your friend pushes back: <em>"Come on, it\'s just walking. You shouldn\'t be that sore — you\'re being dramatic."</em> In about 60–90 seconds, defend your sore calves. Acknowledge their point briefly, then explain why even ordinary walking can genuinely cause DOMS, and what you\'re doing about it. Try to use at least four of these expressions: <em>"Rather than pushing through it…", "work wonders", "prolonged exertion / microscopic tears", "the inflammation that follows", "a humbling reminder that…"</em>, and one concession phrase like <em>"Fair point, but…"</em> or <em>"I take your point, however…"</em>',
      status: 'Prompt delivered — counter-argument attempt not yet recorded. This round will be filled in after the response is captured.',
      statusHeading: 'Status',
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Round-by-Round Progress',
    items: [
      { round: 1, levelPill: 'B2', html: 'strong relative clauses and clean mechanism explanation; held back by a preposition slip (<em>went in</em>), an article-order slip (<em>simple a walk</em>), and an over-reach on the closing construction (<em>a lesson learned that…</em>)' },
      { round: 2, html: '<em>Prompt delivered (counter-argument with concession). Attempt pending.</em>' },
      { round: 3, html: '<em>Not yet assigned — to be issued after Round 2.</em>' },
    ],
    note: '"The growth pattern so far is encouraging: the mistakes are no longer about basic vocabulary but about how to land high-register closings and concession structures cleanly. That\'s the C1 frontier — the next rounds should focus on counter-argument moves and reflective endings that don\'t slip into pseudo-idioms."',
  },
};
