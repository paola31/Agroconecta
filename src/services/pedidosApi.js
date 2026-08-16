import {getUserSession} from "./authSession";

const PEDIDOS_URL = '/api/pedidos';

async function readError(response) {
  try {
    const body = await response.json();
    return body.messages?.[0] || body.message || body.error || 'No fue posible registrar el pedido.';
  } catch {
    return 'No fue posible registrar el pedido.';
  }
}

export async function createPedido(pedido) {
  const token = getUserSession()?.token;
  const response = await fetch(PEDIDOS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? {Authorization: "Bearer " + token} : {}),
    },
    body: JSON.stringify(pedido),
  });

  if (!response.ok) {
    throw new Error(await readError(response));
  }

  return response.json();
}
