import {useState} from 'react';
import {Link} from 'react-router-dom';
import trigo from '../assets/trigo.png';
import tractor from '../assets/tractor.png';
import crop from '../assets/crop.png';
import seeds from '../assets/seeds.png';

const featuredProjects = [
    {
        title: 'Arquitectura sostenible',
        location: 'Boyacá, Colombia',
        description: 'Diseños bioclimáticos que aprovechan recursos naturales y reducen la huella ambiental.',
        image: trigo,
        storyUrl: 'https://www.youtube.com/results?search_query=arquitectura+sostenible+bioclimatica',
    },
    {
        title: 'Red agrícola de la Sabana',
        location: 'Sabana de Bogotá, Colombia',
        description: 'Tecnología colaborativa para agricultores que comparten recursos y conocimiento.',
        image: tractor,
        storyUrl: 'https://www.youtube.com/results?search_query=agricultura+colaborativa+tecnologia+agricola',
    },
    {
        title: 'Huertas sostenibles en Sesquilé',
        location: 'Sesquilé, Colombia',
        description: 'Huertas urbanas con sistemas de riego eficientes y monitoreo en tiempo real.',
        image: crop,
        storyUrl: 'https://www.youtube.com/results?search_query=huertas+urbanas+sostenibles+sistemas+de+riego',
    },
    {
        title: 'Bogotá consumo local',
        location: 'Bogotá, Colombia',
        description: 'Red de consumidores y productores que dinamiza la economía local y reduce intermediarios.',
        image: seeds,
        storyUrl: 'https://www.youtube.com/results?search_query=consumo+local+productores+bogota',
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

const fieldConnections = [
    'Apoyamos la innovación sostenible con comunidades locales.',
    'Conectamos productores con aliados estratégicos.',
    'Creamos redes colaborativas que impulsan el campo.',
    'Facilitamos oportunidades de inversión responsable.',
];

const greenInvestmentProject = {
    title: 'Proyecto verde: riego solar comunitario',
    location: 'Sesquilé, Cundinamarca',
    description:
        'Iniciativa enfocada en la instalación de sistemas de riego alimentados con energía solar para pequeños productores, reduciendo costos operativos y fortaleciendo la sostenibilidad del cultivo.',
    goal: 'Meta de inversión',
    value: '$48.000.000 COP',
};

const featuredLease = {
    title: 'Finca El Porvenir',
    location: 'Guatavita, Cundinamarca',
    area: '12 hectáreas',
    use: 'Ideal para hortalizas, papa y cultivos de ciclo corto',
};

function Projects() {
    const [activeInfoCard, setActiveInfoCard] = useState(null);

    return (
        <>
            <section className="projects-hero py-5 py-lg-6">
                <div className="container">
                    <div className="text-center mb-5">
            <span className="badge text-bg-success-subtle text-success fw-semibold px-3 py-2 rounded-pill">
              Conoce
            </span>
                        <h1 className="display-5 fw-bold mt-3 mb-2">Nuestros proyectos destacados</h1>
                        <p className="lead text-muted mb-0">
                            Iniciativas que conectan el campo con la ciudad mediante soluciones sostenibles y
                            tecnología.
                        </p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
                        {featuredProjects.map((project) => (
                            <div className="col" key={project.title}>
                                <article
                                    className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden project-card">
                                    <div className="position-relative">
                                        <div className="ratio ratio-4x5">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-100 h-100 object-fit-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span
                                            className="badge bg-white text-success fw-semibold shadow-sm position-absolute top-3 start-3">
                      Destacado
                    </span>
                                    </div>
                                    <div className="card-body p-4 d-flex flex-column">
                    <span className="badge rounded-pill text-bg-success-subtle text-success fw-semibold mb-3">
                      {project.location}
                    </span>
                                        <h3 className="h5 fw-semibold mb-2">{project.title}</h3>
                                        <p className="text-muted mb-4">{project.description}</p>
                                        <a
                                            className="fw-semibold text-success text-decoration-none"
                                            href={project.storyUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ver historia completa
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 py-lg-6 bg-white">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="rounded-4 overflow-hidden shadow-sm position-relative connection-visual">
                                <img
                                    src="https://images.unsplash.com/photo-1523430410476-0185cb1f6ff9?auto=format&fit=crop&w=1200&q=80"
                                    alt="Agricultor sosteniendo plantas"
                                    className="w-100 h-100 object-fit-cover"
                                    loading="lazy"
                                />
                                <div className="connection-badge">Conecta con el campo</div>
                                {activeInfoCard === 'investment' && (
                                    <div className="directory-lease-card shadow-lg">
                                        <button
                                            className="floating-card-close"
                                            type="button"
                                            aria-label="Cerrar tarjeta"
                                            onClick={() => setActiveInfoCard(null)}
                                        >
                                            ×
                                        </button>
                                        <p className="text-uppercase small fw-semibold text-success mb-1">
                                            Proyecto verde
                                        </p>
                                        <h3 className="h5 fw-bold mb-2">{greenInvestmentProject.title}</h3>
                                        <p className="text-muted mb-2">{greenInvestmentProject.location}</p>
                                        <p className="mb-1"><strong>Meta:</strong> {greenInvestmentProject.value}</p>
                                        <p className="mb-0">{greenInvestmentProject.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-6 fw-bold text-success-emphasis mb-3">Conecta con el campo</h2>
                            <p className="lead text-muted mb-4">
                                Historias de comunidades que adoptan tecnologías y prácticas responsables para impulsar
                                el
                                crecimiento del sector agrícola.
                            </p>
                            <ul className="list-unstyled d-grid gap-3 mb-4">
                                {fieldConnections.map((item) => (
                                    <li className="d-flex align-items-start gap-3" key={item}>
                    <span className="mission-check" aria-hidden="true">
                      ✓
                    </span>
                                        <span className="text-muted">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="d-flex flex-wrap gap-3 align-items-center">
                                <button
                                    className="btn btn-success px-4"
                                    type="button"
                                    onClick={() => setActiveInfoCard('investment')}
                                >
                                    Inversiones verdes
                                </button>
                                <Link className="text-success fw-semibold text-decoration-none" to="/register">
                                    ¡Conecta y colabora!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 py-lg-6 project-directory">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="directory-visual position-relative">
                                <div className="ratio ratio-16x9 directory-image rounded-4 overflow-hidden shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                                        alt="Vista aérea de campos de cultivo"
                                        className="w-100 h-100 object-fit-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="directory-quote shadow-lg">
                                    <span className="fw-semibold d-block text-success-emphasis mb-1">Conecta con el campo</span>
                                    <p className="mb-0">&ldquo;¡Conecta con el campo, oportunidades y
                                        colaboraciones!&rdquo;</p>
                                </div>
                                {activeInfoCard === 'directory' && (
                                    <div className="directory-lease-card shadow-lg">
                                        <button
                                            className="floating-card-close"
                                            type="button"
                                            aria-label="Cerrar tarjeta"
                                            onClick={() => setActiveInfoCard(null)}
                                        >
                                            ×
                                        </button>
                                        <p className="text-uppercase small fw-semibold text-success mb-1">
                                            Finca disponible
                                        </p>
                                        <h3 className="h5 fw-bold mb-2">{featuredLease.title}</h3>
                                        <p className="text-muted mb-2">{featuredLease.location}</p>
                                        <p className="mb-1"><strong>Área:</strong> {featuredLease.area}</p>
                                        <p className="mb-0"><strong>Uso sugerido:</strong> {featuredLease.use}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-warning fw-semibold text-uppercase small mb-2">Nuestros beneficios</p>
                            <h2 className="display-6 fw-bold text-success-emphasis mb-3">Directorio Agroconecta</h2>
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
                            <button
                                className="btn btn-outline-success px-4"
                                type="button"
                                onClick={() => setActiveInfoCard('directory')}
                            >
                                Explorar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
