/* Cat — the May 2026 study companion. Self-contained: SVG + stages + CSS.
 * Loaded by assets/pet-registry.js after the registry initializes.
 *
 * To add a new pet, mirror this file's structure under a new species name and
 * list it in assets/pets/manifest.js. The CSS below is namespaced via
 * .pet-container[data-species="cat"] so multiple pets never collide.
 */
(function () {
  if (!window.PetRegistry) {
    console.error('cat.js: PetRegistry missing — load assets/pet-registry.js first');
    return;
  }

  const SVG = `
<svg class="pet-svg" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- Halo (stage 7) -->
  <ellipse class="cat-halo" cx="110" cy="9" rx="30" ry="5" fill="none" stroke="#f5c14d" stroke-width="3.5"/>

  <!-- Extra sparkles (stage 7) -->
  <g class="cat-extra-sparkles" fill="#e8a4a4">
    <circle cx="18" cy="100" r="2"/>
    <circle cx="205" cy="170" r="2.5"/>
    <circle cx="50" cy="175" r="2"/>
    <circle cx="170" cy="20" r="2.2"/>
  </g>

  <!-- Sparkles (stage 4) -->
  <g class="cat-sparkles" fill="#f5c14d">
    <circle cx="35" cy="60" r="2.5"/>
    <circle cx="190" cy="50" r="3"/>
    <circle cx="200" cy="120" r="2"/>
  </g>

  <!-- Crown (stage 4) -->
  <g class="cat-crown">
    <polygon points="82,32 92,18 102,32 110,18 118,32 128,18 138,32"
             fill="#f5c14d" stroke="#b88a1a" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="82" y="30" width="56" height="5" fill="#f5c14d" stroke="#b88a1a" stroke-width="1.5"/>
    <circle cx="92" cy="22" r="1.8" fill="#e8a4a4"/>
    <circle cx="110" cy="22" r="1.8" fill="#e8a4a4"/>
    <circle cx="128" cy="22" r="1.8" fill="#e8a4a4"/>
  </g>

  <!-- Wings (stage 6) — drawn before body so they sit behind it -->
  <g class="cat-wings">
    <path d="M 65 138 Q 25 115 38 78 Q 55 100 73 138 Z"
          fill="#fdfaf2" stroke="#b8895a" stroke-width="1.5" stroke-linejoin="round" opacity="0.92"/>
    <path d="M 155 138 Q 195 115 182 78 Q 165 100 147 138 Z"
          fill="#fdfaf2" stroke="#b8895a" stroke-width="1.5" stroke-linejoin="round" opacity="0.92"/>
    <path d="M 55 115 L 65 130" stroke="#b8895a" stroke-width="1" opacity="0.6"/>
    <path d="M 165 115 L 155 130" stroke="#b8895a" stroke-width="1" opacity="0.6"/>
  </g>

  <!-- Tail (wags) -->
  <g class="cat-tail">
    <path class="cat-tail-path" d="M 160 148 Q 188 130 184 90 Q 182 72 172 80"/>
  </g>

  <!-- Body -->
  <ellipse class="cat-body" cx="110" cy="143" rx="56" ry="40"/>

  <!-- Stripes (stage 3) -->
  <g class="cat-stripes">
    <path class="cat-stripe" d="M 92 113 Q 92 122 89 132"/>
    <path class="cat-stripe" d="M 110 110 Q 110 122 110 134"/>
    <path class="cat-stripe" d="M 128 113 Q 128 122 131 132"/>
  </g>

  <!-- Paws -->
  <ellipse class="cat-paw" cx="88" cy="178" rx="11" ry="6"/>
  <ellipse class="cat-paw" cx="132" cy="178" rx="11" ry="6"/>

  <!-- Head -->
  <circle class="cat-head" cx="110" cy="86" r="42"/>

  <!-- Ears -->
  <polygon class="cat-ear" points="75,55 82,30 95,55"/>
  <polygon class="cat-ear" points="145,55 138,30 125,55"/>
  <polygon class="cat-ear-inner" points="80,52 85,40 91,52"/>
  <polygon class="cat-ear-inner" points="140,52 135,40 129,52"/>

  <!-- Eyes (open) -->
  <g class="cat-eyes">
    <ellipse class="cat-eye" cx="95" cy="85" rx="4.5" ry="6.5"/>
    <ellipse class="cat-eye" cx="125" cy="85" rx="4.5" ry="6.5"/>
    <circle class="cat-eye-shine" cx="96.5" cy="83" r="1.5"/>
    <circle class="cat-eye-shine" cx="126.5" cy="83" r="1.5"/>
  </g>

  <!-- Sleeping eyes (stage 0) -->
  <g class="cat-zzz">
    <path d="M 88 88 Q 95 92 102 88" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
    <path d="M 118 88 Q 125 92 132 88" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
    <text x="155" y="60" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#8a3a3a">z</text>
    <text x="165" y="48" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#8a3a3a">z</text>
  </g>

  <!-- Glasses (stage 5) — drawn after eyes so they sit on top -->
  <g class="cat-glasses">
    <circle cx="95" cy="85" r="10" fill="rgba(255,255,255,0.15)" stroke="#2b2b2b" stroke-width="1.8"/>
    <circle cx="125" cy="85" r="10" fill="rgba(255,255,255,0.15)" stroke="#2b2b2b" stroke-width="1.8"/>
    <line x1="105" y1="85" x2="115" y2="85" stroke="#2b2b2b" stroke-width="1.8"/>
    <line x1="85" y1="85" x2="78" y2="83" stroke="#2b2b2b" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="135" y1="85" x2="142" y2="83" stroke="#2b2b2b" stroke-width="1.8" stroke-linecap="round"/>
  </g>

  <!-- Nose & mouth -->
  <polygon class="cat-nose" points="110,97 105,102 115,102"/>
  <path class="cat-mouth" d="M 110 102 Q 105 109 100 106"/>
  <path class="cat-mouth" d="M 110 102 Q 115 109 120 106"/>

  <!-- Whiskers (stage 2) -->
  <g class="cat-whiskers">
    <line class="cat-whisker" x1="78" y1="98"  x2="56" y2="94"/>
    <line class="cat-whisker" x1="78" y1="103" x2="55" y2="105"/>
    <line class="cat-whisker" x1="142" y1="98"  x2="164" y2="94"/>
    <line class="cat-whisker" x1="142" y1="103" x2="165" y2="105"/>
  </g>
</svg>`.trim();

  const STAGES = [
    {
      threshold: 0,
      name: 'Newborn',
      message: "Maomi is curled up asleep. Add your first practice to wake them up!",
      thresholdLabel: '0 practices',
      desc: "Curled up asleep, dreaming of a first practice. Add one to wake them up.",
      features: ["Sleeping eyes & floating z's"],
    },
    {
      threshold: 1,
      name: 'Kitten',
      message: "Maomi opens their eyes and blinks at you. Keep going!",
      thresholdLabel: '1–2 practices',
      desc: "Eyes open. Maomi blinks at you, still small and a little uncertain.",
      features: ['Eyes open + blinking', 'Tail wagging'],
    },
    {
      threshold: 3,
      name: 'Junior',
      message: "Maomi is bouncing around, full of curiosity.",
      thresholdLabel: '3–4 practices',
      desc: "Curious and playful. Whiskers come in — Maomi looks more like a proper cat now.",
      features: ['Whiskers unlocked', 'Bigger size'],
    },
    {
      threshold: 5,
      name: 'Adult',
      message: "Maomi is content and well-fed — purring softly.",
      thresholdLabel: '5–7 practices',
      desc: "Content and well-fed. Stripes appear on the body — Maomi is purring softly.",
      features: ['Body stripes', 'Full whiskers'],
    },
    {
      threshold: 8,
      name: 'Elder',
      message: "Maomi has matured into a regal companion, crown and all.",
      thresholdLabel: '8–11 practices',
      desc: "Maomi has matured into a regal companion, crown and all.",
      features: ['Golden crown', 'Twinkling sparkles'],
    },
    {
      threshold: 12,
      name: 'Sage',
      message: "Maomi has grown wise — reading glasses appear on their nose.",
      thresholdLabel: '12–16 practices',
      desc: "Maomi has grown wise. Round reading glasses appear on their nose.",
      features: ["Scholar's glasses", 'Still wears the crown'],
    },
    {
      threshold: 17,
      name: 'Mythic',
      message: "Wings unfold behind Maomi. Something otherworldly stirs.",
      thresholdLabel: '17–22 practices',
      desc: "Soft white wings unfold behind Maomi. Something otherworldly has begun.",
      features: ['Angel wings', 'Slow wing flap'],
    },
    {
      threshold: 23,
      name: 'Legendary',
      message: "Maomi has ascended — haloed, winged, and luminous.",
      thresholdLabel: '23+ practices',
      desc: "Maomi has ascended — a golden halo, glittering pink sparkles, the whole pantheon.",
      features: ['Floating halo', 'Pink sparkles everywhere'],
    },
  ];

  /* CSS namespaced to data-species="cat" so other pets stay independent. */
  const CSS = `
.pet-container[data-species="cat"][data-stage="0"] { transform: scale(0.45); }
.pet-container[data-species="cat"][data-stage="1"] { transform: scale(0.60); }
.pet-container[data-species="cat"][data-stage="2"] { transform: scale(0.75); }
.pet-container[data-species="cat"][data-stage="3"] { transform: scale(0.88); }
.pet-container[data-species="cat"][data-stage="4"] { transform: scale(1.00); }
.pet-container[data-species="cat"][data-stage="5"] { transform: scale(1.05); }
.pet-container[data-species="cat"][data-stage="6"] { transform: scale(1.10); }
.pet-container[data-species="cat"][data-stage="7"] { transform: scale(1.15); }

.cat-body, .cat-head, .cat-paw, .cat-ear { fill: #f0c89a; stroke: #b8895a; stroke-width: 2; }
.cat-ear-inner { fill: #e8a4a4; }
.cat-eye { fill: #1a1a1a; }
.cat-eye-shine { fill: #fff; }
.cat-nose { fill: #e8a4a4; }
.cat-mouth { fill: none; stroke: #6b6b6b; stroke-width: 1.5; stroke-linecap: round; }
.cat-whisker { stroke: #6b6b6b; stroke-width: 1.2; stroke-linecap: round; }
.cat-stripe { stroke: #b8895a; stroke-width: 2; fill: none; stroke-linecap: round; }
.cat-tail-path { fill: none; stroke: #b8895a; stroke-width: 13; stroke-linecap: round; }

.cat-tail {
  transform-box: fill-box;
  transform-origin: 0% 100%;
  animation: cat-tail-wag 1.8s ease-in-out infinite;
}
@keyframes cat-tail-wag {
  0%, 100% { transform: rotate(-12deg); }
  50%      { transform: rotate(14deg); }
}

.cat-eyes {
  transform-box: fill-box;
  transform-origin: center;
  animation: cat-blink 5.5s infinite;
}
@keyframes cat-blink {
  0%, 92%, 96.5%, 100% { transform: scaleY(1); }
  94%                  { transform: scaleY(0.1); }
}

.cat-whiskers, .cat-stripes, .cat-crown, .cat-sparkles,
.cat-glasses, .cat-wings, .cat-halo, .cat-extra-sparkles {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.pet-container[data-species="cat"][data-stage="2"] .cat-whiskers,
.pet-container[data-species="cat"][data-stage="3"] .cat-whiskers,
.pet-container[data-species="cat"][data-stage="4"] .cat-whiskers,
.pet-container[data-species="cat"][data-stage="5"] .cat-whiskers,
.pet-container[data-species="cat"][data-stage="6"] .cat-whiskers,
.pet-container[data-species="cat"][data-stage="7"] .cat-whiskers { opacity: 1; }

.pet-container[data-species="cat"][data-stage="3"] .cat-stripes,
.pet-container[data-species="cat"][data-stage="4"] .cat-stripes,
.pet-container[data-species="cat"][data-stage="5"] .cat-stripes,
.pet-container[data-species="cat"][data-stage="6"] .cat-stripes,
.pet-container[data-species="cat"][data-stage="7"] .cat-stripes { opacity: 1; }

.pet-container[data-species="cat"][data-stage="4"] .cat-crown,
.pet-container[data-species="cat"][data-stage="5"] .cat-crown,
.pet-container[data-species="cat"][data-stage="6"] .cat-crown,
.pet-container[data-species="cat"][data-stage="7"] .cat-crown,
.pet-container[data-species="cat"][data-stage="4"] .cat-sparkles,
.pet-container[data-species="cat"][data-stage="5"] .cat-sparkles,
.pet-container[data-species="cat"][data-stage="6"] .cat-sparkles,
.pet-container[data-species="cat"][data-stage="7"] .cat-sparkles { opacity: 1; }

.pet-container[data-species="cat"][data-stage="5"] .cat-glasses,
.pet-container[data-species="cat"][data-stage="6"] .cat-glasses,
.pet-container[data-species="cat"][data-stage="7"] .cat-glasses { opacity: 1; }

.pet-container[data-species="cat"][data-stage="6"] .cat-wings,
.pet-container[data-species="cat"][data-stage="7"] .cat-wings { opacity: 1; }

.pet-container[data-species="cat"][data-stage="7"] .cat-halo,
.pet-container[data-species="cat"][data-stage="7"] .cat-extra-sparkles { opacity: 1; }

.pet-container[data-species="cat"][data-stage="0"] .cat-eyes { display: none; }
.pet-container[data-species="cat"][data-stage="0"] .cat-zzz  { opacity: 1; }
.cat-zzz { opacity: 0; transition: opacity 0.3s ease; }

.cat-sparkles circle {
  transform-box: fill-box;
  transform-origin: center;
  animation: cat-twinkle 2s ease-in-out infinite;
}
.cat-sparkles circle:nth-child(2) { animation-delay: 0.6s; }
.cat-sparkles circle:nth-child(3) { animation-delay: 1.2s; }
@keyframes cat-twinkle {
  0%, 100% { transform: scale(0.6); opacity: 0.4; }
  50%      { transform: scale(1.2); opacity: 1; }
}

.cat-extra-sparkles circle {
  transform-box: fill-box;
  transform-origin: center;
  animation: cat-twinkle 2.4s ease-in-out infinite;
}
.cat-extra-sparkles circle:nth-child(1) { animation-delay: 0.3s; }
.cat-extra-sparkles circle:nth-child(2) { animation-delay: 0.9s; }
.cat-extra-sparkles circle:nth-child(3) { animation-delay: 1.5s; }
.cat-extra-sparkles circle:nth-child(4) { animation-delay: 2.1s; }

.cat-wings {
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: cat-wing-flap 2.6s ease-in-out infinite;
}
@keyframes cat-wing-flap {
  0%, 100% { transform: scaleY(1)    scaleX(1); }
  50%      { transform: scaleY(0.86) scaleX(0.96); }
}

.cat-halo {
  transform-box: fill-box;
  transform-origin: center;
  animation: cat-halo-bob 4s ease-in-out infinite;
}
@keyframes cat-halo-bob {
  0%, 100% { transform: translateY(0)    scaleX(1);    opacity: 1;   }
  50%      { transform: translateY(-2px) scaleX(0.94); opacity: 0.85;}
}
`.trim();

  window.PetRegistry.register('cat', {
    displayName: 'Maomi the Cat',
    historyTitle: 'Maomi the Cat',
    historyIntroHtml:
      "Maomi grows as you log more practice records during the month. " +
      "Each stage unlocks something new — <strong>whiskers</strong>, <strong>stripes</strong>, " +
      "a <strong>crown</strong>, <strong>glasses</strong>, <strong>wings</strong>, " +
      "and finally a <strong>halo</strong>. Locked stages stay a mystery until you reach them.",
    svg: SVG,
    stages: STAGES,
    css: CSS,
  });
})();
