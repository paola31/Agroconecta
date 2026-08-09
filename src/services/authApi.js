const LOGIN_URL = '/api/auth/login';
const REGISTER_URL = '/api/auth/register';

async function readError(response, fallbackMessage) {
  try {
    const body = await response.json();
    return body.messages?.[0] || body.message || body.error || fallbackMessage;
  } catch {
    return fallbackMessage;
  }
}

export async function login(email, password) {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Correo o contraseña incorrectos.');
    }
    throw new Error(await readError(response, 'No fue posible iniciar sesión.'));
  }

  return response.json();
}

export async function register(userData) {
  const response = await fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'No fue posible completar el registro.'));
  }

  return response.json();
}
