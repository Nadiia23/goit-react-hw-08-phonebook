import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/Auth/selectors';


export const PrivateRoute = () => {
  const token = useSelector(selectToken);

  return !token ? <Navigate to="/login" /> : <Outlet />;
};
