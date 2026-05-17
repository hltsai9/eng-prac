/* Pilates — standard record (1 round). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['pilates'] = {
  meta: {
    slug: 'pilates',
    date: '2026-05-07',
    titleEn: 'Pilates',
    titleZh: '皮拉提斯',
    method: 'standard',
    navBrandText: 'Pilates',
    heroTitle: 'Pilates — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：Pilates',
    paragraphs: [
      '皮拉提斯（Pilates）是一種強調核心肌群、姿勢控制與呼吸協調的低衝擊運動。由德國人約瑟夫·皮拉提斯於二十世紀初創立，原本用來幫助第一次世界大戰中受傷的士兵進行復健。',
      '這項運動透過精準、緩慢的動作鍛鍊深層穩定肌群，這些肌群往往被一般高強度訓練所忽略。長期練習可以改善體態、提升柔軟度，並培養良好的身體覺察能力。',
      '皮拉提斯廣受專業舞者、運動員與久坐上班族喜愛。它的核心精神不是追求疲憊，而是追求動作品質，是一套看似溫和卻相當扎實的訓練系統。',
    ],
  },
  passages: {
    c1: "Have you ever wondered why Pilates has quietly taken over studios worldwide? Essentially, Pilates is a low-impact discipline that hones core strength, postural alignment, and breath control through precise, controlled movements. Originally devised by Joseph Pilates to rehabilitate wounded soldiers, the method engages deep stabilising muscles that conventional workouts tend to overlook. Practitioners gradually cultivate a leaner physique, enhanced flexibility, and remarkable body awareness. Rather than merely chasing exhaustion, each session emphasises quality over quantity. This subtle yet demanding approach underpins everything from elite dancers' training regimens to office workers' back-pain recovery. It's a remarkably elegant solution that rewards patience handsomely.",
    b2: "Have you ever wondered why Pilates has become so popular in studios everywhere? Basically, Pilates is a low-impact exercise that builds core strength, good posture, and breathing control through careful, slow movements. It was originally created by Joseph Pilates to help injured soldiers recover. The method works the deep muscles that normal workouts often miss. People who practise it usually develop a leaner body, better flexibility, and strong body awareness. Instead of just trying to feel tired, each session focuses on quality rather than quantity. This gentle but tough approach supports many people, from professional dancers to office workers with back pain.",
    b1: "Have you ever thought about why Pilates is so popular in gyms today? In simple terms, Pilates is a gentle exercise that helps build a strong core, good posture, and better breathing. The moves are slow and careful. A man named Joseph Pilates first made it to help hurt soldiers feel better. The exercise works deep muscles that other workouts often forget. People who do Pilates often get a slim body, more flexibility, and better balance. They do not try to get tired. They try to do each move well. This idea helps both dancers and people who sit at desks all day.",
  },
  vocabulary: [
    { step: 'Hook question',  c1: 'wondered / quietly taken over',              b2: 'wondered / become so popular',          b1: 'thought about / so popular' },
    { step: 'Topic reveal',   c1: 'Essentially / low-impact discipline',        b2: 'Basically / low-impact exercise',       b1: 'In simple terms / gentle exercise' },
    { step: 'Definition',     c1: 'hones core strength, postural alignment',    b2: 'builds core strength, good posture',    b1: 'helps build a strong core, good posture' },
    { step: 'Mechanism',      c1: 'engages deep stabilising muscles',           b2: 'works the deep muscles',                b1: 'works deep muscles' },
    { step: 'Applications',   c1: "elite dancers' regimens / back-pain recovery", b2: 'professional dancers / office workers', b1: 'dancers / people who sit at desks' },
    { step: 'Closing insight', c1: 'remarkably elegant solution',               b2: 'gentle but tough approach',             b1: 'helps both dancers and desk workers' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'Imagine you\'re explaining Pilates to a friend who\'s curious about trying it. In about 60–90 seconds, walk them through what Pilates is, where it came from, how it works, and who benefits from it. Try to use at least four target expressions: <em>"Have you ever wondered…", "hones / builds / helps build core strength", "engages deep stabilising muscles", "quality over quantity", "Rather than merely / Instead of just…", "a remarkably elegant solution".</em>',
      mine: 'Have you ever considered why Pilates studios have been blooming worldwide? Essentially, Pilates is a low-impact exercise that builds core strength, postural alignment, and breath control. Originally created by Joseph Pilates<mark>, this method helps rehabilitate wounded soldiers by precise and controlled movements. It engages deep stabilizing</mark> muscles that conventional workouts tend to overlook. Practitioners gradually cultivate <mark>leaner</mark> physique, better flexibility, and outstanding body awareness. Rather than merely chasing exhaustion, each session <mark>emphasizes</mark> quality over quantity. This approach underpins everything from professional dancers<mark> to sedentary office workers</mark>. <mark>The elegant solution rewards</mark> patience handsomely.',
      polished: 'Have you ever considered why Pilates studios have been blooming worldwide? Essentially, Pilates is a low-impact exercise that builds core strength, postural alignment, and breath control. Originally created by Joseph Pilates<mark> to rehabilitate wounded soldiers through precise and controlled movements, the method engages deep stabilising</mark> muscles that conventional workouts tend to overlook. Practitioners gradually cultivate <mark>a leaner</mark> physique, better flexibility, and outstanding body awareness. Rather than merely chasing exhaustion, each session <mark>emphasises</mark> quality over quantity. This approach underpins everything from professional dancers<mark>\' training to sedentary office workers\' back-pain recovery</mark>. <mark>It\'s a remarkably elegant solution that rewards</mark> patience handsomely.',
      corrections: [
        'Tense consistency: <code>this method helps rehabilitate wounded soldiers</code> → <code>this method was designed to rehabilitate wounded soldiers</code> (the historical frame opened by <em>Originally</em> must be maintained)',
        'Preposition with method/process: <code>by precise and controlled movements</code> → <code>through precise and controlled movements</code> (<em>by</em> + noun marks an agent; <em>through</em> fits a means or process)',
        'Missing article before singular countable noun: <code>cultivate leaner physique</code> → <code>cultivate a leaner physique</code>',
        'Wrong article + flattened closing: <code>The elegant solution rewards patience handsomely</code> → <code>It\'s a remarkably elegant solution that rewards patience handsomely</code> (<em>the</em> presupposes prior reference; <em>a</em> introduces the characterisation)',
      ],
      level: { badge: 'c1', text: 'Level: Solid C1, reaching toward C1+' },
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Round 1 Reflection',
    items: [
      { round: 1, levelPill: 'C1', html: 'strong vocabulary reuse (seven target expressions) and a fresh metaphor (<em>blooming worldwide</em>); errors limited to articles, prepositions, and one tense slip' },
    ],
    note: '"One round in. Vocabulary and rhetorical moves are already at C1; the next push is mechanical accuracy under rhetorical pressure — articles before singular abstract nouns, and tense consistency across long sentences. The counter-argument round is queued up."',
  },
};
