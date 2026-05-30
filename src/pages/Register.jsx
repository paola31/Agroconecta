import {Link} from 'react-router-dom';

function Register() {
    return (
        <section className="register-page py-5 py-lg-6">
            <div className="container">
                <div className="register-card row g-0 align-items-stretch shadow-lg rounded-4 overflow-hidden">
                    <div className="col-lg-7 bg-white p-4 p-lg-5 d-flex flex-column justify-content-center">
                        <div className="mb-4">
                            <p className="text-uppercase small fw-semibold text-success mb-2">Crea tu cuenta</p>
                            <h1 className="display-6 fw-bold mb-3">Registro</h1>
                            <p className="text-muted mb-0">
                                Únete a Agroconecta para gestionar tus productos, conectar con compradores y potenciar
                                tu presencia
                                en la ciudad.
                            </p>
                        </div>

                        <form className="d-grid gap-4">
                            <div>
                                <label className="form-label fw-semibold text-uppercase small text-muted"
                                       htmlFor="registerName">
                                    Nombre
                                </label>
                                <input
                                    className="form-control form-control-lg rounded-3"
                                    type="text"
                                    id="registerName"
                                    placeholder="Ingresa tu nombre"
                                />
                            </div>

                            <div>
                                <label className="form-label fw-semibold text-uppercase small text-muted"
                                       htmlFor="registerEmail">
                                    Correo
                                </label>
                                <input
                                    className="form-control form-control-lg rounded-3"
                                    type="email"
                                    id="registerEmail"
                                    placeholder="Ingresa tu correo"
                                />
                            </div>

                            <div>
                                <label
                                    className="form-label fw-semibold text-uppercase small text-muted"
                                    htmlFor="registerPassword"
                                >
                                    Contraseña
                                </label>
                                <input
                                    className="form-control form-control-lg rounded-3"
                                    type="password"
                                    id="registerPassword"
                                    placeholder="Ingresa tu contraseña"
                                />
                            </div>

                            <div className="register-options">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="terms"/>
                                    <label className="form-check-label text-muted" htmlFor="terms">
                                        Acepto términos y condiciones
                                    </label>
                                </div>
                                <div className="d-flex flex-column flex-sm-row gap-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="buyers"/>
                                        <label className="form-check-label text-muted" htmlFor="buyers">
                                            ¿Quiénes compran?
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="sellers"/>
                                        <label className="form-check-label text-muted" htmlFor="sellers">
                                            ¿Quiénes venden?
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-success btn-lg rounded-3 py-3" type="submit">
                                Registrarse
                            </button>

                            <button
                                className="btn btn-outline-secondary btn-lg rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 register-google"
                                type="button"
                            >
                <span aria-hidden="true" className="register-google-badge">
                  G
                </span>
                                Registrarme con Google
                            </button>
                        </form>

                        <p className="text-center text-muted mt-4 mb-0">
                            ¿Ya tienes una cuenta?{' '}
                            <Link className="text-success fw-semibold" to="/login">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>

                    <div className="col-lg-5 register-illustration">
                        <div className="register-illustration-overlay"/>
                        <div className="register-illustration-content text-center text-white px-4 px-lg-5">
                            <p className="register-quote text-uppercase small fw-semibold mb-3 text-white">Conectamos
                                campo y ciudad</p>
                            <h2 className="fw-bold mb-4 text-white">Cultiva alianzas que hacen crecer a tu
                                comunidad</h2>
                            <p className="mb-0 text-white">
                                Agrega tus productos, recibe pedidos y comparte la trazabilidad de tus cultivos con
                                clientes
                                comprometidos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
