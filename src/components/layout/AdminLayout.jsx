import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {clearAdminSession, getAdminSession} from '../../services/authSession';

const adminNavLinks = [
    {label: 'Panel', to: '/admin/dashboard'},
    {label: 'Inventario', to: '/admin/inventory'},
    {label: 'Proveedores', to: '/admin/suppliers'},
    {label: 'Ordenes', to: '/admin/orders'},
    {label: 'Reportes', to: '/admin/reports'},
    {label: 'Usuarios', to: '/admin/users'},
];

function AdminLayout() {
    const navigate = useNavigate();
    const adminSession = getAdminSession();
    const adminInitials = adminSession?.nombre
        ?.split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase() || 'AD';

    const handleLogout = () => {
        clearAdminSession();
        navigate('/admin/login', {replace: true});
    };

    return (
        <div className="admin-dashboard d-flex">
            <aside className="admin-sidebar d-none d-lg-flex flex-column p-4 shadow-sm">
                <div className="d-flex align-items-center gap-3 mb-5">
                    <div className="admin-logo-circle">A</div>
                    <div>
                        <p className="fw-bold mb-0">AGRO CONECTA</p>
                        <small className="text-success fw-semibold">Comercio agro de ciudad</small>
                    </div>
                </div>

                <nav className="nav flex-column gap-2">
                    {adminNavLinks.map(({label, to}) => (
                        <NavLink
                            key={label}
                            to={to}
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className="mt-auto pt-4 d-grid gap-3">
                    <a className="nav-link" href="#">Configuración</a>
                    <button className="btn btn-outline-danger rounded-3" type="button" onClick={handleLogout}>
                        Salir
                    </button>
                </div>
            </aside>

            <main className="admin-content flex-grow-1 p-3 p-md-4">
                <header className="d-flex align-items-center gap-3 flex-wrap mb-4">
                    <button className="btn btn-outline-secondary d-lg-none">Menú</button>
                    <div className="flex-grow-1">
                        <input className="form-control rounded-4 admin-search"
                               placeholder="Buscar productos, proveedores"/>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <button className="btn btn-link text-muted" aria-label="Notificaciones">
                            <span className="admin-icon-circle">🔔</span>
                        </button>
                        <div className="d-flex align-items-center gap-2">
                            <div className="admin-avatar">{adminInitials}</div>
                            <div>
                                <p className="mb-0 fw-semibold">{adminSession?.nombre || 'Administrador'}</p>
                                <small className="text-muted">Administrador</small>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="admin-page-wrapper">
                    <Outlet/>
                </div>
            </main>
        </div>
    );
}

export default AdminLayout;
