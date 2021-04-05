import {useFormik} from "formik";
import React from "react";

import {useDispatch, useSelector} from "react-redux";

import {Redirect} from "react-router-dom";
import s from "./registration.module.css"
import {RootStateType} from "../store and reducers/store";
import {registration} from "../store and reducers/registration-reducer";

type ErrorType = {
    email?: string
    password?: string
}

export const Registration = () => {

    const dispatch = useDispatch()
    const error = useSelector<RootStateType, string | null>(state => state.registration.error)
    const redirect = useSelector<RootStateType, boolean>(state => state.registration.isRedirecting)
    const isLoading = useSelector<RootStateType, boolean>(state => state.registration.isLoading)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: values => {
            dispatch(registration(values.email, values.password))
            formik.resetForm()
        },

        validate: (values) => {
            const errors: ErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 5) {
                errors.password = 'Password should be more 5 symbols';
            }

            return errors;
        }
    })

    if (redirect) {
        return <Redirect to={'login'}/>
    }

    return (
        <div className={s.registration}>

            <h1 className={s.h1}>Форма регистрации</h1>

            <form className={s.form} onSubmit={formik.handleSubmit}>
                <div className={s.form_item}>
                    <input type="text"
                           placeholder="Введите логин"
                           {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ?
                        <div className={s.error}>{formik.errors.email}</div> : null}
                </div>

                <div className={s.form_item}>
                    <input type="password"
                           placeholder="Введите пароль"
                           {...formik.getFieldProps('password')}
                    />

                    {formik.touched.password && formik.errors.password ?
                        <div className={s.error}>{formik.errors.password}</div> : null}
                </div>

                <button className={s.button} type='submit' disabled={isLoading}>Зарегистрироваться</button>
            </form>

            {error && !isLoading && <div className={s.error}>{error}</div>}
            {isLoading && <div className={s.loading}>LOADING...</div>}
        </div>

    )
}