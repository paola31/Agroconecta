const ADMIN_SESSION_KEY = 'agroconecta-admin-session';
const USER_SESSION_KEY = 'agroconecta-user-session';
const USER_SESSION_EVENT = 'agroconecta-user-session-updated';

function readSession(key) {
  const storedSession = window.localStorage.getItem(key);

  if (!storedSession) {
    return null;
  }

  try {
    return JSON.parse(storedSession);
  } catch {
    window.localStorage.removeItem(key);
    return null;
  }
}

export function getAdminSession() {
  const session = readSession(ADMIN_SESSION_KEY);
  return session?.rol === 'admin' ? session : null;
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

export function getUserSession() {
  const session = readSession(USER_SESSION_KEY);
  return session && session.rol !== 'admin' ? session : null;
}

export function saveUserSession(session) {
  window.localStorage.setItem(USER_SESSION_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(USER_SESSION_EVENT));
}

export function clearUserSession() {
  window.localStorage.removeItem(USER_SESSION_KEY);
  window.dispatchEvent(new Event(USER_SESSION_EVENT));
}

export {USER_SESSION_EVENT};
