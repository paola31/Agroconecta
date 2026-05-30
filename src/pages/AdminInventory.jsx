import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {deleteProducto, getProductos} from '../services/productosApi';

function getProductPath(id) {
    return `/admin/inventory/${id}`;
}

function formatCurrency(value) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0,
    }).format(Number(value || 0));
}

function AdminInventory() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [deletingProductId, setDeletingProductId] = useState(null);

    useEffect(() => {
        let isMounted = true;

        getProductos()
            .then((data) => {
                if (isMounted) {
                    setProducts(data);
                    setError('');
                }
            })
            .catch((requestError) => {
                if (isMounted) {
                    setError(requestError.message);
                }
            })
            .finally(() => {
                if (isMounted) {
                    setIsLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const handleRowClick = (productId) => {
        navigate(getProductPath(productId));
    };

    const handleDeleteClick = async (event, productId) => {
        event.stopPropagation();
        setDeletingProductId(productId);
        setError('');

        try {
            await deleteProducto(productId);
            setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productId));
        } catch (requestError) {
            setError(requestError.message);
        } finally {
            setDeletingProductId(null);
        }
    };

    return (
        <div className="card border-0 shadow-sm rounded-4 admin-inventory-card">
            <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                    <div>
                        <p className="text-muted small mb-1">Panel de control</p>
                        <h4 className="mb-0">Inventario</h4>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                        <button className="btn btn-outline-secondary rounded-3">Filtros</button>
                        <button className="btn btn-outline-secondary rounded-3">Descargar</button>
                        <Link className="btn btn-success rounded-3" to="/admin/inventory/new">
                            Añadir
                        </Link>
                    </div>
                </div>

                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Unidad</th>
                            <th>Fecha Creación</th>
                            <th className="text-end">Estado</th>
                            <th className="text-end">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {isLoading && (
                            <tr>
                                <td className="text-muted" colSpan="7">Cargando productos...</td>
                            </tr>
                        )}

                        {!isLoading && products.length === 0 && (
                            <tr>
                                <td className="text-muted" colSpan="7">No hay productos activos registrados.</td>
                            </tr>
                        )}

                        {products.map((product) => (
                            <tr
                                key={product.id}
                                className="admin-inventory-row"
                                role="button"
                                tabIndex={0}
                                onClick={() => handleRowClick(product.id)}
                                onKeyDown={(event) => event.key === 'Enter' && handleRowClick(product.id)}
                            >
                                <td className="fw-semibold">
                                    <Link className="text-decoration-none text-dark" to={getProductPath(product.id)}>
                                        {product.nombre}
                                    </Link>
                                </td>
                                <td>{formatCurrency(product.precioUnitario)}</td>
                                <td>{product.activo ? 'En catálogo' : 'Inactivo'}</td>
                                <td>{product.unidadMedida}</td>
                                <td>{product.creadoEn ? new Date(product.creadoEn).toLocaleDateString('es-CO') : '-'}</td>
                                <td className="text-end">
                    <span
                        className={`badge rounded-pill ${product.activo ? 'bg-success' : 'bg-danger'}`}
                    >
                      {product.activo ? 'Disponible' : 'Inactivo'}
                    </span>
                                </td>
                                <td className="text-end">
                                    <button
                                        className="btn btn-sm btn-outline-danger rounded-3"
                                        type="button"
                                        onClick={(event) => handleDeleteClick(event, product.id)}
                                        disabled={deletingProductId === product.id}
                                    >
                                        {deletingProductId === product.id ? 'Desactivando...' : 'Desactivar'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="d-flex align-items-center justify-content-between mt-3 flex-wrap gap-2">
                    <button className="btn btn-outline-secondary rounded-3">Anterior</button>
                    <div className="text-muted small">Página 1 de 10</div>
                    <button className="btn btn-outline-success rounded-3">Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default AdminInventory;
