import {useFormik} from "formik";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import {LoginStateType, loginTC } from "../store and reducers/login-reducer";
import { RootStateType } from "../store and reducers/store";

const Login = () => {

    const dispatch = useDispatch();
    const {isAuthorized,
        errorMessage, data,
        isFetching} = useSelector<RootStateType, LoginStateType>(state => state.login)
    console.log(isAuthorized)

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

    if(isAuthorized === false){
       return  <Redirect to='/404'/>
    } else if(isAuthorized === true){
        return  <Redirect to='/profile'/>
    }


    return <div>
        Login

        {isFetching && <div>Loading...</div>}

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
            <button type="submit" disabled={isFetching}>Submit</button>
        </form>

    </div>
}

export default Login
