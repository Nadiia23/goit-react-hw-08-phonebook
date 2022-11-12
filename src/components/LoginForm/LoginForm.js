import { useDispatch } from "react-redux";
import { logIn } from "redux/Auth/authThunk";
import s from './loginForm.module.css';

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
    };

    return (
        <div className={s.card}>
            <form className={s.cardForm} onSubmit={handleSubmit} autoComplete='off'>
                <div className={s.input}>
                    <label className={s.inputLabel}>
                Email
                <input className={s.inputField} type='email' name='email' />
            </label>
            </div>
                <div className={s.input}>
                    <label className={s.inputLabel}>
                Password
                <input className={s.inputField} type='password' name='password' />
                </label>
            </div>
                    <button className={s.actionButton} type='submit'>Log In</button>
        </form>
        </div>
    );
};
export default LoginForm;