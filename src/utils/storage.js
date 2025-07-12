// Helper untuk interaksi dengan localStorage

export const STORAGE_KEY = 'uxmarket_patterns';

export const loadPatterns = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load patterns:', e);
    return [];
  }
};

export const savePatterns = (patterns) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patterns));
  } catch (e) {
    console.error('Failed to save patterns:', e);
  }
};
