import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/Auth/selectors";

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink>
                Home
            </NavLink>
            {isLoggedIn && 
                <NavLink>
                    Contacts
                </NavLink>
            }
        </nav>
    );
};