import { Link } from 'react-router-dom';
import pickle from '../assets/pickle.png';
import tomateCherry from '../assets/tomateCherry.png';
import carrot from '../assets/carrot.png';
import lechuga from '../assets/lechuga.png';

const cartItems = [
  {
    name: 'Pepino verde',
    quantity: 1,
    price: 45000,
    image: pickle,
  },
  {
    name: 'Tomate cherry',
    quantity: 2,
    price: 38000,
    image: tomateCherry,
  },
  {
    name: 'Zanahoria orgánica',
    quantity: 1,
    price: 27000,
    image: carrot,
  },
  {
    name: 'Lechuga fresca',
    quantity: 1,
    price: 22000,
    image: lechuga,
  },
];

const formatCurrency = (value) =>
  value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

function Cart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 8500;
  const total = subtotal + shipping;

  return (
    <section className="cart-page py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
          <div>
            <p className="text-success fw-semibold mb-1">Tu carrito</p>
            <h1 className="fw-bold mb-2">Confirma tu pedido</h1>
            <p className="text-muted mb-0">Revisa los datos antes de finalizar la compra.</p>
          </div>
          <Link className="btn btn-outline-success" to="/catalogo">
            Volver a productos
          </Link>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card shadow-sm border-0 mb-4 cart-form-card">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h2 className="h5 fw-bold mb-0">Confirma tu pedido</h2>
                  <span className="badge text-bg-success-subtle text-success px-3 py-2">
                    Datos del destinatario
                  </span>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu nombre" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu apellido" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Celular</label>
                    <input type="tel" className="form-control" placeholder="300 123 4567" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control" placeholder="correo@ejemplo.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Ciudad / zona</label>
                    <input type="text" className="form-control" placeholder="Selecciona ciudad" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu dirección" />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="addressCheck" />
                      <label className="form-check-label" htmlFor="addressCheck">
                        Entregar en una dirección diferente
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-sm border-0 cart-form-card">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h2 className="h5 fw-bold mb-0">Información de pago</h2>
                  <span className="badge text-bg-success-subtle text-success px-3 py-2">Método de pago</span>
                </div>
                <p className="text-muted mb-4">
                  Elige el método de pago que deseas y sigue las instrucciones de entrega o consignación.
                </p>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-check border rounded-3 p-3 h-100">
                      <input className="form-check-input" type="radio" name="payment" id="payment1" defaultChecked />
                      <label className="form-check-label d-block" htmlFor="payment1">
                        <span className="fw-semibold d-block mb-1">Pago contraentrega</span>
                        <small className="text-muted">Paga en efectivo al recibir tus productos.</small>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check border rounded-3 p-3 h-100">
                      <input className="form-check-input" type="radio" name="payment" id="payment2" />
                      <label className="form-check-label d-block" htmlFor="payment2">
                        <span className="fw-semibold d-block mb-1">Transferencia bancaria</span>
                        <small className="text-muted">Recibirás los datos para realizar tu pago.</small>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card shadow-sm border-0 cart-summary-card">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h5 fw-bold mb-0">Resumen de compra</h2>
                  <span className="badge text-bg-light text-success">
                    <strong>{cartItems.length}</strong> productos
                  </span>
                </div>
                <div className="d-flex flex-column gap-3 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.name} className="d-flex align-items-center gap-3">
                      <img className="cart-item-image rounded-3" src={item.image} alt={item.name} />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <p className="fw-semibold mb-1">{item.name}</p>
                            <small className="text-muted">x{item.quantity} unidad(es)</small>
                          </div>
                          <span className="fw-semibold">{formatCurrency(item.price * item.quantity)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-top pt-3 mt-2">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Subtotal</span>
                    <span className="fw-semibold">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Envío</span>
                    <span className="fw-semibold">{formatCurrency(shipping)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Iva</span>
                    <span className="fw-semibold">Incluido</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3 py-2 border-top">
                    <span className="fw-bold">Total</span>
                    <span className="fs-5 fw-bold text-success">{formatCurrency(total)}</span>
                  </div>
                  <button type="button" className="btn btn-success w-100 mt-3">
                    Finalizar pedido
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
