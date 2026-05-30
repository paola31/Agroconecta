/* global FileReader */
import {useNavigate} from 'react-router-dom';
import {useRef, useState} from 'react';
import {createProducto} from '../services/productosApi';

const categories = ['Vegetales', 'Frutas', 'Tubérculos', 'Granos'];
const units = ['kg', 'lb', 'caja', 'paquete'];
const suppliers = ['Proveedor Andes', 'Huerta Verde', 'Orgánicos del Sur'];

function AdminAddProduct() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        category: '',
        price: '',
        quantity: '',
        unit: '',
        expiration: '',
        supplier: '',
    });
    const [imagePreview, setImagePreview] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const createdProduct = await createProducto({
                nombre: formData.name,
                descripcion: formData.category ? `Categoria: ${formData.category}` : '',
                unidadMedida: formData.unit,
                precioUnitario: Number(formData.price || 0),
                imagenUrl: 'https://images.unsplash.com/photo-1582281298055-e25b84a30bd6?auto=format&fit=crop&w=400&q=80',
            });

            navigate(`/admin/inventory/${createdProduct.id}`);
        } catch (requestError) {
            setError(requestError.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        navigate('/admin/inventory');
    };

    return (
        <div className="card border-0 shadow-sm rounded-4 admin-add-product-card">
            <div className="card-body p-4 p-md-5">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                    <div>
                        <p className="text-muted small mb-1">Inventario</p>
                        <h4 className="mb-0">Nuevo producto</h4>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4">
                        <div
                            className="admin-upload-box h-100 text-center p-4 d-flex flex-column justify-content-center align-items-center gap-3">
                            <div className="admin-upload-icon mb-2">📷</div>
                            <div className="w-100">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Vista previa"
                                         className="img-fluid rounded-3 admin-upload-preview"/>
                                ) : (
                                    <p className="fw-semibold mb-1">Arrastrar imagen</p>
                                )}
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
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}

                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Nombre</label>
                                <input
                                    className="form-control rounded-3"
                                    name="name"
                                    placeholder="Ingresar nombre"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Código</label>
                                <input
                                    className="form-control rounded-3"
                                    name="code"
                                    placeholder="Ingresar código"
                                    value={formData.code}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Categoría</label>
                                <select
                                    className="form-select rounded-3"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Seleccionar categoría
                                    </option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Precio</label>
                                <input
                                    className="form-control rounded-3"
                                    name="price"
                                    placeholder="Ingresar precio"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Cantidad</label>
                                <input
                                    className="form-control rounded-3"
                                    name="quantity"
                                    placeholder="Ingresar cantidad"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Unidad</label>
                                <select
                                    className="form-select rounded-3"
                                    name="unit"
                                    value={formData.unit}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Seleccionar unidad
                                    </option>
                                    {units.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Fecha expiración</label>
                                <input
                                    className="form-control rounded-3"
                                    name="expiration"
                                    type="date"
                                    value={formData.expiration}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Proveedor</label>
                                <select
                                    className="form-select rounded-3"
                                    name="supplier"
                                    value={formData.supplier}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Seleccionar proveedor
                                    </option>
                                    {suppliers.map((supplier) => (
                                        <option key={supplier} value={supplier}>
                                            {supplier}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="d-flex justify-content-end gap-2 mt-2">
                                <button className="btn btn-outline-secondary rounded-3 px-4" type="button"
                                        onClick={handleCancel}>
                                    Cancelar
                                </button>
                                <button className="btn btn-success rounded-3 px-4" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Guardando...' : 'Agregar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAddProduct;
