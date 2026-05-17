/* Pet manifest — list every pet species the registry should auto-load.
 *
 * To add a new pet next month:
 *   1. Drop a new file at assets/pets/<species>.js that calls
 *      PetRegistry.register('<species>', { svg, stages, css, ... }).
 *   2. Add '<species>' to this array.
 *   3. Map it to a year-month in assets/pet-schedule.js.
 * No other file needs to change.
 */
window.PET_SPECIES = ['cat'];
