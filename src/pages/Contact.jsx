import { Link } from 'react-router-dom';

const contactChannels = [
  {
    title: 'Escríbenos',
    description: 'Resolvemos tus dudas sobre productos, envíos y soporte.',
    icon: '✉️',
    badge: 'Correo',
    detail: 'agroconectaglobal@gmail.com',
  },
  {
    title: 'Llámanos',
    description: 'Atención directa para acompañarte en tus pedidos y entregas.',
    icon: '📞',
    badge: 'Teléfono',
    detail: '+57 310 878 1036',
  },
  {
    title: 'Visítanos',
    description: 'Agenda una cita presencial en nuestra sede en Sesquile.',
    icon: '📍',
    badge: 'Oficina',
    detail: 'Vereda San José, Sesquile',
  },
];

function Contact() {
  return (
    <div className="contact-page bg-light">
      <section className="contact-hero position-relative overflow-hidden text-white py-5 py-lg-6">
        <div className="contact-hero-overlay" />
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="text-uppercase small fw-semibold text-white-50 mb-2">Hablemos</p>
              <h1 className="display-5 fw-bold mb-3">Estamos listos para escucharte</h1>
              <p className="lead text-white-75 mb-4">
                Cuéntanos qué necesitas y nuestro equipo se pondrá en contacto para acompañarte. Queremos que cada
                productor y comprador se sienta acompañado en cada paso.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-success btn-lg px-4" href="#contacto-formulario">
                  Enviar un mensaje
                </a>
                <Link className="btn btn-outline-light px-4" to="/catalogo">
                  Explorar catálogo
                </Link>
              </div>
            </div>
            <div className="col-lg-4 ms-lg-auto">
              <div className="contact-hero-card p-4 p-lg-5 bg-white text-dark rounded-4 shadow-lg">
                <p className="text-success fw-semibold mb-2">Horarios de atención</p>
                <ul className="list-unstyled text-muted mb-4">
                  <li className="d-flex justify-content-between border-bottom py-2">
                    <span>Lunes a viernes</span>
                    <span className="fw-semibold text-dark">8:00 a.m. - 6:00 p.m.</span>
                  </li>
                  <li className="d-flex justify-content-between py-2">
                    <span>Sábados</span>
                    <span className="fw-semibold text-dark">9:00 a.m. - 1:00 p.m.</span>
                  </li>
                </ul>
                <div className="d-flex align-items-start gap-3">
                  <span className="contact-hero-icon" aria-hidden="true">💬</span>
                  <div>
                    <p className="fw-semibold mb-1">Respuestas en menos de 24 horas</p>
                    <p className="text-muted mb-0">Nuestro equipo acompaña cada solicitud con soluciones claras.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <p className="text-success fw-semibold text-uppercase small mb-2">Canales de contacto</p>
              <h2 className="display-6 fw-bold mb-3">Estamos cerca, en línea y en territorio</h2>
              <p className="text-muted lead mb-4">
                Elige el canal que prefieras. Nuestro equipo de soporte humano te guiará para resolver tus necesidades de
                compra, venta o acompañamiento logístico.
              </p>
              <div className="d-flex align-items-center gap-3">
                <div className="contact-badge">Tiempo de respuesta promedio: 4 horas</div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row row-cols-1 row-cols-md-3 g-3 g-lg-4">
                {contactChannels.map((channel) => (
                  <div className="col" key={channel.title}>
                    <div className="card h-100 border-0 shadow-sm rounded-4 p-3 p-lg-4 contact-channel">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="contact-icon" aria-hidden="true">
                          {channel.icon}
                        </span>
                        <span className="badge bg-success-subtle text-success-emphasis">{channel.badge}</span>
                      </div>
                      <h3 className="h6 fw-semibold mb-1">{channel.title}</h3>
                      <p className="text-muted small mb-2">{channel.description}</p>
                      <p className="fw-semibold text-success mb-0">{channel.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto-formulario" className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <div className="mb-4">
                <p className="text-success fw-semibold text-uppercase small mb-2">Formulario</p>
                <h2 className="display-6 fw-bold mb-3">Cuéntanos en qué podemos ayudarte</h2>
                <p className="text-muted mb-4">
                  Responde estos datos básicos para ayudarte rápidamente. Protegemos tu información y solo la usamos para
                  acompañarte en tu solicitud.
                </p>
                <ul className="list-unstyled d-grid gap-3 mb-0">
                  <li className="d-flex align-items-start gap-3">
                    <span className="contact-check">✓</span>
                    <div>
                      <p className="fw-semibold mb-1">Soporte humano</p>
                      <p className="text-muted mb-0">Nuestros asesores te contactan personalmente con pasos claros.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <span className="contact-check">✓</span>
                    <div>
                      <p className="fw-semibold mb-1">Seguimiento</p>
                      <p className="text-muted mb-0">Recibe actualizaciones de tu caso por correo o teléfono.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <span className="contact-check">✓</span>
                    <div>
                      <p className="fw-semibold mb-1">Respuestas claras</p>
                      <p className="text-muted mb-0">Simplificamos la información para que tomes decisiones seguras.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4 p-lg-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="contact-form-icon" aria-hidden="true">📨</span>
                    <div>
                      <p className="text-success fw-semibold text-uppercase small mb-1">Formulario de contacto</p>
                      <h3 className="h5 fw-bold mb-0">Responderemos en menos de 24 horas hábiles</h3>
                    </div>
                  </div>
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-muted" htmlFor="contact-nombre">
                        Nombre completo
                      </label>
                      <input className="form-control contact-input" id="contact-nombre" name="nombre" type="text" placeholder="Escribe tu nombre" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-muted" htmlFor="contact-telefono">
                        Teléfono
                      </label>
                      <input
                        className="form-control contact-input"
                        id="contact-telefono"
                        name="telefono"
                        type="tel"
                        placeholder="Número de contacto"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-muted" htmlFor="contact-email">
                        Correo electrónico
                      </label>
                      <input
                        className="form-control contact-input"
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-muted" htmlFor="contact-asunto">
                        Asunto
                      </label>
                      <input
                        className="form-control contact-input"
                        id="contact-asunto"
                        name="asunto"
                        type="text"
                        placeholder="¿Sobre qué quieres hablar?"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold text-muted" htmlFor="contact-mensaje">
                        Mensaje
                      </label>
                      <textarea
                        className="form-control contact-input"
                        id="contact-mensaje"
                        name="mensaje"
                        rows="4"
                        placeholder="Cuéntanos tu necesidad o idea"
                      />
                    </div>
                    <div className="col-12 d-flex align-items-center gap-3">
                      <input className="form-check-input contact-check-input" id="contact-terminos" type="checkbox" />
                      <label className="form-check-label text-muted" htmlFor="contact-terminos">
                        Acepto el tratamiento de datos para recibir respuesta a mi solicitud.
                      </label>
                    </div>
                    <div className="col-12 d-grid d-sm-flex justify-content-sm-end mt-2">
                      <button className="btn btn-success px-4 py-2" type="submit">Enviar mensaje</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
