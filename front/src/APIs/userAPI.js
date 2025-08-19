// APIs/userAPI.js

export const API_URL = 'http://localhost:8001';

// ✅ Wrapper for authenticated fetch requests
export const fetchWithAuth = async (endpoint, options = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include', // 👈 ensures cookies (JWT) are sent
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || 'API request failed');
  }
  return res.json();
};
