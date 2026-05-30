const users = [
    {
        name: 'Ana Morales',
        email: 'ana.morales@example.com',
        phone: '555-123-456',
        city: 'Bogotá',
        status: 'Activo',
    },
    {
        name: 'Carlos Pérez',
        email: 'carlos.perez@example.com',
        phone: '555-987-654',
        city: 'Medellín',
        status: 'Activo',
    },
    {
        name: 'María Gómez',
        email: 'maria.gomez@example.com',
        phone: '555-321-789',
        city: 'Cali',
        status: 'Suspendido',
    },
    {
        name: 'Luis Rodríguez',
        email: 'luis.rodriguez@example.com',
        phone: '555-654-321',
        city: 'Cartagena',
        status: 'Activo',
    },
    {
        name: 'Sofía Herrera',
        email: 'sofia.herrera@example.com',
        phone: '555-888-777',
        city: 'Barranquilla',
        status: 'Suspendido',
    },
    {
        name: 'Jorge Martínez',
        email: 'jorge.martinez@example.com',
        phone: '555-222-111',
        city: 'Manizales',
        status: 'Activo',
    },
    {
        name: 'Camila Rojas',
        email: 'camila.rojas@example.com',
        phone: '555-333-444',
        city: 'Pereira',
        status: 'Activo',
    },
    {
        name: 'Felipe Torres',
        email: 'felipe.torres@example.com',
        phone: '555-777-666',
        city: 'Bucaramanga',
        status: 'Suspendido',
    },
];

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

function AdminUsers() {
    return (
        <div className="card border-0 shadow-sm rounded-4 admin-suppliers-card">
            <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                    <div>
                        <p className="text-muted small mb-1">Panel de control</p>
                        <h4 className="mb-0">Usuarios</h4>
                        <p className="text-muted mb-0">Gestiona los usuarios registrados en la plataforma</p>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                        <div className="admin-supplier-search position-relative">
                            <input
                                className="form-control rounded-4 pe-5"
                                type="search"
                                placeholder="Buscar usuarios"
                                aria-label="Buscar usuarios"
                            />
                            <span className="text-muted admin-search-icon">🔍</span>
                        </div>
                        <button className="btn btn-outline-secondary rounded-3">Filtros</button>
                        <button className="btn btn-outline-secondary rounded-3">Descargar</button>
                        <button className="btn btn-success rounded-3">Añadir</button>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Celular</th>
                            <th>Ciudad</th>
                            <th className="text-end">Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={`${user.name}-${user.email}`} className="admin-supplier-row">
                                <td className="fw-semibold">{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.city}</td>
                                <td className="text-end">
                    <span className={`badge rounded-pill px-3 py-2 fw-semibold ${getStatusBadgeClass(user.status)}`}>
                      {user.status}
                    </span>
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
                    <div className="text-muted small">Mostrando {users.length} usuarios</div>
                    <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-outline-secondary rounded-3">Atrás</button>
                        <button className="btn btn-outline-success rounded-3">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminUsers;
