import AuthNav from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/Auth/selectors";
import s from './appBar.module.css';

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
};

export default AppBar;