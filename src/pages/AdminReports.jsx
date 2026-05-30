import {Link} from 'react-router-dom';

const reportItems = [
    {
        title: 'Ventas',
        description: 'Resumen de ventas por categoría y canal',
        size: '2.3 MB',
    },
    {
        title: 'Inventario',
        description: 'Existencias actuales y rotación de productos',
        size: '1.1 MB',
    },
    {
        title: 'Proveedores',
        description: 'Últimos pedidos y estado de cuentas',
        size: '950 KB',
    },
];

function AdminReports() {
    return (
        <div className="card border-0 shadow-sm rounded-4 admin-report-card">
            <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                    <div>
                        <p className="text-muted small mb-1">Panel de control / Reportes</p>
                        <h4 className="mb-0">Reportes</h4>
                    </div>
                    <button className="btn btn-outline-success rounded-3">Descargar todos</button>
                </div>

                <div className="list-group list-group-flush">
                    {reportItems.map((report) => (
                        <div key={report.title}
                             className="list-group-item px-0 d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <h6 className="mb-1 fw-semibold">{report.title}</h6>
                                <p className="text-muted small mb-0">{report.description}</p>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <span className="badge bg-light text-dark rounded-pill">{report.size}</span>
                                <Link className="text-success fw-semibold" to="#">Descargar</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminReports;
