import {Link, useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {deleteProducto, getProductoById, updateProducto} from '../services/productosApi';

const productTabs = ['Resumen', 'Ventas', 'Ajustes', 'Listados', 'Inventario', 'Historial'];

function formatCurrency(value) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0,
    }).format(Number(value || 0));
}

function AdminProductDetail() {
    const {productId} = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(null);
    const [editForm, setEditForm] = useState({
        nombre: '',
        descripcion: '',
        unidadMedida: '',
        precioUnitario: '',
        imagenUrl: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        let isMounted = true;

        getProductoById(productId)
            .then((data) => {
                if (isMounted) {
                    setProductDetails(data);
                    setEditForm({
                        nombre: data.nombre || '',
                        descripcion: data.descripcion || '',
                        unidadMedida: data.unidadMedida || '',
                        precioUnitario: data.precioUnitario || '',
                        imagenUrl: data.imagenUrl || '',
                    });
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
    }, [productId]);

    const handleDelete = async () => {
        setIsDeleting(true);
        setError('');

        try {
            await deleteProducto(productId);
            navigate('/admin/inventory');
        } catch (requestError) {
            setError(requestError.message);
        } finally {
            setIsDeleting(false);
        }
    };

    const handleEditInputChange = (event) => {
        const {name, value} = event.target;
        setEditForm((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        setIsSaving(true);
        setError('');

        try {
            const updatedProduct = await updateProducto(productId, {
                ...editForm,
                precioUnitario: Number(editForm.precioUnitario || 0),
            });

            setProductDetails(updatedProduct);
            setEditForm({
                nombre: updatedProduct.nombre || '',
                descripcion: updatedProduct.descripcion || '',
                unidadMedida: updatedProduct.unidadMedida || '',
                precioUnitario: updatedProduct.precioUnitario || '',
                imagenUrl: updatedProduct.imagenUrl || '',
            });
            setIsEditing(false);
        } catch (requestError) {
            setError(requestError.message);
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="card border-0 shadow-sm rounded-4 admin-product-detail-card">
                <div className="card-body">
                    <p className="text-muted mb-0">Cargando producto...</p>
                </div>
            </div>
        );
    }

    if (error && !productDetails) {
        return (
            <div className="card border-0 shadow-sm rounded-4 admin-product-detail-card">
                <div className="card-body">
                    <div className="alert alert-danger" role="alert">{error}</div>
                    <Link className="btn btn-light border rounded-3" to="/admin/inventory">
                        Volver al inventario
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="card border-0 shadow-sm rounded-4 admin-product-detail-card">
            <div className="card-body">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-4">
                    <div>
                        <p className="text-muted small mb-1">Inventario</p>
                        <h4 className="mb-0">{productDetails.nombre}</h4>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                        <button className="btn btn-outline-secondary rounded-3" type="button" onClick={() => setIsEditing((value) => !value)}>
                            {isEditing ? 'Cancelar edición' : 'Editar'}
                        </button>
                        <button className="btn btn-outline-danger rounded-3" type="button" onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ? 'Desactivando...' : 'Desactivar'}
                        </button>
                        <Link className="btn btn-light border rounded-3" to="/admin/inventory">
                            Volver al inventario
                        </Link>
                    </div>
                </div>

                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                <div className="d-flex flex-wrap align-items-center gap-2 admin-detail-tabs mb-4">
                    {productTabs.map((tab) => (
                        <span
                            key={tab}
                            className={`badge rounded-pill ${tab === 'Resumen' ? 'bg-success-subtle text-success' : 'bg-light text-muted'}`}
                        >
              {tab}
            </span>
                    ))}
                </div>

                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="card border-0 admin-detail-panel p-4 h-100">
                            {isEditing ? (
                                <form className="row g-3" onSubmit={handleUpdate}>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Nombre</label>
                                        <input
                                            className="form-control rounded-3"
                                            name="nombre"
                                            value={editForm.nombre}
                                            onChange={handleEditInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Unidad</label>
                                        <input
                                            className="form-control rounded-3"
                                            name="unidadMedida"
                                            value={editForm.unidadMedida}
                                            onChange={handleEditInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Precio</label>
                                        <input
                                            className="form-control rounded-3"
                                            name="precioUnitario"
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={editForm.precioUnitario}
                                            onChange={handleEditInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">URL imagen</label>
                                        <input
                                            className="form-control rounded-3"
                                            name="imagenUrl"
                                            value={editForm.imagenUrl}
                                            onChange={handleEditInputChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-semibold">Descripcion</label>
                                        <textarea
                                            className="form-control rounded-3"
                                            name="descripcion"
                                            rows="4"
                                            value={editForm.descripcion}
                                            onChange={handleEditInputChange}
                                        />
                                    </div>
                                    <div className="col-12 d-flex justify-content-end gap-2">
                                        <button className="btn btn-outline-secondary rounded-3" type="button" onClick={() => setIsEditing(false)}>
                                            Cancelar
                                        </button>
                                        <button className="btn btn-success rounded-3" type="submit" disabled={isSaving}>
                                            {isSaving ? 'Guardando...' : 'Guardar cambios'}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6 className="mb-0">Detalles</h6>
                                            <span className={`badge rounded-pill ${productDetails.activo ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                                            {productDetails.activo ? 'Activo' : 'Inactivo'}
                                        </span>
                                        </div>
                                        <div className="admin-detail-item">
                                            <span className="text-muted">ID</span>
                                            <span className="fw-semibold">{productDetails.id}</span>
                                        </div>
                                        <div className="admin-detail-item">
                                            <span className="text-muted">Nombre</span>
                                            <span className="fw-semibold">{productDetails.nombre}</span>
                                        </div>
                                        <div className="admin-detail-item">
                                            <span className="text-muted">Unidad</span>
                                            <span className="fw-semibold">{productDetails.unidadMedida}</span>
                                        </div>
                                        <div className="admin-detail-item">
                                            <span className="text-muted">Creado</span>
                                            <span className="fw-semibold">
                                            {productDetails.creadoEn ? new Date(productDetails.creadoEn).toLocaleDateString('es-CO') : '-'}
                                        </span>
                                        </div>
                                        <div className="admin-detail-item border-0 pb-0">
                                            <span className="text-muted">Precio</span>
                                            <span className="fw-semibold">{formatCurrency(productDetails.precioUnitario)}</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <h6 className="mb-3">Descripcion</h6>
                                        <p className="text-muted mb-0">
                                            {productDetails.descripcion || 'Sin descripcion registrada.'}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card border-0 admin-detail-summary p-4 h-100">
                            <div className="d-flex justify-content-between align-items-start mb-4">
                                <div>
                                    <p className="mb-1 text-muted small">Inventario</p>
                                    <h6 className="mb-0">Producto</h6>
                                </div>
                                <span className={`badge rounded-pill ${productDetails.activo ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                                    {productDetails.activo ? 'Disponible' : 'Inactivo'}
                                </span>
                            </div>

                            <div className="text-center p-3 bg-white rounded-3 shadow-sm admin-product-image">
                                <img
                                    src={productDetails.imagenUrl || 'https://images.unsplash.com/photo-1582281298055-e25b84a30bd6?auto=format&fit=crop&w=400&q=80'}
                                    alt={productDetails.nombre}
                                    className="img-fluid rounded-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProductDetail;
