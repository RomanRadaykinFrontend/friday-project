import React, {ChangeEvent, useState} from "react";
import s from "./LostPassword.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./../store and reducers/store";
import {postEmailTC, setResponseError} from "./../store and reducers/enter-new-password-reducer";

export const PasswordRecovery = () => {

    const error = useSelector<RootStateType, string | null>(state => state.enterNewPassword.error)
    const [email, setEmail] = useState("")
    const redirect = useSelector<RootStateType, boolean>(state => state.enterNewPassword.redirect)
    const dispatch = useDispatch()

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        dispatch(setResponseError(null))
    }

    const postEmail = () => {
        return dispatch(postEmailTC(email))
    }


    return <div>
        {redirect ? <h3 className={s.message}>We have sent you a message with a link to change your password to this address:{email}</h3> :
            <div className={s.main}>
                <h1>Укажите email или телефон</h1>
                <h3>Пожалуйста, укажите email или телефон, который вы использовали для входа на сайт</h3>
                <input onChange={onInputChange} placeholder={"Enter Email"}/>
                {error ? <div className={s.error}>{error}</div> : null}
                <button onClick={postEmail}>Next</button>
            </div>
        }
    </div>
}