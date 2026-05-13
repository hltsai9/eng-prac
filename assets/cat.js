// Shared cat SVG markup. Injected into any element matching .pet-container
// (or the elements passed explicitly to renderCats()). Feature visibility
// per stage is handled in style.css via .pet-container[data-stage="N"] rules.
window.CAT_SVG_MARKUP = `
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
</svg>
`.trim();

/**
 * Inject the cat SVG into every element matching `selector` (default
 * `.pet-container`) that doesn't already contain one.
 */
window.renderCats = function(selector = '.pet-container') {
  document.querySelectorAll(selector).forEach(c => {
    if (!c.querySelector('svg')) {
      c.innerHTML = window.CAT_SVG_MARKUP;
    }
  });
};
