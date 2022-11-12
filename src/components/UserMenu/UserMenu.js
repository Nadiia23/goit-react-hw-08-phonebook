import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/Auth/authThunk";
import { selectUser } from "redux/Auth/selectors";
import s from './userMenu.module.css'

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    return (
        <div className={s.wrapper}>
            <p className={s.username}> Welcome, {user.name}</p>
            <button className={s.button} type='button' onClick={()=> dispatch(logOut())}>
                Logout
            </button>
        </div>
    )
}

export default UserMenu;