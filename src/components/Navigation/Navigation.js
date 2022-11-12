import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/Auth/selectors";
import s from './navigation.module.css'

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={s.linksThumb}>
            <NavLink className={({ isActive }) => (isActive ? s.active : s.link)} to='/homepage'>
                Home
            </NavLink>
            {isLoggedIn && 
                <NavLink className={({ isActive }) => (isActive ? s.active : s.link)} to="/contacts">
                    Contacts
                </NavLink>
            }
        </nav>
    );
};

export default Navigation;