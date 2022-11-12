import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "redux/Auth/selectors"

const PublicRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Navigate to="/contacts" /> : <Outlet />;
};

export default PublicRoute;