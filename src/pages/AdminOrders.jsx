import {useMemo} from 'react';

const orderStatuses = [
    {label: 'Total ordenes', count: 37, amount: '$ 312', accent: 'primary'},
    {label: 'Total recibido', count: 32, amount: '$ 3700', accent: 'success'},
    {label: 'Total entregado', count: 15, amount: '$ 312', accent: 'info'},
    {label: 'En camino', count: 5, amount: '$ 250', accent: 'warning'},
    {label: 'Devuelta', count: 2, amount: '$ 356', accent: 'danger'},
];

const orders = [
    {
        client: 'Juan Perez',
        total: '$ 4304',
        quantity: 34,
        orderId: '123',
        eta: '23/1/22',
        status: 'Retornada',
        statusType: 'danger'
    },
    {
        client: 'Diana Castro',
        total: '$ 600',
        quantity: 25,
        orderId: '567',
        eta: '5/4/22',
        status: 'Confirmada',
        statusType: 'success'
    },
    {
        client: 'Carlos Martinez',
        total: '$ 900',
        quantity: 42,
        orderId: '13',
        eta: '12/1/22',
        status: 'En despacho',
        statusType: 'info'
    },
    {
        client: 'Carlos Matias',
        total: '$ 5000',
        quantity: 32,
        orderId: '112',
        eta: '7/5/22',
        status: 'En despacho',
        statusType: 'info'
    },
    {
        client: 'Sergio Ayala',
        total: '$ 302',
        quantity: 22,
        orderId: '12',
        eta: '2/7/21',
        status: 'Retornada',
        statusType: 'danger'
    },
    {
        client: 'Olga Estrada',
        total: '$ 2194',
        quantity: 20,
        orderId: '1',
        eta: '15/4/22',
        status: 'En despacho',
        statusType: 'info'
    },
    {
        client: 'Lola Fernandez',
        total: '$ 1013',
        quantity: 38,
        orderId: '23',
        eta: '15/1/22',
        status: 'Confirmada',
        statusType: 'success'
    },
    {
        client: 'Diana Lopez',
        total: '$ 432',
        quantity: 21,
        orderId: '43',
        eta: '3/4/22',
        status: 'Retrasada',
        statusType: 'warning'
    },
    {
        client: 'Adriana Castro',
        total: '$ 1223',
        quantity: 22,
        orderId: '34',
        eta: '29/3/22',
        status: 'Retornada',
        statusType: 'danger'
    },
];

function AdminOrders() {
    const summary = useMemo(() => {
        const totals = orders.reduce(
            (acc, order) => {
                const amount = Number(order.total.replace(/[^0-9.-]+/g, ''));
                acc.orders += 1;
                acc.revenue += amount;
                acc.profit += Math.max(amount - 200, 0);
                return acc;
            },
            {orders: 0, revenue: 0, profit: 0},
        );

        return {
            ...totals,
            revenueLabel: `$ ${totals.revenue.toLocaleString('es-CO')}`,
            profitLabel: `$ ${totals.profit.toLocaleString('es-CO')}`,
        };
    }, []);

    return (
        <div className="admin-orders-page d-flex flex-column gap-4">
            <div className="card border-0 shadow-sm rounded-4 admin-orders-summary">
                <div className="card-body p-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                        <div>
                            <p className="text-muted small mb-1">Panel de control</p>
                            <h4 className="mb-0">Resumen de órdenes</h4>
                        </div>
                        <button className="btn btn-outline-secondary rounded-3">Descargar</button>
                    </div>

                    <div className="row g-3 align-items-stretch">
                        <div className="col-12 col-xl-8">
                            <div className="h-100 p-3 p-md-4 rounded-4 border admin-orders-highlight">
                                <div
                                    className="d-flex flex-wrap align-items-center gap-2 mb-3 text-success fw-semibold">
                                    <i className="bi bi-check-circle-fill" aria-hidden="true"/>
                                    <span>
                    Ganancia total de{' '}
                                        <span className="text-decoration-underline">{summary.profitLabel}</span> del inventario
                  </span>
                                </div>

                                <div className="row g-3">
                                    {orderStatuses.map((status) => (
                                        <div className="col-6 col-md-4 col-xl-4 col-xxl-2" key={status.label}>
                                            <div
                                                className={`p-3 rounded-4 border admin-status-card accent-${status.accent}`}>
                                                <p className="text-muted small mb-1">{status.label}</p>
                                                <h5 className="mb-1">{status.count}</h5>
                                                <small className="text-muted">{status.amount}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-xl-4">
                            <div className="h-100 p-3 p-md-4 rounded-4 border admin-orders-aside">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <i className="bi bi-graph-up text-success" aria-hidden="true"/>
                                    <p className="text-success fw-semibold mb-0">Ventas a nivel global</p>
                                </div>
                                <h2 className="fw-bold mb-3">{summary.revenueLabel}</h2>
                                <p className="text-muted small mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 admin-orders-table">
                <div className="card-body p-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                        <div>
                            <p className="text-muted small mb-1">Órdenes</p>
                            <h4 className="mb-0">Listado de órdenes</h4>
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                            <button className="btn btn-outline-secondary rounded-3">Filtros</button>
                            <button className="btn btn-outline-secondary rounded-3">Historial</button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Total</th>
                                <th>Cantidad</th>
                                <th>Orden ID</th>
                                <th>Fecha estimada</th>
                                <th className="text-end">Estado</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map((order) => (
                                <tr key={`${order.client}-${order.orderId}`} className="admin-order-row">
                                    <td className="fw-semibold">{order.client}</td>
                                    <td>{order.total}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.orderId}</td>
                                    <td>{order.eta}</td>
                                    <td className="text-end">
                                        <span
                                            className={`admin-status-pill status-${order.statusType}`}>{order.status}</span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-3 flex-wrap gap-2">
                        <button className="btn btn-outline-secondary rounded-3">Anterior</button>
                        <div className="text-muted small">Página 1 de 10</div>
                        <button className="btn btn-outline-success rounded-3">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrders;
