import axios from "axios";
import {LoginResponseType, LogoutResponseType} from "../Common/Types";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true
})

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