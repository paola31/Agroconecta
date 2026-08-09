import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getUserSession} from '../services/authSession';
import {createPedido} from '../services/pedidosApi';

const formatCurrency = (value) =>
  value.toLocaleString('es-CO', {style: 'currency', currency: 'COP', maximumFractionDigits: 0});

function Cart() {
  const userSession = getUserSession();
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('contraentrega');
  const [recipient, setRecipient] = useState({
    nombre: userSession?.nombre || '',
    apellido: '',
    celular: '',
    correo: userSession?.email || '',
    ciudad: '',
    direccion: '',
  });
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = window.localStorage.getItem('agroconecta-cart');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    window.localStorage.setItem('agroconecta-cart', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('agroconecta-cart-updated'));
  }, [cartItems]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 8500 : 0;
  const total = subtotal + shipping;

  const handleRecipientChange = (event) => {
    const {name, value} = event.target;
    setRecipient((current) => ({...current, [name]: value}));
  };

  const handleRemoveItem = (itemName) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.name !== itemName));
    setStatus(null);
  };

  const handleFinishOrder = async () => {
    setStatus(null);

    if (!userSession) {
      setStatus({type: 'danger', text: 'Debes iniciar sesión antes de finalizar el pedido.'});
      return;
    }
    if (cartItems.length === 0) {
      setStatus({type: 'danger', text: 'No hay productos en el carrito para finalizar el pedido.'});
      return;
    }
    if (!recipient.nombre.trim() || !recipient.celular.trim() || !recipient.ciudad.trim() || !recipient.direccion.trim()) {
      setStatus({type: 'danger', text: 'Completa el nombre, celular, ciudad y dirección del destinatario.'});
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await createPedido({
        clienteId: userSession.usuarioId,
        nombreDestinatario: `${recipient.nombre} ${recipient.apellido}`.trim(),
        telefono: recipient.celular.trim(),
        direccion: recipient.direccion.trim(),
        ciudad: recipient.ciudad.trim(),
        departamento: 'Cundinamarca',
        metodoPago: paymentMethod,
        items: cartItems.map((item) => ({
          productoNombre: item.name,
          cantidad: item.quantity,
        })),
      });

      setCartItems([]);
      setStatus({
        type: 'success',
        text: `Pedido #${response.pedidoId} registrado correctamente. Estado: ${response.estado}.`,
      });
    } catch (orderError) {
      setStatus({type: 'danger', text: orderError.message || 'No fue posible registrar el pedido.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cart-page py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
          <div>
            <p className="text-success fw-semibold mb-1">Tu carrito</p>
            <h1 className="fw-bold mb-2">Confirma tu pedido</h1>
            <p className="text-muted mb-0">Revisa los datos antes de finalizar la compra.</p>
          </div>
          <Link className="btn btn-outline-success" to="/catalogo">Volver a productos</Link>
        </div>

        {!userSession && (
          <div className="alert alert-warning" role="alert">
            Para registrar el pedido debes <Link to="/login" className="alert-link">iniciar sesión</Link>.
          </div>
        )}

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card shadow-sm border-0 mb-4 cart-form-card">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h2 className="h5 fw-bold mb-0">Confirma tu pedido</h2>
                  <span className="badge text-bg-success-subtle text-success px-3 py-2">Datos del destinatario</span>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="recipientName">Nombre</label>
                    <input id="recipientName" name="nombre" type="text" className="form-control"
                           placeholder="Ingresa tu nombre" value={recipient.nombre} onChange={handleRecipientChange}/>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="recipientLastName">Apellido</label>
                    <input id="recipientLastName" name="apellido" type="text" className="form-control"
                           placeholder="Ingresa tu apellido" value={recipient.apellido} onChange={handleRecipientChange}/>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="recipientPhone">Celular</label>
                    <input id="recipientPhone" name="celular" type="tel" className="form-control"
                           placeholder="300 123 4567" value={recipient.celular} onChange={handleRecipientChange}/>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="recipientEmail">Correo</label>
                    <input id="recipientEmail" name="correo" type="email" className="form-control"
                           value={recipient.correo} onChange={handleRecipientChange}/>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="recipientCity">Ciudad / zona</label>
                    <input id="recipientCity" name="ciudad" type="text" className="form-control"
                           placeholder="Ingresa la ciudad" value={recipient.ciudad} onChange={handleRecipientChange}/>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="recipientAddress">Dirección</label>
                    <input id="recipientAddress" name="direccion" type="text" className="form-control"
                           placeholder="Ingresa tu dirección" value={recipient.direccion} onChange={handleRecipientChange}/>
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
                <p className="text-muted mb-4">El pago quedará registrado como pendiente. No se realizan cobros en línea.</p>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-check border rounded-3 p-3 h-100">
                      <input className="form-check-input" type="radio" name="payment" id="payment1"
                             value="contraentrega" checked={paymentMethod === 'contraentrega'}
                             onChange={(event) => setPaymentMethod(event.target.value)}/>
                      <label className="form-check-label d-block" htmlFor="payment1">
                        <span className="fw-semibold d-block mb-1">Pago contraentrega</span>
                        <small className="text-muted">Paga en efectivo al recibir tus productos.</small>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check border rounded-3 p-3 h-100">
                      <input className="form-check-input" type="radio" name="payment" id="payment2"
                             value="transferencia" checked={paymentMethod === 'transferencia'}
                             onChange={(event) => setPaymentMethod(event.target.value)}/>
                      <label className="form-check-label d-block" htmlFor="payment2">
                        <span className="fw-semibold d-block mb-1">Transferencia bancaria</span>
                        <small className="text-muted">El pago quedará pendiente de confirmación.</small>
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
                {status && <div className={`alert alert-${status.type} border-0 rounded-4 mb-3`} role="status">{status.text}</div>}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h5 fw-bold mb-0">Resumen de compra</h2>
                  <span className="badge text-bg-light text-success"><strong>{cartItems.length}</strong> productos</span>
                </div>
                <div className="d-flex flex-column gap-3 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.name} className="d-flex align-items-center gap-3">
                      <img className="cart-item-image rounded-3" src={item.image} alt={item.name}/>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start gap-3">
                          <div>
                            <p className="fw-semibold mb-1">{item.name}</p>
                            <small className="text-muted">x{item.quantity} unidad(es)</small>
                          </div>
                          <div className="text-end">
                            <span className="fw-semibold d-block">{formatCurrency(item.price * item.quantity)}</span>
                            <button className="cart-remove-button" type="button" onClick={() => handleRemoveItem(item.name)}>Eliminar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {cartItems.length === 0 && <div className="alert alert-light border text-center mb-0" role="status">No hay productos en el carrito.</div>}
                </div>
                <div className="border-top pt-3 mt-2">
                  <div className="d-flex justify-content-between mb-2"><span className="text-muted">Subtotal</span><span className="fw-semibold">{formatCurrency(subtotal)}</span></div>
                  <div className="d-flex justify-content-between mb-2"><span className="text-muted">Envío</span><span className="fw-semibold">{formatCurrency(shipping)}</span></div>
                  <div className="d-flex justify-content-between mb-2"><span className="text-muted">IVA</span><span className="fw-semibold">Incluido</span></div>
                  <div className="d-flex justify-content-between align-items-center mt-3 py-2 border-top"><span className="fw-bold">Total</span><span className="fs-5 fw-bold text-success">{formatCurrency(total)}</span></div>
                  <button type="button" className="btn btn-success w-100 mt-3" onClick={handleFinishOrder}
                          disabled={isSubmitting || cartItems.length === 0}>
                    {isSubmitting ? 'Registrando pedido...' : 'Finalizar pedido'}
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
