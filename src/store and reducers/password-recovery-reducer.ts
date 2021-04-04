import {Dispatch} from "redux";
import {loginAPI} from "../dal/api";

export type PasswordRecoveryStateType = {
}

const initialState = {} as PasswordRecoveryStateType

export const passwordRecoveryReducer = (state: typeof initialState = initialState, action: ActionType): PasswordRecoveryStateType => {
    switch (action.type) {

        default:
            return state
    }
}

//TYPES
type ActionType = any;

//AC

//THUNK
