import {useFormik} from "formik";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import {LoginStateType, loginTC } from "../store and reducers/login-reducer";
import { RootStateType } from "../store and reducers/store";

const Login = () => {

    const dispatch = useDispatch();
    const {isAuth,
        errorMessage} = useSelector<RootStateType, LoginStateType>(state => state.login);
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

    if(isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        Login

        {fetch && <div>Loading...</div>}
        {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}

        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="password">Password</label>
            <input type={'text'} name={'password'} id={'password'}
                   value={formik.values.password}
                   onChange={formik.handleChange}/>
            <label htmlFor="rememberMe">Remember me</label>
            <input type="checkbox" name="rememberMe"
                   value="rememberMe" onChange={formik.handleChange}/>
            <button type="submit" disabled={fetch}>Submit</button>
        </form>

    </div>
}

export default Login
