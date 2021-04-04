import {Dispatch} from "redux";
import {loginAPI} from "../dal/api";

export type AppStateType = {
    isFetching: boolean
}

const initialState = {} as AppStateType

export const appReducer = (state: typeof initialState = initialState, action: ActionType): AppStateType => {
    switch (action.type) {
        case 'IS-FETCHING':
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        default:
            return state
    }
}

//TYPES
type ActionType = ReturnType<typeof isFetchingAC>;

//AC
export const isFetchingAC = (isFetching: boolean) => ({
    type: 'IS-FETCHING',
    payload: {isFetching}
} as const)

//THUNK
