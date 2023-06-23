/**
 * @returns {string} The current theme in local storage.
 */
export const getStoredTheme = () => localStorage.getItem('theme');

/**
 * Store the theme in local storage.
 * @param {string} theme The theme to store.
 */
export const setStoredTheme = (theme) => {
  if (theme) {
    localStorage.setItem('theme', theme);
  } else {
    localStorage.removeItem('theme');
  }
};

/**
 * @returns {string} The media theme, from the operating system. (light by default).
 */
export const getMediaTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

/**
 * @returns {string | null} Preferred theme, if any stored, or media theme.
 */
export const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }
  return getMediaTheme();
};

/**
 * Set the theme on bootstrap media.
 * */
export const setTheme = (theme) => {
  if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
};

// Update component based on theme
(() => {
  setTheme(getPreferredTheme());
  // if operating system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme());
    }
  });
})();
