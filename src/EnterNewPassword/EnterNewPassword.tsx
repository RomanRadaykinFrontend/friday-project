import React, {ChangeEvent, useState} from "react";
import {Redirect, useParams} from "react-router-dom";
import s from './NewPassword.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./../store and reducers/store";
import {postNewPasswordTC} from "./../store and reducers/enter-new-password-reducer";


export const EnterNewPassword = () => {

    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const {token} = useParams<{ token: string }>()
    const dispatch = useDispatch()
    const redirect = useSelector<RootStateType, boolean>(state => state.enterNewPassword.redirect)
    const [badPassword, setBadPassword] = useState(false)
    const error = useSelector<RootStateType, string | null>(state => state.enterNewPassword.error)

    const changePassword1 = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword1(e.currentTarget.value)
    }
    const changePassword2 = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.currentTarget.value)
    }

    const changePassword = () => {
        if (password1 === password2) {
            return dispatch(postNewPasswordTC(password2, token))
        } else {
            return setBadPassword(true)
        }

    }


    if (redirect) {
        return <Redirect to={"/login"}/>
    }


    return <div className={s.main}>
        <h1>Введите новый пароль</h1>
        <div className={s.inputs}>
            <input onChange={changePassword1} type="password" placeholder={"Enter new password"}/>
            <input onChange={changePassword2} type="password" placeholder={"Repeat new password"}/>
            {badPassword ? <div>Passwords mismatch!</div> : null}
            {error ? <div className={s.error}>{error}</div> : null}
        </div>
        <button onClick={changePassword}>Next</button>
    </div>
}