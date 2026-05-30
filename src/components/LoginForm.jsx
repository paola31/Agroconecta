import './form.css';

export default function LoginForm() {
  return (
    <form className="formulario">
      <h2>Iniciar sesión</h2>
      <label htmlFor="correo">Correo electrónico</label>
      <input id="correo" name="correo" type="email" placeholder="tu-correo@ejemplo.com" required />

      <label htmlFor="contrasena">Contraseña</label>
      <input id="contrasena" name="contrasena" type="password" placeholder="Ingresa tu contraseña" required />

      <button type="submit">Ingresar</button>
    </form>
  );
}
