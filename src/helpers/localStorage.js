export const persistState = (key, value, ttl = 15 * 60 * 1000) => {
  localStorage.setItem(
    key,
    JSON.stringify({ value, expiry: Date.now() + ttl })
  );
};

export const restoreState = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  if (!stored) return defaultValue;

  try {
    const parsed = JSON.parse(stored);
    if (Date.now() > parsed.expiry) {
      localStorage.removeItem(key);
      return defaultValue;
    }
    return parsed.value;
  } catch (err) {
    localStorage.removeItem(key);
    return defaultValue;
  }
};
