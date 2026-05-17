/* The Placebo Effect — standard record (1 round). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['placebo-effect'] = {
  meta: {
    slug: 'placebo-effect',
    date: '2026-05-04',
    titleEn: 'The Placebo Effect',
    titleZh: '安慰劑效應',
    method: 'standard',
    navBrandText: 'The Placebo Effect',
    heroTitle: 'The Placebo Effect — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：The Placebo Effect',
    paragraphs: [
      '安慰劑效應（placebo effect）是醫學與心理學中一個迷人的現象。當病人相信自己正在接受治療時，即使服用的只是糖丸，身體也可能出現真實的好轉。大腦會釋放天然的化學物質，例如腦內啡與多巴胺，進而緩解疼痛與焦慮。',
      '這項效應廣泛應用於新藥試驗，作為比較的基準。它提醒我們：心靈與身體的連結，遠比我們想像的還要深。',
    ],
  },
  passages: {
    c1: "Have you ever wondered why a sugar pill can sometimes make people genuinely feel better? The phenomenon is known as the placebo effect. In essence, the mere belief that one is being treated can trigger real physiological changes in the body. The brain releases its own arsenal of chemicals — endorphins, dopamine, and the like — which can ease pain and lift mood remarkably effectively. This curious effect underpins virtually every modern drug trial, serving as the benchmark new medicines must outperform. Far from being a quirk of gullible patients, it reveals just how profoundly the mind and body are intertwined.",
    b2: 'Have you ever wondered why a sugar pill can sometimes actually make people feel better? This is called the placebo effect. Basically, just believing that you are getting treatment can cause real changes in your body. The brain releases its own chemicals — like endorphins and dopamine — which can reduce pain and improve your mood quite a lot. This effect plays a key role in almost every modern drug trial, where new medicines have to do better than a placebo. Rather than being a trick on weak-minded patients, it shows how closely the mind and body are connected.',
    b1: 'Have you ever wondered why a sugar pill can sometimes really make people feel better? This is called the placebo effect. Simply put, just believing you are getting treatment can cause real changes in your body. The brain makes its own chemicals — like endorphins and dopamine — which can reduce pain and lift your mood. This effect is important in almost every drug test, because new medicines must work better than a sugar pill. It is not just a trick on weak patients. It shows that the mind and the body are much more connected than we often think.',
  },
  vocabulary: [
    { step: 'Hook question',   c1: 'wondered / genuinely feel better',                              b2: 'wondered / actually feel better',                            b1: 'wondered / really feel better' },
    { step: 'Topic reveal',    c1: 'The phenomenon is known as',                                    b2: 'This is called',                                             b1: 'This is called' },
    { step: 'Definition',      c1: 'the mere belief… can trigger real physiological changes',       b2: 'just believing… can cause real changes',                     b1: 'just believing… can cause real changes' },
    { step: 'Mechanism',       c1: 'releases its own arsenal of chemicals / ease pain and lift mood', b2: 'releases its own chemicals / reduce pain and improve mood', b1: 'makes its own chemicals / reduce pain and lift mood' },
    { step: 'Applications',    c1: 'underpins virtually every / serving as the benchmark',          b2: 'plays a key role in almost every / have to do better than',  b1: 'is important in almost every / must work better than' },
    { step: 'Closing insight', c1: 'profoundly intertwined',                                        b2: 'closely connected',                                          b1: 'much more connected than we often think' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'At a dinner party, someone says "The placebo effect is just people fooling themselves." Push back politely in 60–90 seconds. Use at least four expressions from: <em>"Have you ever wondered…", "In essence / Basically / Simply put…", "trigger real physiological changes", "underpins / plays a key role in…", "Far from being / Rather than being…", "profoundly intertwined / closely connected."</em>',
      mine: 'The placebo effect is scientifically <mark>proved. And it is</mark> even the benchmark <mark>new drug trial</mark> must outperform. When people genuinely believe that <mark>they are treated, their body changes correspondingly</mark>. The brain releases its own chemicals, such as endorphins and dopamine, which can reduce pain and lift mood. This effect shows <mark>that how profoundly</mark> our body and mind are intertwined.',
      polished: 'The placebo effect is scientifically <mark>proven — it is</mark> even the benchmark <mark>new drug trials</mark> must outperform. When people genuinely believe that <mark>they are being treated, their bodies respond in kind</mark>. The brain releases its own chemicals, such as endorphins and dopamine, which can reduce pain and lift mood. This effect shows <mark>just how profoundly</mark> our body and mind are intertwined.',
      corrections: [
        'Past participle: <code>scientifically proved</code> → <code>scientifically proven</code> (preferred adjectival form in modern usage)',
        'Plural noun: <code>new drug trial</code> → <code>new drug trials</code> (referring to trials in general)',
        'Verb aspect: <code>they are treated</code> → <code>they are being treated</code> (present continuous passive — placebo happens <em>during</em> treatment, not after)',
        'Word choice: <code>changes correspondingly</code> → <code>responds in kind</code> (correspondingly implies a proportional/mathematical relationship; <em>respond in kind</em> fits a biological response)',
        'Redundant connector: <code>shows that how profoundly</code> → <code>shows just how profoundly</code> (use <em>that</em> + statement OR <em>how</em> + degree clause, not both)',
      ],
      level: { badge: 'c1plus', text: 'Level: Solid C1, reaching toward C2' },
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Round 1 Reflection',
    items: [
      { round: 1, levelPill: 'C1+', html: 'aspect/article slips while attempting compression and rhetorical compression' },
    ],
    note: '"Mistakes of ambition, not confusion. Next frontier: register variation toward C2."',
  },
};
