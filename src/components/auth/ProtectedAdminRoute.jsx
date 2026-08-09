import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { hasAdminSession } from '../../services/authSession';

function ProtectedAdminRoute() {
  const location = useLocation();

  if (!hasAdminSession()) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

export default ProtectedAdminRoute;
