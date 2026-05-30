import {useNavigate} from 'react-router-dom';

const suppliers = [
    {
        name: 'Paolo Castelberto',
        document: '1256478956',
        phone: '768778565',
        email: 'richard@gmail.com',
        status: 'Activo'
    },
    {
        name: 'Carlo Castro', document: '1525478560', phone: '785458755', email: 'richard@gmail.com', status: 'Activo'
    },
    {
        name: 'Martha Rodriguez',
        document: '858523654',
        phone: '785458800',
        email: 'henrry12@gmail.com',
        status: 'Activo'
    },
    {
        name: 'Nelson Flores', document: '1256478956', phone: '768778565', email: 'richard@gmail.com', status: 'Activo'
    },
    {
        name: 'Miriam Arteaga', document: '1256478956', phone: '768778565', email: 'richard@gmail.com', status: 'Activo'
    },
    {
        name: 'Sergio Perez',
        document: '1256478956',
        phone: '768778565',
        email: 'richard@gmail.com',
        status: 'Suspendido'
    },
    {
        name: 'Diana Robles',
        document: '1256478956',
        phone: '768778565',
        email: 'richard@gmail.com',
        status: 'Suspendido'
    },
    {
        name: 'Julian Albarracin',
        document: '1256478956',
        phone: '768778565',
        email: 'richard@gmail.com',
        status: 'Suspendido'
    },
    {
        name: 'Carlos Nuñez',
        document: '1256478956',
        phone: '768778565',
        email: 'richard@gmail.com',
        status: 'Suspendido'
    },
    {
        name: 'Jason Martines', document: '1256478956', phone: '768778565', email: 'richard@gmail.com', status: 'Activo'
    },
    {
        name: 'Felipe Benavides',
        document: '1256478956',
        phone: '768778565',
        email: 'richard@gmail.com',
        status: 'Activo'
    },
    {
        name: 'Alex Castillo', document: '1256478956', phone: '768778565', email: 'richard@gmail.com', status: 'Activo'
    },
    {
        name: 'Keila Benavides',
        document: '1256478956',
        phone: '768778565',
        email: 'jeankel@gmail.com',
        status: 'Activo'
    },
    {
        name: 'Diana Alvarez',
        document: '1256478956',
        phone: '768778565',
        email: 'jeankel@gmail.com',
        status: 'Suspendido'
    },
];

function createSupplierSlug(name) {
    return encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'));
}

function getStatusBadgeClass(status) {
    switch (status) {
        case 'Activo':
            return 'bg-success-subtle text-success border border-success-subtle';
        case 'Suspendido':
            return 'bg-danger-subtle text-danger border border-danger-subtle';
        default:
            return 'bg-secondary-subtle text-secondary border border-secondary-subtle';
    }
}

function AdminSuppliers() {
    const navigate = useNavigate();

    const handleRowClick = (supplierName) => {
        navigate(`/admin/suppliers/${createSupplierSlug(supplierName)}`);
    };

    return (
        <div className="card border-0 shadow-sm rounded-4 admin-suppliers-card">
            <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                    <div>
                        <p className="text-muted small mb-1">Panel de control</p>
                        <h4 className="mb-0">Proveedores</h4>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                        <div className="admin-supplier-search position-relative">
                            <input
                                className="form-control rounded-4 pe-5"
                                type="search"
                                placeholder="Buscar productos, proveedores"
                                aria-label="Buscar proveedores"
                            />
                            <span className="text-muted admin-search-icon">🔍</span>
                        </div>
                        <button className="btn btn-outline-secondary rounded-3">Filtros</button>
                        <button className="btn btn-outline-secondary rounded-3">Descargar</button>
                        <button className="btn btn-success rounded-3" onClick={() => navigate('/admin/suppliers/new')}>
                            Añadir
                        </button>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                        <tr>
                            <th>Proveedor</th>
                            <th>CI</th>
                            <th>Celular</th>
                            <th>Correo</th>
                            <th className="text-end">Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                        {suppliers.map((supplier) => (
                            <tr
                                key={`${supplier.name}-${supplier.email}`}
                                className="admin-supplier-row"
                                role="button"
                                onClick={() => handleRowClick(supplier.name)}
                            >
                                <td className="fw-semibold">{supplier.name}</td>
                                <td>{supplier.document}</td>
                                <td>{supplier.phone}</td>
                                <td>{supplier.email}</td>
                                <td className="text-end">
                                    <div className="d-inline-flex align-items-center gap-2">
                      <span
                          className={`badge rounded-pill px-3 py-2 fw-semibold ${getStatusBadgeClass(supplier.status)}`}>
                        {supplier.status}
                      </span>
                                        <button
                                            className="btn btn-link text-muted text-decoration-none p-0"
                                            onClick={(event) => event.stopPropagation()}
                                        >
                                            ⋯
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="d-flex align-items-center justify-content-between mt-3 flex-wrap gap-2">
                    <div className="d-flex align-items-center gap-2">
                        <label className="text-muted small mb-0" htmlFor="rowsPerPage">
                            Filas por página
                        </label>
                        <select id="rowsPerPage" className="form-select form-select-sm w-auto">
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                    </div>
                    <div className="text-muted small">Página 1 de 10</div>
                    <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-outline-secondary rounded-3">Atrás</button>
                        <button className="btn btn-outline-success rounded-3">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminSuppliers;
