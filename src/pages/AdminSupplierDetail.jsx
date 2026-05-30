import {Link, useParams} from 'react-router-dom';

const defaultSupplierDetails = {
    name: 'Paolo Castelberto',
    document: '1256478956',
    phone: '768778565',
    email: 'richard@gmail.com',
    address: 'Cra 12 #34-56, Bogotá',
    category: 'Verduras frescas',
    joined: '12/02/2022',
    status: 'Activo',
    rating: 4.8,
    deliveryTime: '24-48 horas',
    orders: {
        open: 12,
        completed: 124,
        returns: 3,
    },
    performance: {
        onTime: '96%',
        avgDelivery: '1.3 días',
    },
    products: [
        {name: 'Tomates chonto', quantity: 1500, status: 'Activo'},
        {name: 'Lechuga romana', quantity: 950, status: 'Activo'},
        {name: 'Zanahoria', quantity: 650, status: 'Suspendido'},
    ],
    notes:
        'Proveedor confiable con entregas consistentes y buena calidad de empaque. Disponible para pedidos urgentes con 24 horas de anticipación.',
    image:
        'https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=crop&w=400&q=80',
};

const supplierTabs = ['Resumen', 'Pedidos', 'Ajustes', 'Historial', 'Productos'];

function getStatusBadgeClass(status) {
    switch (status) {
        case 'Activo':
            return 'bg-success-subtle text-success';
        case 'Suspendido':
            return 'bg-danger-subtle text-danger';
        default:
            return 'bg-secondary-subtle text-secondary';
    }
}

function formatSupplierName(supplierId) {
    if (!supplierId) return defaultSupplierDetails.name;

    const formatted = decodeURIComponent(supplierId).replace(/-/g, ' ');
    return formatted
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function AdminSupplierDetail() {
    const {supplierId} = useParams();

    const supplierDetails = {
        ...defaultSupplierDetails,
    };

    const displayName = formatSupplierName(supplierId);

    return (
        <div className="card border-0 shadow-sm rounded-4 admin-product-detail-card">
            <div className="card-body">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-4">
                    <div>
                        <p className="text-muted small mb-1">Proveedores</p>
                        <h4 className="mb-0">{displayName}</h4>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                        <button className="btn btn-outline-secondary rounded-3">Editar</button>
                        <button className="btn btn-outline-secondary rounded-3">Descargar</button>
                        <Link className="btn btn-light border rounded-3" to="/admin/suppliers">
                            Volver a proveedores
                        </Link>
                    </div>
                </div>

                <div className="d-flex flex-wrap align-items-center gap-2 admin-detail-tabs mb-4">
                    {supplierTabs.map((tab) => (
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
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6 className="mb-0">Información del proveedor</h6>
                                        <span
                                            className={`badge rounded-pill ${getStatusBadgeClass(supplierDetails.status)}`}>
                      {supplierDetails.status}
                    </span>
                                    </div>
                                    <div className="admin-detail-item">
                                        <span className="text-muted">Nombre</span>
                                        <span className="fw-semibold">{supplierDetails.name}</span>
                                    </div>
                                    <div className="admin-detail-item">
                                        <span className="text-muted">Documento</span>
                                        <span className="fw-semibold">{supplierDetails.document}</span>
                                    </div>
                                    <div className="admin-detail-item">
                                        <span className="text-muted">Correo</span>
                                        <span className="fw-semibold">{supplierDetails.email}</span>
                                    </div>
                                    <div className="admin-detail-item">
                                        <span className="text-muted">Teléfono</span>
                                        <span className="fw-semibold">{supplierDetails.phone}</span>
                                    </div>
                                    <div className="admin-detail-item">
                                        <span className="text-muted">Dirección</span>
                                        <span className="fw-semibold">{supplierDetails.address}</span>
                                    </div>
                                    <div className="admin-detail-item border-0 pb-0">
                                        <span className="text-muted">Categoría</span>
                                        <span className="fw-semibold">{supplierDetails.category}</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6 className="mb-0">Productos suministrados</h6>
                                        <span className="badge bg-success-subtle text-success rounded-pill">Pedidos activos</span>
                                    </div>
                                    <div className="d-grid gap-3">
                                        {supplierDetails.products.map((product) => (
                                            <div key={product.name}
                                                 className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0 fw-semibold">{product.name}</p>
                                                    <small className="text-muted">Cantidad
                                                        disponible: {product.quantity}</small>
                                                </div>
                                                <span
                                                    className={`badge rounded-pill ${
                                                        product.status === 'Activo'
                                                            ? 'bg-success-subtle text-success'
                                                            : 'bg-danger-subtle text-danger'
                                                    }`}
                                                >
                          {product.status}
                        </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card border-0 admin-detail-summary p-4 h-100">
                            <div className="d-flex justify-content-between align-items-start mb-4">
                                <div>
                                    <p className="mb-1 text-muted small">Proveedor</p>
                                    <h6 className="mb-0">Resumen</h6>
                                </div>
                                <span className={`badge rounded-pill ${getStatusBadgeClass(supplierDetails.status)}`}>
                  {supplierDetails.status}
                </span>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <div className="text-center">
                                    <p className="mb-0 fw-bold display-6">{supplierDetails.rating}</p>
                                    <small className="text-muted">Calificación</small>
                                </div>
                                <div className="text-center">
                                    <p className="mb-0 fw-bold display-6">{supplierDetails.orders.completed}</p>
                                    <small className="text-muted">Entregas</small>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-4">
                                <div className="text-center">
                                    <p className="mb-0 fw-bold h3">{supplierDetails.performance.onTime}</p>
                                    <small className="text-muted">A tiempo</small>
                                </div>
                                <div className="text-center">
                                    <p className="mb-0 fw-bold h3">{supplierDetails.performance.avgDelivery}</p>
                                    <small className="text-muted">Entrega prom.</small>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-4">
                                <div>
                                    <p className="mb-0 fw-semibold">Pedidos activos</p>
                                    <small className="text-muted">{supplierDetails.orders.open} en curso</small>
                                </div>
                                <div className="text-end">
                                    <p className="mb-0 fw-semibold">Devoluciones</p>
                                    <small className="text-muted">{supplierDetails.orders.returns} registradas</small>
                                </div>
                            </div>

                            <div className="text-center p-3 bg-white rounded-3 shadow-sm mb-3 admin-supplier-avatar">
                                <img src={supplierDetails.image} alt={displayName} className="img-fluid"/>
                            </div>

                            <div className="text-center">
                                <p className="mb-1 fw-semibold">Tiempo de entrega</p>
                                <small className="text-muted">{supplierDetails.deliveryTime}</small>
                                <p className="mb-0 text-muted small">Desde {supplierDetails.joined}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0 admin-detail-panel p-4 mt-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="mb-0">Notas</h6>
                        <button className="btn btn-link text-success text-decoration-none p-0">Agregar comentario
                        </button>
                    </div>
                    <p className="mb-0 text-muted">{supplierDetails.notes}</p>
                </div>
            </div>
        </div>
    );
}

export default AdminSupplierDetail;
