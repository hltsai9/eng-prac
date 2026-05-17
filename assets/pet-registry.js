/* Pet registry — central, expandable home for every pet species.
 *
 * Each pet lives in its own self-contained file under assets/pets/<species>.js
 * and calls PetRegistry.register(species, definition) when loaded. A definition
 * provides the pet's SVG markup, growth stages, and species-specific CSS rules
 * (visibility, scale-per-stage, animations). Adding a new pet next month is a
 * two-file change: drop in assets/pets/<species>.js and add the species name
 * to assets/pets/manifest.js.
 *
 * The registry is browser-only and works from file:// — no fetch, no bundler.
 */
(function () {
  const pets = Object.create(null);
  const STYLE_DATA_ATTR = 'data-pet-species';

  function register(species, definition) {
    if (!species || typeof species !== 'string') {
      throw new Error('PetRegistry.register: species must be a non-empty string');
    }
    if (!definition || !definition.svg || !Array.isArray(definition.stages)) {
      throw new Error(`PetRegistry.register(${species}): definition needs svg + stages[]`);
    }
    pets[species] = definition;

    if (definition.css) {
      const existing = document.querySelector(`style[${STYLE_DATA_ATTR}="${species}"]`);
      if (!existing) {
        const style = document.createElement('style');
        style.setAttribute(STYLE_DATA_ATTR, species);
        style.textContent = definition.css;
        document.head.appendChild(style);
      }
    }
  }

  function get(species) {
    return pets[species] || null;
  }

  function has(species) {
    return Boolean(pets[species]);
  }

  function listSpecies() {
    return Object.keys(pets);
  }

  /** Pick the stage index for a practice count, using the pet's own thresholds. */
  function stageForCount(species, count) {
    const def = pets[species];
    if (!def) return 0;
    let idx = 0;
    for (let i = 0; i < def.stages.length; i++) {
      if (count >= def.stages[i].threshold) idx = i;
    }
    return idx;
  }

  /** How far into the current stage, and how many practices remain to the next. */
  function stageProgress(species, count) {
    const def = pets[species];
    if (!def) return { pct: 0, next: null };
    const stages = def.stages;
    const idx = stageForCount(species, count);
    if (idx >= stages.length - 1) return { pct: 100, next: null };
    const base = stages[idx].threshold;
    const target = stages[idx + 1].threshold;
    const span = target - base;
    const into = count - base;
    return {
      pct: Math.min(100, Math.max(0, Math.round((into / span) * 100))),
      next: {
        name: stages[idx + 1].name,
        remaining: target - count,
      },
    };
  }

  /**
   * Inject the species' SVG into every element matching `selector` (default
   * `.pet-container`) and tag it with data-species + data-stage so the pet's
   * own CSS can drive visibility/scale.
   */
  function render(species, selector = '.pet-container', stage = 0) {
    const def = pets[species];
    if (!def) return;
    document.querySelectorAll(selector).forEach(el => {
      if (!el.querySelector('svg') || el.dataset.species !== species) {
        el.innerHTML = def.svg;
      }
      el.dataset.species = species;
      el.dataset.stage = String(stage);
    });
  }

  window.PetRegistry = {
    register,
    get,
    has,
    listSpecies,
    stageForCount,
    stageProgress,
    render,
  };
})();

/**
 * Load every pet listed in assets/pets/manifest.js (which sets
 * window.PET_SPECIES). Returns a Promise that resolves once all pets have
 * registered themselves.
 *
 * Pages call this once during boot, then ask PetRegistry to render.
 */
window.loadAllPets = function loadAllPets(basePath = 'assets/pets/') {
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(s);
    });
  }

  return loadScript(basePath + 'manifest.js').then(() => {
    const species = Array.isArray(window.PET_SPECIES) ? window.PET_SPECIES : [];
    return Promise.all(species.map(name => loadScript(basePath + name + '.js')));
  });
};
