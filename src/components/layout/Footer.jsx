import logo from '../../assets/logo.svg';

const exploreLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proyectos', href: '/#proyectos-destacados' },
  { label: 'Sobre nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

const collaboratorLinks = [
  { label: 'Publica tu proyecto', href: '/#proyectos-destacados' },
  { label: 'Atiende tu territorio', href: '/#directorio' },
  { label: 'Regístrate como proveedor', href: '/register' },
  { label: 'Únete como colaborador', href: '/register' },
];

const socialLinks = [
  { label: 'Facebook', href: '#', initials: 'Fb' },
  { label: 'Twitter', href: '#', initials: 'Tw' },
  { label: 'Instagram', href: '#', initials: 'Ig' },
  { label: 'YouTube', href: '#', initials: 'Yt' },
];

const contactDetails = [
  { label: '+57 310 878 1036', icon: 'phone' },
  { label: 'agroconectaglobal@gmail.com', icon: 'mail' },
  { label: 'Vereda San José\nSesquile, Cundinamarca', icon: 'map' },
];

function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="container py-5">
        <div className="row gy-5">
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img className="footer-logo" src={logo} alt="Logo de Agroconecta" />
              <div>
                <h5 className="mb-0 fw-semibold text-uppercase text-success-emphasis">Agroconecta</h5>
                <p className="footer-subtitle mb-0">Conectamos campo y ciudad</p>
              </div>
            </div>
            <p className="footer-text pe-lg-4">
              Conectamos a comunidades rurales con ciudades para impulsar la innovación,
              la sostenibilidad y la cooperación.
            </p>
            <ul className="footer-social list-inline d-flex flex-wrap align-items-center gap-2 mb-0">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a className="footer-social-link" href={social.href} aria-label={social.label}>
                    <span>{social.initials}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="footer-title">Explorar</h6>
            <ul className="footer-list list-unstyled">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <span className="footer-bullet" aria-hidden="true">
                    &rsaquo;
                  </span>
                  <a className="footer-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <h6 className="footer-title">Únete como colaborador</h6>
            <ul className="footer-list list-unstyled">
              {collaboratorLinks.map((link) => (
                <li key={link.label}>
                  <span className="footer-bullet" aria-hidden="true">
                    &rsaquo;
                  </span>
                  <a className="footer-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-4 col-lg-3 ms-lg-auto">
            <h6 className="footer-title">Contacto</h6>
            <ul className="footer-contact list-unstyled mb-4">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <span className={`footer-icon footer-icon-${detail.icon}`} aria-hidden="true" />
                  <span dangerouslySetInnerHTML={{ __html: detail.label.replace('\n', '<br />') }} />
                </li>
              ))}
            </ul>
            <form className="footer-form">
              <label className="form-label text-white-50 small" htmlFor="newsletter-email">
                Dirección de correo
              </label>
              <div className="input-group">
                <input
                  id="newsletter-email"
                  className="form-control footer-input"
                  type="email"
                  placeholder="Ingresa tu correo"
                  aria-label="Ingresa tu correo"
                />
                <button className="btn btn-success footer-btn" type="submit">
                  Unirme
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row align-items-center gy-2">
            <div className="col-12 col-lg-6">
              <p className="footer-bottom-text mb-0">
                © {new Date().getFullYear()} Agroconecta — Desarrollado por Paola Caballero
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <p className="footer-bottom-meta mb-0 text-lg-end">
                Impulsando el desarrollo rural sostenible de Colombia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
