/* Boba Tea — standard record (3 rounds; Round 3 pending). */
window.RECORD_REGISTRY = window.RECORD_REGISTRY || {};
window.RECORD_REGISTRY['boba-tea'] = {
  meta: {
    slug: 'boba-tea',
    date: '2026-05-10',
    titleEn: 'Boba Tea',
    titleZh: '珍珠奶茶',
    method: 'standard',
    navBrandText: 'Boba Tea',
    heroTitle: 'Boba Tea — A Personal Study Record',
  },
  intro: {
    zhTitle: '主題簡介：Boba Tea',
    paragraphs: [
      '珍珠奶茶起源於 1980 年代的台灣，是一種結合紅茶、牛奶與木薯粉圓的飲品。Q 彈的粉圓搭配香濃茶底，口感層次豐富，可以一邊喝一邊咀嚼，是台灣最具代表性的飲品之一。',
      '如今珍奶風靡全球，從紐約到倫敦都能見到專賣店。各家店各有特色，有的以新鮮水果聞名，有的與在地酪農合作，有的則專注於經典紅茶與配料的搭配。',
      '珍珠奶茶已不僅是一杯飲料，更成為台灣最具辨識度的飲食文化符號之一，悄悄地把台灣的精神帶往世界各地。',
    ],
  },
  passages: {
    c1: "Have you ever wondered why the world has become so obsessed with boba tea? The answer lies in a humble drink born in 1980s Taiwan. Essentially, boba tea blends brewed tea with milk and chewy tapioca pearls, creating a layered textural experience you sip and chew at once. The pearls sink to the bottom while the creamy tea swirls above, drawn up through an oversized straw. This unlikely combination underpins a global phenomenon, fuelling speciality shops from Taipei to New York. Rather than merely a beverage, boba has become a cultural ambassador — a remarkably playful symbol that quietly carries Taiwan's identity worldwide.",
    b2: 'Have you ever wondered why everyone seems crazy about boba tea? The answer is a simple drink that started in Taiwan in the 1980s. Basically, boba tea mixes brewed tea with milk and chewy tapioca pearls, giving you a drink you sip and chew at the same time. The pearls sit at the bottom while the milky tea floats above, pulled up through a wide straw. This clever mix supports a huge global trend, with speciality shops opening from Taipei to New York. Instead of just being a drink, boba has actually become a cultural symbol that proudly represents Taiwan around the world.',
    b1: 'Have you ever thought about why so many people love boba tea? The answer is a simple drink that began in Taiwan in the 1980s. In simple terms, boba tea mixes tea with milk and soft, chewy tapioca balls. You can drink and chew at the same time. The balls stay at the bottom, and the milky tea is on top. You drink it with a big, wide straw. This idea helps build a huge trend, and you can find boba shops from Taipei to New York. Boba is not just a drink. It is a fun symbol of Taiwan today.',
  },
  vocabulary: [
    { step: 'Hook question',   c1: 'wondered / obsessed with',                                       b2: 'wondered / crazy about',                                  b1: 'thought about / love' },
    { step: 'Topic reveal',    c1: 'a humble drink born in',                                         b2: 'a simple drink that started in',                          b1: 'a simple drink that began in' },
    { step: 'Definition',      c1: 'blends / chewy tapioca pearls',                                  b2: 'mixes / chewy tapioca pearls',                            b1: 'mixes / soft, chewy tapioca balls' },
    { step: 'Mechanism',       c1: 'sink to the bottom / swirls above',                              b2: 'sit at the bottom / floats above',                        b1: 'stay at the bottom / is on top' },
    { step: 'Applications',    c1: 'underpins a global phenomenon / fuelling speciality shops',      b2: 'supports a huge global trend / speciality shops opening', b1: 'helps build a huge trend / find boba shops' },
    { step: 'Closing insight', c1: 'a remarkably playful symbol that quietly carries',               b2: 'a cultural symbol that proudly represents',               b1: 'a fun symbol of Taiwan' },
  ],
  rounds: [
    {
      number: 1,
      prompt: 'Imagine a friend visiting Taiwan asks you why boba tea matters so much here. In about 60–90 seconds, walk them through where it came from, what it is, and why it\'s gone global. Try to use at least four of these expressions: <em>"Have you ever wondered…", "The answer lies in…", "chewy tapioca pearls", "sink to the bottom / swirls above", "underpins / supports / helps build", "a playful symbol that quietly carries…"</em>',
      mine: "Have you ever wondered why the world has become so obsessed with boba? The answer lies in a humble drink born in <mark>the 1980s</mark> Taiwan. Essentially, boba tea blends brewed tea with milk and chewy tapioca pearls, creating a layered textural experience you can drink and chew at once. The pearls sink to the bottom while the creamy tea swirls above, drawn up through an oversized straw. <mark>Rather than merely a beverage, boba has become a global ambassador, fueling specialty shops from Taipei to New York, a remarkably playful symbol</mark> that quietly carries Taiwan's identity worldwide.",
      polished: "Have you ever wondered why the world has become so obsessed with boba? The answer lies in a humble drink born in <mark>1980s</mark> Taiwan. Essentially, boba tea blends brewed tea with milk and chewy tapioca pearls, creating a layered textural experience you can drink and chew at once. The pearls sink to the bottom while the creamy tea swirls above, drawn up through an oversized straw. <mark>This unlikely combination has fuelled specialty shops from Taipei to New York. Rather than merely a beverage, boba has become a global ambassador — a remarkably playful symbol</mark> that quietly carries Taiwan's identity worldwide.",
      corrections: [
        'Article with adjectival decade: <code>the 1980s Taiwan</code> → <code>1980s Taiwan</code>',
        'Rhetorical pacing: applications and closing-insight beats compressed into one sentence → split into two for breathing room',
      ],
      level: { badge: 'c1plus', text: 'Level: Strong C1, reaching toward C2' },
    },
    {
      number: 2,
      prompt: 'Your friend pushes back: <em>"Honestly, it\'s just sugary milk tea with weird jelly balls. Why is everyone pretending it\'s a cultural symbol?"</em> In about 60–90 seconds, respond — acknowledge the surface point, then argue why the cultural reading still holds. Use at least four of these expressions: <em>"That\'s a fair point on the surface, but…", "What\'s easy to miss is…", "It\'s no coincidence that…", "underpins / has come to embody", "more than the sum of its parts", "quietly carries / proudly represents".</em>',
      mine: "That's a fair point on the surface, but boba is not simply a beverage. If <mark>you've got a chance</mark> to visit Taiwan, you'll see how <mark>delicately boba</mark> has been curated. <mark>Specialty shops in varied themes, some shops are renowned for using fresh fruit, some are for cooperating with local dairy farms, and some are</mark> for their classic brewed tea or toppings. It's no coincidence that <mark>boba shops have been developed so prosperous but it's a cultural thing in Taiwan</mark>. <mark>Statistically, every Taiwanese has at least one boba per day</mark>. This <mark>boba plus tea combination is more than the sum of its parts, it proudly represents Taiwan spirit</mark>.",
      polished: "That's a fair point on the surface, but boba is not simply a beverage. If <mark>you ever get the chance</mark> to visit Taiwan, you'll see how <mark>thoughtfully the boba scene</mark> has been curated. <mark>Specialty shops come in every theme imaginable — some are renowned for using fresh fruit, others for partnering with local dairy farms, and others still</mark> for their classic brewed tea or toppings. It's no coincidence that <mark>boba has flourished so widely here — it's a cultural thing, not just a business one</mark>. <mark>The average Taiwanese drinks at least one cup a day</mark>. This <mark>tea-and-pearls combination is more than the sum of its parts. It proudly represents Taiwan's spirit</mark>.",
      corrections: [
        'Parallelism break in tricolon: <code>some are renowned for X, some are for Y, some are for Z</code> → <code>some are renowned for X, others for Y, and others still for Z</code>',
        'Collocation slip: <code>delicately curated</code> → <code>thoughtfully curated</code>',
        'Wrong word class: <code>developed so prosperous</code> → <code>flourished so widely</code>',
        'Connector logic: <code>but it\'s a cultural thing</code> (wrong contrast) → <code>— it\'s a cultural thing, not just a business one</code>',
        'Countability + claim softening: <code>every Taiwanese has at least one boba per day</code> → <code>the average Taiwanese drinks at least one cup a day</code>',
        'Possessive form: <code>Taiwan spirit</code> → <code>Taiwan\'s spirit</code>',
      ],
      level: { badge: 'b2', text: 'Level: B2+ reaching toward C1' },
    },
    {
      number: 3,
      prompt: 'A food journalist interviews you for a piece titled <em>"Is Boba Tea Authentic Taiwanese Culture, or Just Clever Marketing?"</em> In about 60–90 seconds, give a nuanced answer — acknowledge that <strong>both</strong> readings have truth in them, then land on your own synthesis. Use at least four of these expressions: <em>"There\'s truth on both sides…", "It would be naive to deny that…", "That said / At the same time…", "What started as X has become Y", "organically evolved into", "a tradition in the making".</em> Aim for one short, punchy sentence somewhere in the middle.',
      status: 'Prompt delivered — synthesis attempt not yet recorded. This round will be filled in after the response is captured.',
      statusHeading: 'Status',
    },
  ],
  summary: {
    sectionLabel: 'Progress Summary',
    heading: 'Round-by-Round Progress',
    items: [
      { round: 1, levelPill: 'C1+', html: 'strong C1 reaching toward C2 — seven target expressions reused, sophisticated rhetorical moves (embedded relatives, stacked appositives); only slip was an adjectival-decade article (<em>the 1980s Taiwan</em>)' },
      { round: 2, levelPill: 'B2+', html: 'under the cognitive load of constructing an argument, accuracy dropped at the collocation and parallelism level (<em>delicately curated</em>, <em>developed so prosperous</em>, <em>Taiwan spirit</em>); ambition remained firmly C1' },
      { round: 3, html: '<em>Pending — synthesis prompt set, escalating along the rhetorical-complexity axis from arguing-against-pushback to holding two truths at once.</em>' },
    ],
    note: '"Next frontier: speaking-under-cognitive-load. Round 1 showed the vocabulary is in place; Round 2 showed it slips when argument construction competes for attention. The C1→C2 move now is rhythm — varying sentence length and landing short, punchy lines amid the longer ones."',
  },
};
