/* global FileReader */
import {useNavigate} from 'react-router-dom';
import {useRef, useState} from 'react';

function AdminAddSupplier() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        document: '',
        phone: '',
        email: '',
    });

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            setImagePreview('');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result?.toString() || '');
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/admin/suppliers');
    };

    const handleCancel = () => {
        navigate('/admin/suppliers');
    };

    return (
        <div className="card border-0 shadow-sm rounded-4 admin-add-product-card">
            <div className="card-body p-4 p-md-5">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                    <div>
                        <p className="text-muted small mb-1">Proveedores</p>
                        <h4 className="mb-0">Nuevo proveedor</h4>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4">
                        <div
                            className="admin-supplier-upload h-100 d-flex flex-column align-items-center justify-content-center gap-3 text-center p-4">
                            <div className="admin-supplier-avatar mb-2">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Proveedor" className="img-fluid"/>
                                ) : (
                                    <span role="img" aria-label="avatar" className="fs-2 text-muted">
                    👤
                  </span>
                                )}
                            </div>
                            <div>
                                <p className="fw-semibold mb-1">Arrastrar imagen</p>
                                <p className="text-muted small mb-2">Formatos: JPG, PNG, WEBP</p>
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                className="d-none"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <button
                                className="btn btn-link p-0 text-success fw-semibold"
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Seleccionar
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Nombre</label>
                                <input
                                    className="form-control rounded-3"
                                    name="name"
                                    placeholder="Nombre y Apellido"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Cédula</label>
                                <input
                                    className="form-control rounded-3"
                                    name="document"
                                    placeholder="Cédula"
                                    value={formData.document}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Teléfono</label>
                                <input
                                    className="form-control rounded-3"
                                    name="phone"
                                    placeholder="Teléfono"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Correo</label>
                                <input
                                    className="form-control rounded-3"
                                    name="email"
                                    type="email"
                                    placeholder="Correo"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-end gap-2 mt-2">
                                <button className="btn btn-outline-secondary rounded-3 px-4" type="button"
                                        onClick={handleCancel}>
                                    Cancelar
                                </button>
                                <button className="btn btn-success rounded-3 px-4" type="submit">
                                    Añadir
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAddSupplier;
