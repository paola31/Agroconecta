import {Link} from 'react-router-dom';
import harvestImage from '../assets/harvest.png';
import harvestManual from '../assets/harvestManual.png';
import manzano from '../assets/manzano.png';
import frutas from '../assets/frutas.png';
import plantula from '../assets/plantula.jpg';
import grapes from '../assets/grapes.png';
import trigo from '../assets/trigo.png';
import tractor from '../assets/tractor.png';
import crop from '../assets/crop.png';
import seeds from '../assets/seeds.png';
import aerea from '../assets/aerea.png';

const featureCards = [
    {
        title: 'Explorar nuestros productos',
        description: 'Descubre una variedad de soluciones tecnológicas diseñadas para el campo colombiano.',
    },
    {
        title: 'Vender tus productos',
        description: 'Conecta con productores y compradores para impulsar tus oportunidades comerciales.',
    },
    {
        title: 'Innovar en los sistemas agrícolas',
        description: 'Implementa herramientas digitales que optimizan la producción y cuidan del medio ambiente.',
    },
];

const missionHighlights = [
    'Facilitamos la venta directa sin intermediarios.',
    'Impulsamos proyectos verdes y colaborativos.',
    'Asesoramos a los agricultores en prácticas sostenibles.',
];

const serviceCards = [
    {
        title: 'Productos agrícolas',
        description: 'Conectamos productores con consumidores para garantizar alimentos frescos y confiables.',
        icon: '🌽',
        image: manzano,
    },
    {
        title: 'Productos orgánicos',
        description: 'Apoyamos procesos orgánicos que promueven el bienestar de las comunidades rurales.',
        icon: '🥬',
        image: frutas,
    },
    {
        title: 'Verduras frescas',
        description: 'Ofrecemos verduras cultivadas con prácticas responsables y tecnología de precisión.',
        icon: '🥕',
        image: plantula,
    },
    {
        title: 'Productos veganos',
        description: 'Impulsamos alternativas de origen vegetal que diversifican la oferta alimentaria.',
        icon: '🥑',
        image: grapes,
    },
];

const projectFilters = [
    'Arquitectura sostenible',
    'Agricultura urbana',
    'Proyectos',
    'Clientes satisfechos',
];

const highlightedProjects = [
    {
        title: 'Arquitectura sostenible',
        location: 'Boyacá, Colombia',
        description: 'Diseños bioclimáticos que aprovechan recursos naturales y reducen la huella ambiental.',
        imageAlt: 'Proyecto de arquitectura sostenible en el campo',
        image: trigo
    },
    {
        title: 'Red agrícola de la Sabana',
        location: 'Sabana de Bogotá, Colombia',
        description: 'Tecnología colaborativa para agricultores que comparten recursos y conocimiento.',
        imageAlt: 'Maquinaria agrícola trabajando en cultivos',
        image: tractor
    },
    {
        title: 'Huertas sostenibles en Sesquilé',
        location: 'Sesquilé, Colombia',
        description: 'Huertas urbanas con sistemas de riego eficientes y monitoreo en tiempo real.',
        imageAlt: 'Huerta urbana con cultivos sostenibles',
        image: crop
    },
    {
        title: 'Bogotá consumo local',
        location: 'Bogotá, Colombia',
        description: 'Red de consumidores y productores que dinamiza la economía local y reduce intermediarios.',
        imageAlt: 'Panorámica de productos agrícolas listos para mercado local',
        image: seeds
    },
];

const directoryBenefits = [
    {
        title: 'Arriendo de tierras',
        description: 'Explora parcelas y terrenos disponibles para proyectos productivos y colaborativos.',
    },
    {
        title: 'Servicios agrícolas',
        description: 'Obtén asesoría técnica, maquinaria y talento especializado para tu operación agrícola.',
    },
    {
        title: 'Inversiones verdes',
        description: 'Conecta con iniciativas sostenibles que impulsan la innovación y el impacto social.',
    },
];

