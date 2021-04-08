import {useFormik} from "formik";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {LoginStateType, loginTC} from "../store and reducers/login-reducer";
import {RootStateType} from "../store and reducers/store";
import s from "../Registration/registration.module.css";
import m from './login.module.css'

const Login = () => {

    const dispatch = useDispatch();
    const {
        isAuth,
        errorMessage
    } = useSelector<RootStateType, LoginStateType>(state => state.login);
    const fetch = useSelector<RootStateType, boolean>(state => state.app.isFetching);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginTC(values.password, values.email, values.rememberMe))
        },
    });

    console.log(errorMessage)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1 className={s.h1}>Login</h1>

        <form className={s.form} onSubmit={formik.handleSubmit}>
            <div className={s.form_item}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

            </div>

            <div className={s.form_item}>
                <label htmlFor="password">Password</label>
                <input type={'text'} name={'password'} id={'password'}
                       value={formik.values.password}
                       onChange={formik.handleChange}/>
            </div>

            <div className={`${s.form_item} ${m.form_item_rememberMe}`}>
                <label htmlFor="rememberMe">Remember me</label>
                <input type="checkbox" name="rememberMe"
                       value="rememberMe" onChange={formik.handleChange}/>
            </div>

            <button className={s.button} type="submit" disabled={fetch}>Submit</button>
        </form>

        {fetch && <div className={s.loading}>Loading...</div>}
        {errorMessage && <div className={s.error}>{errorMessage}</div>}

    </div>
}

export default Login
