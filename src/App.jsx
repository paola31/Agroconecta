import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import AdminLayout from './components/layout/AdminLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminInventory from './pages/AdminInventory';
import AdminAddProduct from './pages/AdminAddProduct';
import AdminProductDetail from './pages/AdminProductDetail';
import AdminReports from './pages/AdminReports';
import AdminSuppliers from './pages/AdminSuppliers';
import AdminAddSupplier from './pages/AdminAddSupplier';
import AdminSupplierDetail from './pages/AdminSupplierDetail';
import AdminOrders from './pages/AdminOrders';
import AdminUsers from './pages/AdminUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas publicas para compradores, productores y visitantes. */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carrito" element={<Cart />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* Rutas administrativas separadas para gestionar la operacion interna. */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="inventory" element={<AdminInventory />} />
          <Route path="inventory/:productId" element={<AdminProductDetail />} />
          <Route path="inventory/new" element={<AdminAddProduct />} />
          <Route path="suppliers" element={<AdminSuppliers />} />
          <Route path="suppliers/:supplierId" element={<AdminSupplierDetail />} />
          <Route path="suppliers/new" element={<AdminAddSupplier />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="reports" element={<AdminReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
