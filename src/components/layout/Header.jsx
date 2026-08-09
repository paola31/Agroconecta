import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import {clearUserSession, getUserSession, USER_SESSION_EVENT} from '../../services/authSession';

const navigationItems = [
    {label: 'Inicio', to: '/'},
    {label: 'Nosotros', to: '/nosotros'},
    {label: 'Proyectos', to: '/proyectos'},
    {label: 'Catálogo', to: '/catalogo'},
    {label: 'Contacto', to: '/contacto'},
];

function Header() {
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);
    const [userSession, setUserSession] = useState(() => getUserSession());

    useEffect(() => {
        const updateCartCount = () => {
            const savedItems = window.localStorage.getItem('agroconecta-cart');
            const items = savedItems ? JSON.parse(savedItems) : [];
            setCartCount(items.reduce((total, item) => total + item.quantity, 0));
        };

        updateCartCount();
        window.addEventListener('agroconecta-cart-updated', updateCartCount);
        window.addEventListener('storage', updateCartCount);

        return () => {
            window.removeEventListener('agroconecta-cart-updated', updateCartCount);
            window.removeEventListener('storage', updateCartCount);
        };
    }, []);

    useEffect(() => {
        const updateUserSession = () => setUserSession(getUserSession());
        window.addEventListener(USER_SESSION_EVENT, updateUserSession);
        window.addEventListener('storage', updateUserSession);

        return () => {
            window.removeEventListener(USER_SESSION_EVENT, updateUserSession);
            window.removeEventListener('storage', updateUserSession);
        };
    }, []);

    const handleLogout = () => {
        clearUserSession();
        setUserSession(null);
        navigate('/');
    };

    return (
        <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-3" to="/" aria-label="Agroconecta">
                    <img className="site-logo" src={logo} alt="Logotipo de Agroconecta"/>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
                        {navigationItems.map((item) => (
                            <li className="nav-item" key={item.label}>
                                {item.to ? (
                                    <Link className="nav-link" to={item.to}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <a className="nav-link" href={item.href}>
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                        <li className="nav-item d-flex align-items-center mt-3 mt-lg-0">
                            <Link className="btn btn-outline-success position-relative" to="/carrito"
                                  aria-label="Ver carrito">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-cart2"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7z"/>
                                    <path d="M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                                </svg>
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
                            </Link>
                        </li>
                        {userSession ? (
                            <>
                                <li className="nav-item d-flex align-items-center mt-3 mt-lg-0">
                                    <span className="text-success fw-semibold">Hola, {userSession.nombre?.split(' ')[0]}</span>
                                </li>
                                <li className="nav-item d-flex align-items-center mt-3 mt-lg-0">
                                    <button className="btn btn-outline-success px-3" type="button" onClick={handleLogout}>
                                        Cerrar sesión
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item d-flex align-items-center mt-3 mt-lg-0">
                                <Link className="btn btn-success px-4" to="/login">
                                    Iniciar sesión
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
