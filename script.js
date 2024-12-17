const modeSelect = document.getElementById('mode-select');
const body = document.body;
const searchInput = document.getElementById('search-input');

// Load settings from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const storedMode = localStorage.getItem('mode');

  // Apply stored settings
  if (storedMode) {
    body.classList.add(storedMode);
    modeSelect.value = storedMode;
  } else {
    body.classList.add('light-mode');
    modeSelect.value = 'light'; // Default to light mode
  }
});

// Handle mode changes (Light, Dark)
modeSelect.addEventListener('change', () => {
  const selectedMode = modeSelect.value;

  // Remove all existing modes
  body.classList.remove('dark-mode', 'light-mode');

  // Apply selected mode and update localStorage
  if (selectedMode === 'dark') {
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
  } else if (selectedMode === 'light') {
    body.classList.add('light-mode');
    localStorage.setItem('mode', 'light');
  }
});

// Search bar functionality (Bing search)
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value;
    if (query) {
      window.open(`https://www.bing.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  }
});
