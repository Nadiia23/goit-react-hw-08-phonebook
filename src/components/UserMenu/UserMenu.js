import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/Auth/operations";
import { selectUser } from "redux/Auth/selectors";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectUser);
    
    return (
        <div>
            <p> Welcome, {user.name}</p>
            <button type='button' onClick={()=> dispatch(logOut())}>
                Logout
            </button>
        </div>
    )
}

export default UserMenu;