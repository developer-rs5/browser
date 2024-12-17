const modeSelect = document.getElementById('mode-select');
const bgColorPicker = document.getElementById('bg-color-picker');
const headerColorPicker = document.getElementById('header-color-picker');
const textColorPicker = document.getElementById('text-color-picker');
const boxBackgroundColorPicker = document.getElementById('box-background-color-picker');
const buttonColor = document.getElementById('button-color-picker');
const colorLabels = document.getElementsByClassName('color-label'); // Selects all labels
const body = document.body;
const searchInput = document.getElementById('search-input');
const searchBarBackground = document.getElementById('search-bar-background-picker');

// Load settings from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const storedMode = localStorage.getItem('mode');
  const storedBackgroundColor = localStorage.getItem('custom-background-color');
  const storedHeaderColor = localStorage.getItem('custom-header-color');
  const storedTextColor = localStorage.getItem('custom-text-color');
  const storedBoxBackgroundColor = localStorage.getItem('custom-box-background-color');
  const storedSearchBarBackground = localStorage.getItem('custom-search-bar-background');
  const storedButtonColor = localStorage.getItem('custom-button-color');

  // Apply stored settings
  if (storedMode) {
    body.classList.add(storedMode);
    modeSelect.value = storedMode;

    if (storedMode === 'custom') {
      showCustomPickers();
      if (storedBackgroundColor) document.body.style.setProperty('--custom-background-color', storedBackgroundColor);
      if (storedHeaderColor) document.body.style.setProperty('--custom-header-color', storedHeaderColor);
      if (storedTextColor) document.body.style.setProperty('--custom-text-color', storedTextColor);
      if (storedBoxBackgroundColor) document.body.style.setProperty('--custom-box-background-color', storedBoxBackgroundColor);
      if (storedSearchBarBackground) document.body.style.setProperty('--custom-search-bar-background', storedSearchBarBackground);
      if (storedButtonColor) document.body.style.setProperty('--custom-button-color', storedButtonColor);
    }
  } else {
    body.classList.add('light-mode');
    modeSelect.value = 'light'; // Set to light mode by default
  }
});

// Handle mode changes (Light, Dark, Custom)
modeSelect.addEventListener('change', () => {
  const selectedMode = modeSelect.value;

  // Remove all existing modes
  body.classList.remove('dark-mode', 'light-mode', 'custom-mode');

  // Apply selected mode and update localStorage
  if (selectedMode === 'dark') {
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
    hideCustomPickers();
  } else if (selectedMode === 'light') {
    body.classList.add('light-mode');
    localStorage.setItem('mode', 'light');
    hideCustomPickers();
  } else if (selectedMode === 'custom') {
    body.classList.add('custom-mode');
    localStorage.setItem('mode', 'custom');
    showCustomPickers();
  }
});

// Show color pickers for custom mode
function showCustomPickers() {
  bgColorPicker.style.display = 'block';
  headerColorPicker.style.display = 'block';
  textColorPicker.style.display = 'block';
  boxBackgroundColorPicker.style.display = 'block';
  searchBarBackgroundPicker.style.display = 'block';
  buttonColor.style.display = 'block';
  colorLabels.style.display = 'block';
  
  // Show labels for custom colors
  colorLabels.forEach(label => {
    label.style.display = 'block';
  });
}

// Hide color pickers for non-custom modes
function hideCustomPickers() {
  bgColorPicker.style.display = 'none';
  headerColorPicker.style.display = 'none';
  textColorPicker.style.display = 'none';
  boxBackgroundColorPicker.style.display = 'none';
  searchBarBackground.style.display = 'none';
  buttonColor.style.display = 'none';
  colorLabels.style.display = 'none';
  
  // Hide labels for custom colors
  colorLabels.forEach(label => {
    label.style.display = 'none';
  });
}

// Function to handle color picker changes
function handleColorPickerChange(event, cssVar) {
  const selectedColor = event.target.value;
  document.body.style.setProperty(cssVar, selectedColor);
  localStorage.setItem(cssVar, selectedColor);
}

// Add event listeners for color pickers
bgColorPicker.addEventListener('input', (event) => handleColorPickerChange(event, '--custom-background-color'));
headerColorPicker.addEventListener('input', (event) => handleColorPickerChange(event, '--custom-header-color'));
textColorPicker.addEventListener('input', (event) => handleColorPickerChange(event, '--custom-text-color'));
boxBackgroundColorPicker.addEventListener('input', (event) => handleColorPickerChange(event, '--custom-box-background-color'));
searchBarBackground.addEventListener('input', (event) => handleColorPickerChange(event, '--custom-search-bar-background'));
buttonColor.addEventListener('input', (event) => handleColorPickerChange(event, '--custom-button-color'));

// Search bar functionality (Bing search)
searchInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const query = searchInput.value;
    if (query) {
      window.open(`https://www.bing.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  }
});
