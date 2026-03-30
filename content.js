const SELECTOR = '#video-container > div > div.plyr__controls > div.plyr__controls__item.plyr__progress__container > div > div.plyr__pb > div > ul > li > div > div:nth-child(4)';

let styleEl = null;

function applyColor(color) {
  if (!styleEl) {
    styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = `${SELECTOR} { background-color: ${color} !important; }`;
}

chrome.storage.local.get('progressColor', (data) => {
  applyColor(data.progressColor || '#0000ff');
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.progressColor) {
    applyColor(changes.progressColor.newValue);
  }
});
