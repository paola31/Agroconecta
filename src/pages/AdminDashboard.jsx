import {Bar, Line} from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
    Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Legend, Tooltip);

const summaryCards = [
    {label: 'Órdenes', value: '86', change: '+4 desde la semana pasada'},
    {label: 'Proveedores', value: '82', change: '+2 desde la semana pasada'},
    {label: 'Ingresos', value: '₹17,422', change: '+21% desde la semana pasada'},
    {label: 'Canceladas', value: '5', change: '2 desde la semana pasada'},
];

const inventoryCards = [
    {label: 'Cantidad disponible', value: '888', accent: 'success'},
    {label: 'Por recibir', value: '200', accent: 'warning'},
];

const supplierStats = [
    {label: 'Integrados', value: '120', accent: 'primary'},
    {label: 'Pedidos', value: '2,334', accent: 'info'},
    {label: 'Número de categorías', value: '10', accent: 'success'},
];

const topProducts = [
    {name: 'Uniflour', sold: 14, inInventory: 10},
    {name: 'Surf Excel', sold: 12, inInventory: 12},
    {name: 'Grain', sold: 10, inInventory: 15},
    {name: 'Pills', sold: 9, inInventory: 2},
    {name: 'Parle-G', sold: 6, inInventory: 21},
    {name: 'Fresh', sold: 5, inInventory: 0},
    {name: 'Cans', sold: 4, inInventory: 23},
    {name: 'Anammichi', sold: 3, inInventory: 42},
    {name: 'Crust', sold: 3, inInventory: 12},
    {name: 'Pills', sold: 3, inInventory: 25},
];

const alertInventory = [
    {name: 'Cebolla', category: 'Vegetales', available: '100 kg', ordered: '200 kg'},
    {name: 'Zanahoria', category: 'Vegetales', available: '80 kg', ordered: '200 kg'},
    {name: 'Tomate', category: 'Vegetales', available: '10 kg', ordered: '200 kg'},
];

const orderSummary = [
    {status: 'Completadas', value: '$100,000', count: '100', accent: 'success'},
    {status: 'Pendientes', value: '$20,000', count: '40', accent: 'warning'},
    {status: 'Canceladas', value: '$10,000', count: '10', accent: 'danger'},
    {status: 'Devueltas', value: '$4,000', count: '4', accent: 'secondary'},
];

const salesBarData = {
    labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
    datasets: [
        {
            label: 'Ventas',
            data: [12, 19, 17, 20, 16, 14, 18],
            backgroundColor: 'rgba(34, 197, 94, 0.85)',
            borderRadius: 12,
        },
        {
            label: 'Compras',
            data: [8, 12, 11, 14, 9, 13, 10],
            backgroundColor: 'rgba(99, 102, 241, 0.7)',
            borderRadius: 12,
        },
    ],
};

const salesBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {position: 'bottom'},
        tooltip: {mode: 'index', intersect: false},
    },
    scales: {
        x: {stacked: false, grid: {display: false}},
        y: {beginAtZero: true, ticks: {stepSize: 5}},
    },
};

const ordersLineData = {
    labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
    datasets: [
        {
            label: 'Órdenes',
            data: [10, 12, 14, 11, 16, 18, 17],
            borderColor: '#16a34a',
            backgroundColor: 'rgba(22, 163, 74, 0.15)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
        },
    ],
};

const ordersLineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {legend: {display: false}},
    scales: {
        x: {grid: {display: false}},
        y: {beginAtZero: true, ticks: {stepSize: 5}},
    },
};

function StatCard({label, value, change}) {
    return (
        <div className="col-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100 admin-stat-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="admin-indicator" aria-hidden="true"/>
                        <div className="text-muted small">Esta semana</div>
                    </div>
                    <h6 className="text-muted mb-2">{label}</h6>
                    <h3 className="fw-bold mb-1">{value}</h3>
                    <p className="text-success mb-0 small fw-semibold">{change}</p>
                </div>
            </div>
        </div>
    );
}

