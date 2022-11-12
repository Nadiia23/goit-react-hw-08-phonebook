import { NavLink } from "react-router-dom";
import s from './authNav.module.css';

const AuthNav = () => {
    return (
        <div className={s.linksThumb}>
            <NavLink className={({ isActive }) => (isActive ? s.active : s.link)}  to="/register">
                Register
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? s.active : s.link)} to="/login">
                Log in
            </NavLink>
        </div>
    )
}
export default AuthNav;