function Home() {
    return (
        <>
            <section className="hero position-relative overflow-hidden">
                <div className="container position-relative py-5 py-lg-6">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-white">
                            <p className="text-uppercase small fw-semibold mb-2 text-white">Bienvenido a</p>
                            <h1 className="display-5 fw-bold mb-3">Agroconecta</h1>
                            <p className="lead mb-4 text-white">
                                Conectamos el campo colombiano con la tecnología del futuro, impulsando la innovación y
                                la
                                productividad.
                            </p>
                            <Link className="btn btn-success btn-lg px-4" to="/login">
                                Comenzar ahora
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3 g-4">
                        {featureCards.map((card) => (
                            <div className="col" key={card.title}>
                                <div className="card h-100 border-0 shadow-sm rounded-4">
                                    <div className="card-body p-4 text-center">
                                        <div className="icon-placeholder rounded-3 mb-3 mx-auto">
                      <span role="img" aria-label="leaf">
                        🌿
                      </span>
                                        </div>
                                        <h3 className="h5 fw-semibold mb-2">{card.title}</h3>
                                        <p className="text-muted mb-0">{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 py-lg-6 mission-section">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="mission-visual me-lg-auto">
                                <div className="mission-image-primary">
                                    <img
                                        src={harvestImage}
                                        alt="Ilustración de agricultores colaborando"
                                        className="img-fluid rounded-4 shadow"
                                    />
                                </div>
                                <div className="mission-image-secondary shadow">
                                    <img
                                        src={harvestManual}
                                        alt="Detalle circular de productos agrícolas"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <p className="text-warning fw-semibold text-uppercase small mb-2">Nuestra misión</p>
                            <h2 className="display-6 fw-bold mb-3">
                                AgroConecta impulsa la conexión entre productores y consumidores locales
                            </h2>
                            <p className="lead text-muted mb-4">
                                Promovemos el comercio justo, la sostenibilidad y la innovación en el campo colombiano.
                                <span className="d-block text-success fw-semibold mt-2">
                  Conectamos tecnología y cultura agrícola para mejorar la productividad y fortalecer la
                  economía rural.
                </span>
                            </p>
                            <ul className="list-unstyled d-grid gap-3 mb-4">
                                {missionHighlights.map((highlight) => (
                                    <li className="d-flex align-items-start" key={highlight}>
                                        <span className="mission-check me-3">✓</span>
                                        <span className="text-muted">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link className="btn btn-success px-4" to="/nosotros">
                                Conócenos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="servicios" className="py-5 services-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="text-success fw-semibold text-uppercase small mb-2">Nuestros servicios</p>
                        <h2 className="display-6 fw-bold">¿Qué ofrecemos?</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {serviceCards.map((service) => (
                            <div className="col" key={service.title}>
                                <div className="card h-100 border-0 shadow-sm rounded-4 services-card overflow-hidden">
                                    <div className="services-image-wrapper">
                                        <img src={service.image} alt={service.title} className="services-image"/>
                                        <div
                                            className="services-label d-inline-flex align-items-center gap-3 rounded-4 shadow">
                                            <div
                                                className="services-icon d-inline-flex align-items-center justify-content-center rounded-circle">
                        <span aria-hidden="true" className="fs-4">
                          {service.icon}
                        </span>
                                            </div>
                                            <div className="text-start">
                                                <p className="fw-bold mb-0 text-success-emphasis">{service.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-4 text-center pt-5">
                                        <p className="text-muted mb-0">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="project-hero position-relative overflow-hidden text-white">
                <div className="project-hero-overlay"/>
                <div className="container position-relative py-5 py-lg-6">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {projectFilters.map((filter) => (
                                    <span className="badge rounded-pill project-filter" key={filter}>
                    {filter}
                  </span>
                                ))}
                            </div>
                            <h2 className="display-5 fw-bold mb-3">Proyectos que conectan el campo con la ciudad</h2>
                            <p className="lead mb-4">
                                Acompañamos iniciativas que transforman el territorio rural con soluciones tecnológicas,
                                sostenibles e inclusivas.
                            </p>
                            <div className="d-flex align-items-center gap-3">
                                <a className="btn btn-light btn-lg px-4 text-success fw-semibold" href="#">
                                    Explorar proyectos
                                </a>
                                <button className="btn btn-outline-light btn-lg project-play" type="button">
                  <span className="project-play-icon" aria-hidden="true">
                    ▶
                  </span>
                                    <span className="ms-2 fw-semibold">Ver video</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="proyectos-destacados" className="py-5 py-lg-6 project-highlights">
                <div className="container">
                    <div
                        className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-lg-between gap-4 mb-5">
                        <div>
                            <p className="text-success fw-semibold text-uppercase small mb-2">Conoce</p>
                            <h2 className="display-6 fw-bold mb-3">Nuestros proyectos destacados</h2>
                            <p className="text-muted mb-0">
                                Impulsamos redes colaborativas, innovación agrícola y conexiones directas entre
                                productores y
                                consumidores.
                            </p>
                        </div>
                        <a className="btn btn-outline-success px-4" href="#">
                            Conectar con el campo
                        </a>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
                        {highlightedProjects.map((project) => (
                            <div className="col" key={project.title}>
                                <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                    <div className="project-image-wrapper">
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt}
                                            className="project-image"
                                        />
                                    </div>
                                    <div className="card-body p-4 d-flex flex-column">
                    <span className="badge rounded-pill text-bg-success-subtle text-success fw-semibold mb-3">
                      {project.location}
                    </span>
                                        <h3 className="h5 fw-semibold mb-2">{project.title}</h3>
                                        <p className="text-muted mb-4">{project.description}</p>
                                        <a className="stretched-link fw-semibold text-success" href="#">
                                            Ver historia completa
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="directorio" className="py-5 py-lg-6 directory-section">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="directory-visual position-relative">
                                <div className="ratio ratio-16x9 directory-image rounded-4 overflow-hidden shadow-lg">
                                    <img
                                        src={aerea}
                                        alt="Vista aérea de campos de cultivo"
                                        className="w-100 h-100 object-fit-cover"
                                    />
                                </div>
                                <div className="directory-quote shadow-lg">
                                    <span className="fw-semibold d-block text-success-emphasis mb-1">Conecta con el campo</span>
                                    <p className="mb-0">&ldquo;Conecta con el campo, oportunidades y
                                        colaboraciones&rdquo;</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-warning fw-semibold text-uppercase small mb-2">Nuestros beneficios</p>
                            <h2 className="display-6 fw-bold text-success-emphasis mb-4">Directorio Agroconecta</h2>
                            <p className="lead text-muted mb-4">
                                Encuentra productores, servicios y oportunidades de inversión que potencian el
                                crecimiento del
                                campo colombiano.
                            </p>
                            <ul className="list-unstyled d-grid gap-4 mb-4 directory-benefits">
                                {directoryBenefits.map((benefit) => (
                                    <li key={benefit.title} className="d-flex align-items-start gap-3">
                    <span className="directory-check" aria-hidden="true">
                      ✓
                    </span>
                                        <div>
                                            <h3 className="h5 fw-semibold mb-1">{benefit.title}</h3>
                                            <p className="text-muted mb-0">{benefit.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <a className="btn btn-success px-4" href="#">
                                Explorar
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
