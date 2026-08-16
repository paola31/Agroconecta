import {getAdminSession} from "./authSession";

const API_BASE_URL = '/api/productos';

function adminHeaders() {
    const token = getAdminSession()?.token;
    return {
        "Content-Type": "application/json",
        ...(token ? {Authorization: "Bearer " + token} : {}),
    };
}

const initialMockProducts = [
    {
        id: '1',
        nombre: 'Cebolla cabezona',
        descripcion: 'Producto agricola fresco disponible para venta local.',
        unidadMedida: 'kg',
        precioUnitario: 5000,
        imagenUrl: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80',
        activo: true,
        creadoEn: '2026-05-20T08:00:00.000Z',
    },
    {
        id: '2',
        nombre: 'Zanahoria organica',
        descripcion: 'Cultivo organico seleccionado para el catalogo de Agroconecta.',
        unidadMedida: 'kg',
        precioUnitario: 4200,
        imagenUrl: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=400&q=80',
        activo: true,
        creadoEn: '2026-05-21T08:00:00.000Z',
    },
    {
        id: '3',
        nombre: 'Tomate chonto',
        descripcion: 'Producto de alta rotacion para compradores urbanos.',
        unidadMedida: 'kg',
        precioUnitario: 3800,
        imagenUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80',
        activo: true,
        creadoEn: '2026-05-22T08:00:00.000Z',
    },
];

let mockProducts = [...initialMockProducts];

// Mantiene el frontend navegable sin backend y usa la API real cuando este disponible.
async function requestWithFallback(request, fallback) {
    try {
        return await request();
    } catch {
        return fallback();
    }
}

async function handleResponse(response) {
    if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const message = errorBody?.messages?.join(', ') || errorBody?.message || 'Error al comunicarse con el backend';
        throw new Error(message);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

export async function getProductos() {
    return requestWithFallback(
        async () => {
            const response = await fetch(API_BASE_URL);
            return handleResponse(response);
        },
        () => mockProducts,
    );
}

export async function getProductoById(id) {
    return requestWithFallback(
        async () => {
            const response = await fetch(`${API_BASE_URL}/${id}`);
            return handleResponse(response);
        },
        () => {
            const product = mockProducts.find((item) => String(item.id) === String(id));

            if (!product) {
                throw new Error('Producto no encontrado en los datos locales.');
            }

            return product;
        },
    );
}

export async function createProducto(producto) {
    const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: adminHeaders(),
        body: JSON.stringify(producto),
    });
    return handleResponse(response);
}

export async function updateProducto(id, producto) {
    const response = await fetch(API_BASE_URL + "/" + id, {
        method: "PUT",
        headers: adminHeaders(),
        body: JSON.stringify(producto),
    });
    return handleResponse(response);
}

export async function deleteProducto(id) {
    const response = await fetch(API_BASE_URL + "/" + id, {
        method: "DELETE",
        headers: adminHeaders(),
    });
    return handleResponse(response);
}
