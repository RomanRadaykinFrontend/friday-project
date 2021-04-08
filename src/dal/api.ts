import axios from "axios";
import {LoginResponseType, LogoutResponseType} from "../Common/Types";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true
})

type ErrorType = {
    email: string
    error: string
    in: string
}

export const loginAPI = {
    login(password: string, email: string, rememberMe: boolean){
        return instance.post<LoginResponseType>('auth/login', {password, email, rememberMe})
    },
    isAuth(){
        return instance.post<LoginResponseType>('auth/me', {})
    },
    logOut(){
        return instance.delete<LogoutResponseType>('auth/me', {})
    }
}

export const registrationAPI = {
    registration(email: string, password: string) {
        return instance.post<any | ErrorType>('/auth/register', {email, password})
    }
}
export const newPasswordAPI = {
    postNewPassword(password:string,resetPasswordToken:string) {
        return instance.post(`auth/set-new-password`, {password,resetPasswordToken}).then(response => response.data)
    }
}
export const lostPasswordAPI = {
    postEmail(email: string) {
        return instance.post(`auth/forgot`, {email, from: "cards-admin <valdismin@gmail.com>", message: `<div style="background-color: lime; padding: 15px"> password recovery link: <a href='https://Valdismin.github.io/cards/#/new-pass/$token$'>link</a></div>`}).then(response => response.data)
    }
}