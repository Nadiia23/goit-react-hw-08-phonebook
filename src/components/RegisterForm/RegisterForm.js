// import { useState } from "react";
import { useDispatch } from "react-redux"
import { register } from "redux/Auth/authThunk";
import s from './registerForm.module.css'

export const RegisterForm = () => {

    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <div className={s.card}>
            <h2 className={s.cardHeading}>
				Register
			</h2>
            <form className={s.cardForm} onSubmit={handleSubmit}>
                <div className={s.input}>
                    <label className={s.inputLabel}>
                Username
                <input className={s.inputField} type='text' name='name' required/>
            </label>
            </div>
                <div className={s.input}>
                    <label className={s.inputLabel}>
                Email
                <input className={s.inputField} type='text' name='email' required/>
            </label>
            </div>
                <div className={s.input}>
                    <label className={s.inputLabel}>
                Password
                <input className={s.inputField} type='password' name='password' required/>
            </label>
            </div>
            <button className={s.actionButton} type='submit'>Register</button>
        </form>
        </div>
    );
};