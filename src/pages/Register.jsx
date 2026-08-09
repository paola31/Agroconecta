import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {register} from '../services/authApi';
import {saveUserSession} from '../services/authSession';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        rol: 'cliente',
        password: '',
    });
    const [acceptsTerms, setAcceptsTerms] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((current) => ({...current, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!acceptsTerms) {
            setError('Debes aceptar los términos y condiciones.');
            return;
        }

        setIsSubmitting(true);
        try {
            const registeredUser = await register({
                ...formData,
                nombre: formData.nombre.trim(),
                email: formData.email.trim(),
                telefono: formData.telefono.trim(),
            });
            saveUserSession(registeredUser);
            navigate('/catalogo', {replace: true});
        } catch (registerError) {
            setError(registerError.message || 'No fue posible completar el registro.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="register-page py-5 py-lg-6">
            <div className="container">
                <div className="register-card row g-0 align-items-stretch shadow-lg rounded-4 overflow-hidden">
                    <div className="col-lg-7 bg-white p-4 p-lg-5 d-flex flex-column justify-content-center">
                        <div className="mb-4">
                            <p className="text-uppercase small fw-semibold text-success mb-2">Crea tu cuenta</p>
                            <h1 className="display-6 fw-bold mb-3">Registro</h1>
                            <p className="text-muted mb-0">Únete a Agroconecta como cliente o productor.</p>
                        </div>

                        <form className="d-grid gap-4" onSubmit={handleSubmit}>
                            {error && <div className="alert alert-danger mb-0" role="alert">{error}</div>}
                            <div>
                                <label className="form-label fw-semibold text-uppercase small text-muted" htmlFor="registerName">Nombre</label>
                                <input className="form-control form-control-lg rounded-3" type="text" id="registerName"
                                       name="nombre" placeholder="Ingresa tu nombre" value={formData.nombre}
                                       onChange={handleChange} maxLength="120" required/>
                            </div>
                            <div className="row g-3">
                                <div className="col-md-7">
                                    <label className="form-label fw-semibold text-uppercase small text-muted" htmlFor="registerEmail">Correo</label>
                                    <input className="form-control form-control-lg rounded-3" type="email" id="registerEmail"
                                           name="email" placeholder="Ingresa tu correo" value={formData.email}
                                           onChange={handleChange} required/>
                                </div>
                                <div className="col-md-5">
                                    <label className="form-label fw-semibold text-uppercase small text-muted" htmlFor="registerPhone">Teléfono</label>
                                    <input className="form-control form-control-lg rounded-3" type="tel" id="registerPhone"
                                           name="telefono" placeholder="300 123 4567" value={formData.telefono}
                                           onChange={handleChange} maxLength="30"/>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-uppercase small text-muted" htmlFor="registerRole">Tipo de usuario</label>
                                    <select className="form-select form-select-lg rounded-3" id="registerRole" name="rol"
                                            value={formData.rol} onChange={handleChange}>
                                        <option value="cliente">Cliente</option>
                                        <option value="campesino">Productor</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold text-uppercase small text-muted" htmlFor="registerPassword">Contraseña</label>
                                    <input className="form-control form-control-lg rounded-3" type="password"
                                           id="registerPassword" name="password" placeholder="Mínimo 6 caracteres"
                                           value={formData.password} onChange={handleChange} minLength="6" maxLength="80" required/>
                                </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="terms" checked={acceptsTerms}
                                       onChange={(event) => setAcceptsTerms(event.target.checked)}/>
                                <label className="form-check-label text-muted" htmlFor="terms">Acepto términos y condiciones</label>
                            </div>

                            <button className="btn btn-success btn-lg rounded-3 py-3" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Registrando...' : 'Registrarse'}
                            </button>
                        </form>

                        <p className="text-center text-muted mt-4 mb-0">
                            ¿Ya tienes una cuenta?{' '}
                            <Link className="text-success fw-semibold" to="/login">Inicia sesión</Link>
                        </p>
                    </div>

                    <div className="col-lg-5 register-illustration">
                        <div className="register-illustration-overlay"/>
                        <div className="register-illustration-content text-center text-white px-4 px-lg-5">
                            <p className="register-quote text-uppercase small fw-semibold mb-3 text-white">Conectamos campo y ciudad</p>
                            <h2 className="fw-bold mb-4 text-white">Cultiva alianzas que hacen crecer a tu comunidad</h2>
                            <p className="mb-0 text-white">Consulta productos y conecta con la comunidad de Agroconecta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
