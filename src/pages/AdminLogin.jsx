import {useNavigate} from 'react-router-dom';
import logo from '../assets/logo.svg';

function AdminLogin() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/admin/dashboard');
    };

    return (
        <section className="admin-login py-5 min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <div className="row g-0 shadow-lg rounded-4 overflow-hidden admin-login-card bg-white">
                            <div
                                className="col-lg-6 d-flex align-items-center justify-content-center admin-login-brand p-4 p-lg-5">
                                <div className="text-center w-100">
                                    <div className="admin-logo-wrapper mb-4 mx-auto">
                                        <img className="img-fluid" src={logo} alt="Logotipo de Agroconecta"/>
                                    </div>
                                    <h2 className="fw-bold text-success mb-2">Agroconecta</h2>
                                    <p className="text-muted mb-0">Conectamos campo y ciudad</p>
                                </div>
                            </div>

                            <div className="col-lg-6 p-4 p-lg-5 bg-white admin-login-form">
                                <p className="text-success fw-semibold text-uppercase small mb-2">Panel
                                    administrativo</p>
                                <h1 className="h3 fw-bold mb-2">Iniciar sesión</h1>
                                <p className="text-muted mb-4">Nuestros proyectos destacados</p>

                                <form className="d-grid gap-3" onSubmit={handleSubmit}>
                                    <div className="form-floating">
                                        <input className="form-control" type="email" id="adminEmail"
                                               placeholder="Correo"/>
                                        <label className="text-muted" htmlFor="adminEmail">
                                            Email
                                        </label>
                                    </div>

                                    <div className="form-floating">
                                        <input className="form-control" type="password" id="adminPassword"
                                               placeholder="Contraseña"/>
                                        <label className="text-muted" htmlFor="adminPassword">
                                            Password
                                        </label>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="checkbox" id="adminRemember"/>
                                            <label className="form-check-label" htmlFor="adminRemember">
                                                Recordar mis datos
                                            </label>
                                        </div>
                                        <a className="small text-success fw-semibold" href="#">
                                            Recuperar contraseña
                                        </a>
                                    </div>

                                    <button className="btn btn-success btn-lg w-100 rounded-3" type="submit">
                                        Iniciar sesión
                                    </button>

                                    <button
                                        className="btn btn-outline-secondary btn-lg w-100 rounded-3 d-flex align-items-center justify-content-center gap-2 admin-google-button"
                                        type="button"
                                    >
                    <span className="admin-google-icon" aria-hidden="true">
                      <svg viewBox="0 0 48 48" role="presentation">
                        <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6 1.54 7.38 2.83l5.39-5.39C33.64 3.24 29.22 1 24 1 14.91 1 7.19 6.12 3.69 13.26l6.39 4.96C11.35 12.09 17.13 9.5 24 9.5z"
                        />
                        <path
                            fill="#4285F4"
                            d="m46.5 24.5c0-1.64-.16-3.21-.45-4.74H24v9h12.7c-.55 2.97-2.19 5.49-4.66 7.18l7.52 5.83C43.78 37.17 46.5 31.33 46.5 24.5z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M10.08 28.22a14.48 14.48 0 0 1-.76-4.72c0-1.64.27-3.22.76-4.72l-6.39-4.96C1.92 16.25 1 20.02 1 23.5s.92 7.25 2.69 10.68z"
                        />
                        <path
                            fill="#34A853"
                            d="M24 46c5.22 0 9.64-1.72 12.85-4.69l-7.52-5.83c-2.1 1.41-4.78 2.22-7.33 2.22-5.65 0-10.45-3.81-12.17-9.1l-6.39 4.96C7.19 41.88 14.91 47 24 47z"
                        />
                        <path fill="none" d="M1 1h46v46H1z"/>
                      </svg>
                    </span>
                                        Iniciar sesión con Google
                                    </button>
                                </form>

                                <p className="text-center text-muted small mt-4 mb-0">
                                    Acceso exclusivo para administradores. Ingresa directamente escribiendo
                                    {' '}<strong>/admin</strong> en tu navegador.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminLogin;
