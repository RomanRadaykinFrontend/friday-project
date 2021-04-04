import {Dispatch} from "redux";
import {LoginPostType, LoginResponseType} from "../Common/Types";
import {loginAPI} from "../dal/api";
import { isFetchingAC } from "./app-reducer";

export type LoginStateType = {
    isAuth: boolean
    errorMessage: string
    data: LoginResponseType
}

const initialState = {} as LoginStateType

export const loginReducer = (state: typeof initialState = initialState, action: ActionType): LoginStateType => {
    switch (action.type) {
        case 'SUCCESS-LOGIN':
            return {
                ...state,
                isAuth: action.payload.isAuth,
                data: action.payload.data,
                errorMessage: ''
            }
        case "FAILED-LOGIN":
            return {
                ...state,
                isAuth: action.payload.isAuth,
                errorMessage: action.payload.errorMessage,
            }
        case 'SUCCESS-LOGOUT':
            return {
                ...state,
                isAuth: action.payload.isAuth,
            }
        default:
            return state
    }
}

//TYPES
type ActionType = ReturnType<typeof successLoginAC> | ReturnType<typeof failedLoginAC>
    | ReturnType<typeof isFetchingAC>
    | ReturnType<typeof successLogoutAC>

//AC
const successLoginAC = (data: LoginResponseType, isAuth: boolean, errorMessage: string) => (
    {
        type: 'SUCCESS-LOGIN',
        payload: {
            data: {...data},
            isAuth,
            errorMessage
        }
    } as const
)

const failedLoginAC = (errorMessage: string, isAuth: boolean) => (
    {
        type: 'FAILED-LOGIN',
        payload: {
            errorMessage,
            isAuth
        }
    } as const
)

const successLogoutAC = (isAuth: boolean) => (
    {
        type: 'SUCCESS-LOGOUT',
        payload: {
            isAuth
        }
    } as const
)

//THUNK

export const isAuthTC = () => (dispatch: Dispatch<ActionType>) => {
    loginAPI.isAuth()
        .then(res => {
            debugger
            dispatch(successLoginAC(res.data, true, ''))
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(failedLoginAC(error, false))
        })
}
export const loginTC = (password: string, email: string, rememberMe: boolean) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    loginAPI.login(password, email, rememberMe)
        .then(res => {
            dispatch(successLoginAC(res.data, true, ''))
            dispatch(isFetchingAC(false))
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(failedLoginAC(error, false))
            dispatch(isFetchingAC(false))
        })
}

export const logoutTC = () => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    loginAPI.logOut()
        .then(res => {
            dispatch(successLogoutAC(false))
            dispatch(isFetchingAC(false))
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(failedLoginAC(error, false))
            dispatch(isFetchingAC(false))
        })
}

