import './form.css';

export default function RegisterForm() {
    return (
        <form className="formulario">
            <h2>Crear cuenta</h2>
            <label htmlFor="nombre">Nombre completo</label>
            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre completo" required/>

            <label htmlFor="correoRegistro">Correo electrónico</label>
            <input id="correoRegistro" name="correo" type="email" placeholder="tu-correo@ejemplo.com" required/>

            <label htmlFor="contrasenaRegistro">Contraseña</label>
            <input id="contrasenaRegistro" name="contrasena" type="password" placeholder="Crea una contraseña"
                   required/>

            <label htmlFor="confirmarContrasena">Confirmar contraseña</label>
            <input id="confirmarContrasena" name="confirmarContrasena" type="password"
                   placeholder="Repite la contraseña" required/>

            <button type="submit">Registrarme</button>
        </form>
    );
}
