import {Dispatch} from "redux";
import {LoginPostType, LoginResponseType} from "../Common/Types";
import {loginAPI} from "../dal/api";

export type LoginStateType = {
    isAuthorized: boolean
    errorMessage: string
    isFetching: boolean
    data: LoginResponseType
}

const initialState = {} as LoginStateType

export const loginReducer = (state: typeof initialState = initialState, action: ActionType): LoginStateType => {
    switch (action.type) {
        case 'SET-DATA':
            return {
                ...state,
                data: action.payload.data
            }
        case "SET-ERROR":
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
            }
        case "IS-FETCHING":
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        case 'SET-AUTHORIZED':
            return  {
                ...state,
                isAuthorized: action.payload.isAuthorized
            }
        default:
            return state
    }
}

//TYPES
type ActionType = ReturnType<typeof setDataAC> | ReturnType<typeof setErrorAC>
    | ReturnType<typeof isFetchingAC> | ReturnType<typeof setAuthorizedAC>


//AC
const setDataAC = (data: LoginResponseType) => (
    {
        type: 'SET-DATA',
        payload: {
            data: {...data}
        }
    } as const
)

const setErrorAC = (errorMessage: string) => (
    {
        type: 'SET-ERROR',
        payload: {
            errorMessage
        }
    } as const
)

const isFetchingAC = (isFetching: boolean) => (
    {
        type: 'IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
)

const setAuthorizedAC = (isAuthorized: boolean) => (
    {
        type: 'SET-AUTHORIZED',
        payload: {
            isAuthorized
        }
    } as const
)

//THUNK
export const loginTC = (password: string, email: string, rememberMe: boolean) => (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetchingAC(true))
    loginAPI.login(password, email, rememberMe)
        .then(res => {
            dispatch(setDataAC(res.data))
            dispatch(setAuthorizedAC(true))
            dispatch(isFetchingAC(false))
        })
        .catch((error: string) => {
            dispatch(setErrorAC(error))
            dispatch(setAuthorizedAC(false))
            dispatch(isFetchingAC(false))
        })
}
