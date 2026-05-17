/* Pet schedule — which pet species is "pet of the month" for each year-month.
 *
 * To assign a pet to a new month, add an entry here. The species name must
 * match one registered by an assets/pets/<species>.js file (and listed in
 * assets/pets/manifest.js).
 */
window.PET_SCHEDULE = {
  '2026-05': 'cat',
};

/* Fallback when the current month has no entry above. */
window.PET_SCHEDULE_DEFAULT = 'cat';