function AccentCard({label, value, accent = 'success'}) {
    return (
        <div className="col-6 col-lg-6 col-xxl-4">
            <div className={`card border-0 shadow-sm rounded-4 h-100 admin-accent-card accent-${accent}`}>
                <div className="card-body">
                    <p className="text-muted mb-1 small">{label}</p>
                    <h3 className="fw-bold mb-2">{value}</h3>
                    <span className={`badge rounded-pill bg-${accent}`}>Activo</span>
                </div>
            </div>
        </div>
    );
}

function OrderStatusCard({status, value, count, accent}) {
    return (
        <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <span className={`admin-order-dot bg-${accent}`} aria-hidden="true"/>
                        <div>
                            <h6 className="mb-1 fw-bold">{status}</h6>
                            <p className="text-muted small mb-0">{value}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="text-muted small">Resumen</span>
                        <span className="badge bg-light text-dark rounded-pill">{count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AdminDashboard() {
    return (
        <>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                <div>
                    <p className="text-muted small mb-1">Panel de control</p>
                    <h4 className="mb-0">Dashboard</h4>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                    <button className="btn btn-outline-secondary rounded-3">Descargar reporte</button>
                    <button className="btn btn-success rounded-3">Ver actividades</button>
                </div>
            </div>

            <div className="row g-3 mb-3">
                {summaryCards.map((card) => (
                    <StatCard key={card.label} {...card} />
                ))}
            </div>

            <div className="row g-3 mb-3">
                <div className="col-lg-6 col-xl-4 d-flex flex-column gap-3">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <p className="text-muted mb-1 small">Resumen inventario</p>
                                    <h5 className="fw-bold mb-0">888</h5>
                                    <p className="text-muted small">Cantidad de inventario</p>
                                </div>
                                <span className="badge bg-success rounded-pill">Activos</span>
                            </div>

                            <div className="row g-2">
                                {inventoryCards.map((card) => (
                                    <AccentCard key={card.label} {...card} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <p className="text-muted mb-1 small">Resumen proveedores</p>
                                    <h5 className="fw-bold mb-0">82</h5>
                                    <p className="text-muted small">Cantidad de proveedores</p>
                                </div>
                                <span className="badge bg-primary rounded-pill">Activos</span>
                            </div>

                            <div className="row g-2">
                                {supplierStats.map((stat) => (
                                    <AccentCard key={stat.label} {...stat} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-xl-4">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">Ventas y compras</h5>
                                <span className="badge bg-light text-dark">Semanal</span>
                            </div>
                            <div style={{height: '280px'}}>
                                <Bar data={salesBarData} options={salesBarOptions}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">Resumen de órdenes</h5>
                                <button className="btn btn-sm btn-outline-success rounded-pill">Ver todos</button>
                            </div>
                            <div style={{height: '240px'}}>
                                <Line data={ordersLineData} options={ordersLineOptions}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-3 mb-3">
                {orderSummary.map((item) => (
                    <OrderStatusCard key={item.status} {...item} />
                ))}
            </div>

            <div className="row g-3">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">Productos más vendidos</h5>
                                <button className="btn btn-sm btn-outline-secondary rounded-pill">Ver todos</button>
                            </div>

                            <div className="table-responsive">
                                <table className="table align-middle">
                                    <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th className="text-center">Cantidad vendida</th>
                                        <th className="text-center">Cantidad en inventario</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {topProducts.map((product) => (
                                        <tr key={product.name}>
                                            <td className="fw-semibold">{product.name}</td>
                                            <td className="text-center">{product.sold}</td>
                                            <td className="text-center">{product.inInventory}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">Alertas de inventario</h5>
                                <span className="badge bg-danger">5</span>
                            </div>

                            <div className="table-responsive">
                                <table className="table align-middle">
                                    <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th className="text-center">Categoría</th>
                                        <th className="text-center">Disponible</th>
                                        <th className="text-center">Pedido</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {alertInventory.map((alert) => (
                                        <tr key={alert.name}>
                                            <td className="fw-semibold">{alert.name}</td>
                                            <td className="text-center">{alert.category}</td>
                                            <td className="text-center">{alert.available}</td>
                                            <td className="text-center">{alert.ordered}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
