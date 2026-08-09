const AUTH_URL = '/api/auth/login';

async function readError(response) {
  try {
    const body = await response.json();
    return body.messages?.[0] || body.message || body.error || 'No fue posible iniciar sesión.';
  } catch {
    return 'No fue posible iniciar sesión.';
  }
}

export async function login(email, password) {
  const response = await fetch(AUTH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(await readError(response));
  }

  return response.json();
}
