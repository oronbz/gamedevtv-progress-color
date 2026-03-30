const picker = document.getElementById('colorPicker');
const hex = document.getElementById('hex');

chrome.storage.local.get('progressColor', (data) => {
  const color = data.progressColor || '#0000ff';
  picker.value = color;
  hex.textContent = color;

  picker.addEventListener('input', (e) => {
    const color = e.target.value;
    hex.textContent = color;
    chrome.storage.local.set({ progressColor: color });
  });
});
