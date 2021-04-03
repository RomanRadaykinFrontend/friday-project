import axios from "axios";
import {LoginPostType, LoginResponseType} from "../Common/Types";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true
})

export const loginAPI = {
    login(password: string, email: string, rememberMe: boolean){
        return instance.post<LoginResponseType>('auth/login', {password, email, rememberMe})
    }
}