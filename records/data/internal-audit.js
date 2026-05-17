/* Internal Audit — standard record (1 complete round + 1 pending). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['internal-audit'] = {
  meta: {
    slug: 'internal-audit',
    date: '2026-05-13',
    titleEn: 'Internal Audit',
    titleZh: '內部稽核',
    method: 'standard',
    navBrandText: 'Internal Audit',
    heroTitle: 'Internal Audit — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：Internal Audit',
    paragraphs: [
      '內部稽核（internal audit）是組織內部一項獨立、客觀的評估活動，目的在於檢視公司的風險管理、內部控制與治理流程是否有效運作。它不只是事後檢查帳目，而是協助管理階層提前發現問題、防範風險。',
      '稽核人員會以系統化的方法檢視營運流程，找出缺失與潛在弱點，並提出具體的改善建議。他們不是來「挑毛病」的，而是扮演值得信賴的顧問角色，幫助組織提升效率、強化合規性，並建立透明、可追溯的治理文化。',
      '從董事會的策略決策到日常的合規執行，稽核發現都能提供重要參考。這項看似低調的職能，正是現代企業能夠長期穩健、值得信賴的重要防線。',
    ],
  },
  passages: {
    c1: "Have you ever wondered what keeps a large organisation from quietly drifting into chaos? That's largely where internal audit comes in. Essentially, internal audit is an independent, objective function that examines whether a company's risk management, controls, and governance processes are actually doing their job. Auditors don't merely tick boxes — they probe operations, surface hidden weaknesses, and recommend pragmatic fixes. Their findings inform everything from boardroom decisions to day-to-day compliance. Rather than acting as fault-finders, they serve as trusted advisors who safeguard organisational integrity. It's a remarkably understated discipline that quietly underpins how modern enterprises stay resilient, accountable, and trustworthy.",
    b2: "Have you ever wondered what stops a big organisation from slowly falling into chaos? That's basically where internal audit comes in. Internal audit is an independent and objective function that checks whether a company's risk management, controls, and governance are actually working. Auditors don't just go through a checklist — they look closely at operations, find hidden problems, and suggest practical improvements. Their reports support important decisions, from the boardroom to daily compliance work. Instead of acting as fault-finders, they work as trusted advisers who protect the organisation. It's a quiet but important job that helps modern companies stay strong and reliable.",
    b1: 'Have you ever thought about what stops a big company from slowly losing control? This is where internal audit helps. Internal audit is an independent team inside the company. It checks if risk management, controls, and rules are working well. Auditors do not just follow a checklist. They look at how the company works, find hidden problems, and give useful advice. Their reports help leaders make better choices and follow the rules. They are not there to blame people. They help the company stay safe and honest. It is a quiet job, but it is very important for modern companies.',
  },
  vocabulary: [
    { step: 'Hook question',   c1: 'wondered / drifting into chaos',                            b2: 'wondered / falling into chaos',                           b1: 'thought about / losing control' },
    { step: 'Topic reveal',    c1: "That's largely where internal audit comes in",              b2: "That's basically where internal audit comes in",          b1: 'This is where internal audit helps' },
    { step: 'Definition',      c1: 'independent, objective function that examines',             b2: 'independent and objective function that checks',          b1: 'independent team inside the company that checks' },
    { step: 'Mechanism',       c1: 'probe operations, surface hidden weaknesses',               b2: 'look closely at operations, find hidden problems',        b1: 'look at how the company works, find hidden problems' },
    { step: 'Applications',    c1: 'inform boardroom decisions to day-to-day compliance',       b2: 'support decisions from boardroom to daily compliance',    b1: 'help leaders make better choices and follow the rules' },
    { step: 'Closing insight', c1: 'remarkably understated discipline that quietly underpins',  b2: 'quiet but important job that helps',                      b1: 'quiet job, but very important' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'Imagine you\'re explaining what internal audit does to a friend who just joined a company and is confused by the term. In about 60–90 seconds, walk them through what internal auditors do, how they work, and why the role matters. Try to use at least four of these expressions: <em>"Have you ever wondered…", "That\'s where … comes in", "an independent, objective function", "surface hidden weaknesses / find hidden problems", "Rather than acting as fault-finders / Instead of acting as…", "quietly underpins / helps the company stay…"</em>',
      mine: 'Have you ever wondered how large companies avoid slowly becoming chaotic? That\'s where internal auditing <mark>comes into play</mark>. Essentially, internal audit is an independent, objective function that examines whether a company\'s risk management, controls, and governance processes are working properly. Auditors don\'t merely tick boxes — they probe operations, surface hidden problems, and suggest practical improvements. Their findings <mark>support from</mark> boardroom decisions to daily compliance work. Rather than acting as <mark>fault finders</mark>, they work as trusted advisors who protect the <mark>organization</mark>. It\'s a remarkably understated discipline that <mark>underpins modern companies stay</mark> resilient, accountable, and trustworthy.',
      polished: 'Have you ever wondered how large companies avoid slowly becoming chaotic? That\'s where internal auditing <mark>comes in</mark>. Essentially, internal audit is an independent, objective function that examines whether a company\'s risk management, controls, and governance processes are working properly. Auditors don\'t merely tick boxes — they probe operations, surface hidden problems, and suggest practical improvements. Their findings <mark>inform everything from</mark> boardroom decisions to daily compliance work. Rather than acting as <mark>fault-finders</mark>, they work as trusted advisors who protect the <mark>organisation</mark>. It\'s a remarkably understated discipline that <mark>quietly underpins how modern companies stay</mark> resilient, accountable, and trustworthy.',
      corrections: [
        'Verb-complement structure: <code>Their findings support from boardroom decisions to daily compliance work</code> → <code>Their findings inform everything from boardroom decisions to daily compliance work</code> (the <em>from X to Y</em> pattern needs a noun phrase before <em>from</em>; <em>support</em> is transitive and requires a direct object)',
        'Bare clause after <em>underpin</em>: <code>underpins modern companies stay resilient</code> → <code>quietly underpins how modern companies stay resilient</code> (<em>underpin</em> takes a noun phrase, not a bare clause; need a nominaliser like <em>how / the way</em>, or switch to a verb like <em>helps</em> that accepts a bare clause)',
        'Compound noun hyphenation: <code>fault finders</code> → <code>fault-finders</code> (compound noun takes a hyphen — minor polish at C1)',
        'Stylistic variation (not an error): <code>comes into play</code> is acceptable, though <code>comes in</code> is the cleaner topic-reveal move and aligns with the kit version',
      ],
      level: { badge: 'c1plus', text: 'Level: C1, with mid-transition slips toward C2' },
    },
    {
      number: 2,
      prompt: 'Your friend now pushes back skeptically: <em>"Honestly, this sounds like bureaucratic overhead. If management is doing its job, why does a company need a separate team to second-guess them? Isn\'t it just extra cost and politics?"</em> In about 60–90 seconds, respond to this challenge. Acknowledge what\'s reasonable in their objection, then reframe internal audit\'s value — ideally distinguishing it from management\'s own controls. Try to use at least four of these expressions: <em>"There\'s a fair point in that…", "the distinction lies in…", "precisely because they sit outside…", "far from being mere overhead…", "a degree of independence that…", "a safeguard against blind spots."</em>',
      status: 'Prompt delivered — counter-argument attempt not yet recorded. This round will be filled in after the response is captured.',
      statusHeading: 'Status',
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Round-by-Round Progress',
    items: [
      { round: 1, levelPill: 'C1+', html: 'seven target expressions reused, strong rhetorical arc from hook question to evaluative summary; held back by a verb-complement slip (<em>support from…</em>) and a bare-clause slip after <em>underpin</em> (<em>underpins … stay</em>), both mistakes of ambition rather than gaps in range' },
      { round: 2, html: '<em>Prompt delivered (counter-argument with concession). Attempt pending.</em>' },
      { round: 3, html: '<em>Not yet assigned — to be issued after Round 2.</em>' },
    ],
    note: '"The growth edge is now verb argument structure under spoken pressure — specifically the complement patterns of high-register verbs like underpin, inform, enable, drive, shape. Vocabulary range is no longer the bottleneck; the C1→C2 move is mechanical accuracy when the rhetorical ambition is highest. Round 2 (counter-argument under pushback) will test whether that accuracy holds when the cognitive load increases."',
  },
};
