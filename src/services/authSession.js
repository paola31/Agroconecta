const ADMIN_SESSION_KEY = 'agroconecta-admin-session';

export function getAdminSession() {
  const storedSession = window.localStorage.getItem(ADMIN_SESSION_KEY);

  if (!storedSession) {
    return null;
  }

  try {
    const session = JSON.parse(storedSession);
    return session?.rol === 'admin' ? session : null;
  } catch {
    window.localStorage.removeItem(ADMIN_SESSION_KEY);
    return null;
  }
}

export function saveAdminSession(session) {
  window.localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
}

export function clearAdminSession() {
  window.localStorage.removeItem(ADMIN_SESSION_KEY);
}

export function hasAdminSession() {
  return Boolean(getAdminSession());
}
