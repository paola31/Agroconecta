import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {login} from '../services/authApi';
import {getUserSession, saveAdminSession, saveUserSession} from '../services/authSession';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (getUserSession()) {
            navigate('/catalogo', {replace: true});
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const authenticatedUser = await login(email.trim(), password);

            if (authenticatedUser.rol === 'admin') {
                saveAdminSession(authenticatedUser);
                navigate('/admin/dashboard', {replace: true});
                return;
            }

            saveUserSession(authenticatedUser);
            navigate('/catalogo', {replace: true});
        } catch (loginError) {
            setError(loginError.message || 'No fue posible iniciar sesión.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="login-page py-5 py-lg-6">
            <div className="container">
                <div className="row g-0 align-items-stretch shadow-lg rounded-4 overflow-hidden login-card">
                    <div className="col-lg-6 bg-white p-4 p-lg-5 d-flex flex-column justify-content-center">
                        <div className="mb-4">
                            <p className="text-uppercase small fw-semibold text-success mb-2">Bienvenido de vuelta</p>
                            <h1 className="display-6 fw-bold mb-3">Inicio de sesión</h1>
                            <p className="text-muted mb-0">
                                Ingresa tus credenciales para acceder a la plataforma y continuar conectando el campo con la ciudad.
                            </p>
                        </div>

                        <form className="d-grid gap-4" onSubmit={handleSubmit}>
                            {error && <div className="alert alert-danger mb-0" role="alert">{error}</div>}
                            <div>
                                <label className="form-label fw-semibold text-uppercase small text-muted" htmlFor="loginEmail">
                                    Correo
                                </label>
                                <input className="form-control form-control-lg rounded-3" type="email" id="loginEmail"
                                       placeholder="Ingresa tu correo" value={email}
                                       onChange={(event) => setEmail(event.target.value)} required/>
                            </div>

                            <div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <label className="form-label fw-semibold text-uppercase small text-muted mb-0"
                                           htmlFor="loginPassword">Contraseña</label>
                                    <a className="text-success fw-semibold small" href="#">¿Olvidaste tu contraseña?</a>
                                </div>
                                <input className="form-control form-control-lg rounded-3" type="password"
                                       id="loginPassword" placeholder="Ingresa tu contraseña" value={password}
                                       onChange={(event) => setPassword(event.target.value)} required/>
                            </div>

                            <button className="btn btn-success btn-lg rounded-3 py-3" type="submit"
                                    disabled={isSubmitting}>
                                {isSubmitting ? 'Validando...' : 'Iniciar sesión'}
                            </button>

                            <button className="btn btn-outline-secondary btn-lg rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 login-google"
                                    type="button" disabled>
                                <span aria-hidden="true" className="login-google-badge">G</span>
                                Ingreso con Google (próximamente)
                            </button>
                        </form>

                        <p className="text-center text-muted mt-4 mb-0">
                            ¿No tienes una cuenta?{' '}
                            <Link className="text-success fw-semibold" to="/register">Regístrate aquí</Link>
                        </p>
                    </div>

                    <div className="col-lg-6 login-illustration">
                        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                             alt="Agricultora sosteniendo plantas frescas"
                             className="img-fluid h-100 w-100 object-fit-cover"/>
                        <div className="login-illustration-overlay"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
