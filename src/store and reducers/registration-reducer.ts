import {Dispatch} from "redux";
import {loginAPI} from "../dal/api";

export type RegistrationStateType = {
}

const initialState = {} as RegistrationStateType

export const registrationReducer = (state: typeof initialState = initialState, action: ActionType): RegistrationStateType => {
    switch (action.type) {

        default:
            return state
    }
}

//TYPES
type ActionType = any;

//AC

//THUNK
