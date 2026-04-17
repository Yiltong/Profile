/**
 * time.js
 * Updates the profile card clock every second.
 * Displays the current wall-clock time broken into days (since epoch),
 * hours, minutes, and seconds.
 */

const daysEl  = document.getElementById('time-days');
const hoursEl = document.getElementById('time-hours');
const minsEl  = document.getElementById('time-mins');
const secsEl  = document.getElementById('time-secs');

/**
 * Pads a number to at least 2 digits.
 * @param {number} n
 * @returns {string}
 */
function pad(n) {
  return String(n).padStart(2, '0');
}

/**
 * Reads the current time and splits it into d / h / m / s.
 * Days = total days elapsed since Unix epoch (1 Jan 1970).
 * Hours, minutes, seconds = current UTC time-of-day components.
 */
// function tick() {
//   const now     = new Date();
//   const ms      = Date.now();

//   const totalSeconds = Math.floor(ms / 1000);
//   const days    = Math.floor(totalSeconds / 86400);
//   const hours   = now.getUTCHours();
//   const minutes = now.getUTCMinutes();
//   const seconds = now.getUTCSeconds();

//   daysEl.textContent  = days;
//   hoursEl.textContent = pad(hours);
//   minsEl.textContent  = pad(minutes);
//   secsEl.textContent  = pad(seconds);
// }

// tick();
// setInterval(tick, 1000);

const el = document.getElementById('epoch-display');
function tick() { el.textContent = Date.now().toString(); }
tick();
setInterval(tick, 1000);

