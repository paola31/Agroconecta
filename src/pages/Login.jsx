import {Link} from 'react-router-dom';

function Login() {
    return (
        <section className="login-page py-5 py-lg-6">
            <div className="container">
                <div className="row g-0 align-items-stretch shadow-lg rounded-4 overflow-hidden login-card">
                    <div className="col-lg-6 bg-white p-4 p-lg-5 d-flex flex-column justify-content-center">
                        <div className="mb-4">
                            <p className="text-uppercase small fw-semibold text-success mb-2">Bienvenido de vuelta</p>
                            <h1 className="display-6 fw-bold mb-3">Inicio de sesión</h1>
                            <p className="text-muted mb-0">
                                Ingresa tus credenciales para acceder a la plataforma y continuar conectando el campo
                                con la
                                ciudad.
                            </p>
                        </div>

                        <form className="d-grid gap-4">
                            <div>
                                <label className="form-label fw-semibold text-uppercase small text-muted"
                                       htmlFor="loginEmail">
                                    Correo
                                </label>
                                <input
                                    className="form-control form-control-lg rounded-3"
                                    type="email"
                                    id="loginEmail"
                                    placeholder="Ingresa tu correo"
                                />
                            </div>

                            <div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <label
                                        className="form-label fw-semibold text-uppercase small text-muted mb-0"
                                        htmlFor="loginPassword"
                                    >
                                        Contraseña
                                    </label>
                                    <a className="text-success fw-semibold small" href="#">
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </div>
                                <input
                                    className="form-control form-control-lg rounded-3"
                                    type="password"
                                    id="loginPassword"
                                    placeholder="Ingresa tu contraseña"
                                />
                            </div>

                            <button className="btn btn-success btn-lg rounded-3 py-3" type="submit">
                                Iniciar sesión
                            </button>

                            <button
                                className="btn btn-outline-secondary btn-lg rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 login-google"
                                type="button"
                            >
                <span aria-hidden="true" className="login-google-badge">
                  G
                </span>
                                Ingreso con Google
                            </button>
                        </form>

                        <p className="text-center text-muted mt-4 mb-0">
                            ¿No tienes una cuenta?{' '}
                            <Link className="text-success fw-semibold" to="/register">
                                Regístrate aquí
                            </Link>
                        </p>
                    </div>

                    <div className="col-lg-6 login-illustration">
                        <img
                            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                            alt="Agricultora sosteniendo plantas frescas"
                            className="img-fluid h-100 w-100 object-fit-cover"
                        />
                        <div className="login-illustration-overlay"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
