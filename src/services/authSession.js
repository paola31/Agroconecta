const ADMIN_SESSION_KEY = 'agroconecta-admin-session';
const USER_SESSION_KEY = 'agroconecta-user-session';
const USER_SESSION_EVENT = 'agroconecta-user-session-updated';

function readSession(key) {
  window.localStorage.removeItem(key);
  const storedSession = window.sessionStorage.getItem(key);

  if (!storedSession) {
    return null;
  }

  try {
    const session = JSON.parse(storedSession);
    if (!hasActiveToken(session?.token)) {
      window.sessionStorage.removeItem(key);
      return null;
    }
    return session;
  } catch {
    window.sessionStorage.removeItem(key);
    return null;
  }
}

function hasActiveToken(token) {
  if (typeof token !== "string") {
    return false;
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return false;
  }

  try {
    const encodedPayload = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const paddedPayload = encodedPayload.padEnd(Math.ceil(encodedPayload.length / 4) * 4, "=");
    const payload = JSON.parse(window.atob(paddedPayload));
    return Number.isFinite(payload.exp) && payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export function getAdminSession() {
  const session = readSession(ADMIN_SESSION_KEY);
  return session?.rol === 'admin' ? session : null;
}

export function saveAdminSession(session) {
  window.sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
}

export function clearAdminSession() {
  window.localStorage.removeItem(ADMIN_SESSION_KEY);
  window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
}

export function hasAdminSession() {
  return Boolean(getAdminSession());
}

export function getUserSession() {
  const session = readSession(USER_SESSION_KEY);
  return session && session.rol !== 'admin' ? session : null;
}

export function saveUserSession(session) {
  window.sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(USER_SESSION_EVENT));
}

export function clearUserSession() {
  window.localStorage.removeItem(USER_SESSION_KEY);
  window.sessionStorage.removeItem(USER_SESSION_KEY);
  window.dispatchEvent(new Event(USER_SESSION_EVENT));
}

export {USER_SESSION_EVENT};
