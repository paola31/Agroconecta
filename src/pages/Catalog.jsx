import { useMemo, useState } from 'react';
import onions from '../assets/onions.png';
import carrots from '../assets/carrots.png';
import tomate from '../assets/tomate.png';
import uvas from '../assets/uvas.png';
import garlic from '../assets/garlic.png';
import lettuce from '../assets/lettuce.png';
import banana from '../assets/banana.png';
import purpleOnions from '../assets/purpleOnions.png';
import papa from '../assets/papa.png';

const recentProducts = [
  {
    name: 'Cebolla',
    price: 5000,
    image: onions,
    rating: 4.7,
  },
  {
    name: 'Zanahoria',
    price: 5000,
    image: carrots,
    rating: 4.9,
  },
  {
    name: 'Tomate',
    price: 5000,
    image: tomate,
    rating: 4.8,
  },
  {
    name: 'Uvas silvestres',
    price: 5000,
    image: uvas,
    rating: 4.9,
  },
  {
    name: 'Ajo',
    price: 5000,
    image: garlic,
    rating: 4.5,
  },
  {
    name: 'Lechuga',
    price: 5000,
    image: lettuce,
    rating: 4.6,
  },
];

const offerProducts = [
  {
    name: 'Manzanas',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
  },
  {
    name: 'Bananos',
    price: 5000,
    image: banana,
    rating: 4.8,
  },
  {
    name: 'Zanahorias',
    price: 5000,
    image: carrots,
    rating: 4.7,
  },
  {
    name: 'Ajo',
    price: 5000,
    image: garlic,
    rating: 4.6,
  },
  {
    name: 'Uvas silvestres',
    price: 5000,
    image: uvas,
    rating: 4.9,
  },
  {
    name: 'Lechuga',
    price: 5000,
    image: lettuce,
    rating: 4.5,
  },
  {
    name: 'Cebolla morada',
    price: 5000,
    image: purpleOnions,
    rating: 4.7,
  },
  {
    name: 'Papa',
    price: 5000,
    image: papa,
    rating: 4.8,
  },
  {
    name: 'Uva morada silvestre',
    price: 5000,
    image: uvas,
    rating: 4.9,
  },
];

const formatCurrency = (value) =>
  value.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  });

function ProductCard({ image, name, price, rating }) {
  return (
    <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden catalog-card">
      <img className="card-img-top catalog-card-image" src={image} alt={name} />
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h3 className="h5 fw-semibold mb-0">{name}</h3>
          <span className="badge bg-success-subtle text-success-emphasis rounded-pill px-3 py-2">
            <span className="me-1" role="img" aria-label="star">
              ⭐
            </span>
            {rating.toFixed(1)}
          </span>
        </div>
        <p className="fs-5 fw-bold text-success mb-3">{formatCurrency(price)}</p>
        <button className="btn btn-outline-success w-100" type="button">
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredOffers = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    if (!normalized) {
      return offerProducts;
    }

    return offerProducts.filter((product) => product.name.toLowerCase().includes(normalized));
  }, [searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredOffers.length / itemsPerPage));
  const paginatedOffers = filteredOffers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <main>
      <section className="catalog-hero position-relative overflow-hidden mb-5">
        <div className="catalog-hero-overlay" />
        <div className="container position-relative py-5 py-lg-6">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-white">
              <span className="badge text-bg-success-subtle text-success-emphasis rounded-pill px-4 py-2 mb-3">
                Oferta del día
              </span>
              <h1 className="display-4 fw-bold mb-3">Agricultura orgánica y sostenible</h1>
              <p className="lead mb-4 text-white">
                Conecta con productores locales y descubre productos frescos cultivados con prácticas responsables.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-success btn-lg px-4" href="#catalog-grid">
                  Comprar ahora
                </a>
                <a className="btn btn-outline-light btn-lg px-4" href="#ofertas">
                  Ver ofertas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="catalog-grid">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-4 mb-5">
            <div>
              <span className="catalog-highlight-label text-success mb-2 d-inline-block">Recientemente agregado</span>
              <h2 className="display-6 fw-bold mb-1">Todos nuestros productos</h2>
              <p className="text-muted mb-0">Elige entre productos frescos y orgánicos directamente del campo.</p>
            </div>
            <div className="catalog-search">
              <label className="form-label text-muted small mb-2" htmlFor="searchCatalog">
                Buscar productos
              </label>
              <div className="position-relative">
                <span className="catalog-search-icon" aria-hidden="true">
                  🔍
                </span>
                <input
                  id="searchCatalog"
                  className="form-control form-control-lg ps-5"
                  type="search"
                  placeholder="Buscar"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {recentProducts.map((product) => (
              <div className="col" key={product.name}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-white" id="ofertas">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4 mb-4">
            <div>
              <span className="catalog-highlight-label text-success mb-2 d-inline-block">Ver ofertas</span>
              <h2 className="display-6 fw-bold mb-0">Ofertas especiales</h2>
            </div>
            <p className="text-muted mb-0">Mostrando {paginatedOffers.length} de {filteredOffers.length} resultados.</p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
            {paginatedOffers.map((product) => (
              <div className="col" key={product.name}>
                <ProductCard {...product} />
              </div>
            ))}
            {paginatedOffers.length === 0 && (
              <div className="col">
                <div className="alert alert-light border rounded-4 py-5 text-center" role="status">
                  <h3 className="h5 fw-semibold mb-2">No encontramos resultados</h3>
                  <p className="text-muted mb-0">Intenta con otro término de búsqueda.</p>
                </div>
              </div>
            )}
          </div>

          <nav aria-label="Navegación de ofertas">
            <ul className="pagination justify-content-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPage;
                return (
                  <li className="page-item" key={pageNumber}>
                    <button
                      className={`page-link rounded-circle border-0 ${isActive ? 'active' : ''}`}
                      type="button"
                      onClick={() => handlePageChange(pageNumber)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {pageNumber}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}

export default Catalog;
