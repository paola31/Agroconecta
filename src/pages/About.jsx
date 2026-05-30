import { Link } from 'react-router-dom';
import forest from '../assets/forest.png';

const pillars = [
  {
    title: 'Conexión humana',
    description:
      'Diseñamos cada experiencia pensando en la confianza y la cercanía entre agricultores, aliados y compradores.',
    icon: '🤝',
  },
  {
    title: 'Tecnología accesible',
    description:
      'Priorizamos herramientas simples y claras para que cualquier persona, sin importar su experiencia digital, pueda usarlas.',
    icon: '💡',
  },
  {
    title: 'Impulso al territorio',
    description:
      'Celebramos el trabajo rural, generando oportunidades que respetan las tradiciones y protegen el entorno.',
    icon: '🌿',
  },
];

const highlights = [
  'Plataforma segura y confiable para productores y compradores.',
  'Acompañamiento humano que entiende los retos del campo.',
  'Historias de éxito que transforman comunidades rurales.',
];

function About() {
  return (
    <div className="about-page bg-light">
      <section className="about-hero position-relative overflow-hidden text-white py-5 py-lg-6">
        <div className="about-hero-overlay" />
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="text-uppercase small fw-semibold text-white-50 mb-2">Quiénes somos</p>
              <h1 className="display-5 fw-bold mb-3">AgroConecta</h1>
              <p className="lead mb-4 text-white">
                AgroConecta es una aplicación web creada para fortalecer la relación entre los pequeños productores
                agrícolas y los compradores, brindando un espacio digital seguro, confiable y fácil de usar.
              </p>
              <p className="lead text-white mb-4">
                A través de una interfaz intuitiva buscamos que cualquier usuario, sin importar su nivel de experiencia
                tecnológica, pueda interactuar con las distintas funcionalidades de la plataforma sin dificultad.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-success btn-lg px-4" to="/catalogo">
                  Explorar catálogo
                </Link>
                <Link className="btn btn-outline-light px-4" to="/register">
                  Unirme a la comunidad
                </Link>
              </div>
            </div>
            <div className="col-lg-5 ms-lg-auto">
              <div className="about-hero-card p-4 p-lg-5 bg-white text-dark rounded-4 shadow-lg">
                <p className="text-success fw-semibold mb-3">Nuestro propósito</p>
                <p className="mb-0">
                  Conectamos talento, tierra y tecnología para que el campo colombiano prospere. Cada interacción busca
                  reducir brechas, crear oportunidades y visibilizar historias que merecen ser contadas.
                </p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="badge bg-success-subtle text-success-emphasis px-3 py-2">Sostenibilidad</span>
                  <span className="badge bg-success-subtle text-success-emphasis px-3 py-2">Comunidad</span>
                  <span className="badge bg-success-subtle text-success-emphasis px-3 py-2">Confianza</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow about-image">
                <img
                  src={forest}
                  alt="Productores agrícolas trabajando en el campo"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="text-success fw-semibold text-uppercase small mb-2">Lo que nos inspira</p>
              <h2 className="display-6 fw-bold mb-3">El campo merece herramientas hechas a su medida</h2>
              <p className="text-muted lead mb-4">
                Creemos que la innovación debe sentirse cercana y humana. Por eso diseñamos experiencias que permiten
                comprar, vender y aprender con la misma facilidad con la que se tiende la mano a un vecino.
              </p>
              <ul className="list-unstyled d-grid gap-3 mb-4">
                {highlights.map((highlight) => (
                  <li className="d-flex align-items-start gap-3" key={highlight}>
                    <span className="about-check">✓</span>
                    <span className="text-muted">{highlight}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-0 text-muted">
                Nuestro equipo trabaja junto a comunidades rurales para entender sus retos y transformar esa
                experiencia en soluciones sencillas, confiables y sostenibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-success fw-semibold text-uppercase small mb-2">Nuestros pilares</p>
            <h2 className="display-6 fw-bold">Valores que guían cada cosecha digital</h2>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {pillars.map((pillar) => (
              <div className="col" key={pillar.title}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  <div className="about-icon d-inline-flex align-items-center justify-content-center rounded-circle mb-3">
                    <span aria-hidden="true" className="fs-3">{pillar.icon}</span>
                  </div>
                  <h3 className="h5 fw-semibold mb-2">{pillar.title}</h3>
                  <p className="text-muted mb-0">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6 position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="text-success fw-semibold text-uppercase small mb-2">Mirando al futuro</p>
              <h2 className="display-6 fw-bold mb-3">Queremos que cada productor sea protagonista de su historia</h2>
              <p className="text-muted lead mb-4">
                Trabajamos para que el conocimiento circule, los mercados sean más justos y las comunidades rurales
                tengan la tecnología que necesitan para crecer sin perder su esencia.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-success px-4" to="/login">
                  Iniciar sesión
                </Link>
                <Link className="btn btn-outline-success px-4" to="/proyectos">
                  Ver oportunidades
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-quote p-4 p-lg-5 rounded-4 shadow-lg bg-white">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="about-quote-icon" aria-hidden="true">“</span>
                  <h3 className="h6 text-success-emphasis mb-0">Testimonio de comunidad</h3>
                </div>
                <p className="mb-4 text-muted">
                  “AgroConecta nos abrió las puertas a nuevos clientes y a herramientas que no sabíamos que podíamos usar.
                  Hoy vendemos mejor y compartimos conocimiento con otros productores.”
                </p>
                <div>
                  <p className="fw-semibold mb-0">María Fernanda</p>
                  <p className="text-muted small mb-0">Productora de frutas en el Valle del Cauca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-pattern" aria-hidden="true" />
      </section>
    </div>
  );
}

export default About;
