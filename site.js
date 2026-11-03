const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  });
}

let themeButton = document.querySelector('.theme-toggle');
if (!themeButton && menuButton) {
  themeButton = document.createElement('button');
  themeButton.className = 'theme-toggle';
  themeButton.type = 'button';
  themeButton.setAttribute('aria-pressed', 'false');
  menuButton.before(themeButton);
}
const savedTheme = localStorage.getItem('kaishuo-theme');

function setTheme(isNightMode) {
  document.body.classList.toggle('night-mode', isNightMode);
  if (themeButton) {
    themeButton.setAttribute('aria-pressed', isNightMode);
    themeButton.innerHTML = isNightMode ? '☀ Day mode' : '☾ Night study';
  }
}

setTheme(savedTheme === 'night');

if (themeButton) {
  themeButton.addEventListener('click', () => {
    const isNightMode = !document.body.classList.contains('night-mode');
    setTheme(isNightMode);
    localStorage.setItem('kaishuo-theme', isNightMode ? 'night' : 'day');
  });
}

const tipButton = document.querySelector('#cat-tip');
const tipText = document.querySelector('#cat-tip-text');
const catPhoto = document.querySelector('.cat-photo');
const catTips = [
  'Run the code, then take the nap.',
  'A clean dataset earns extra treats.',
  'When in doubt, write down the assumptions.',
  'One clear chart beats a mysterious spreadsheet.',
  'Debugging is just analysis with snacks nearby.'
];
let tipIndex = 0;

if (tipButton && tipText) {
  tipButton.addEventListener('click', () => {
    tipText.textContent = catTips[tipIndex];
    tipIndex = (tipIndex + 1) % catTips.length;
    if (catPhoto) {
      catPhoto.classList.remove('wiggle');
      void catPhoto.offsetWidth;
      catPhoto.classList.add('wiggle');
    }
  });
}
