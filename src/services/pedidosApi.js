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
  const response = await fetch(PEDIDOS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pedido),
  });

  if (!response.ok) {
    throw new Error(await readError(response));
  }

  return response.json();
}
