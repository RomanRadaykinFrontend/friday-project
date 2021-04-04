import {Dispatch} from "redux";
import {loginAPI} from "../dal/api";

export type EnterNewPasswordStateType = {
}

const initialState = {} as EnterNewPasswordStateType

export const enterNewPasswordReducer = (state: typeof initialState = initialState, action: ActionType): EnterNewPasswordStateType => {
    switch (action.type) {

        default:
            return state
    }
}

//TYPES
type ActionType = any;

//AC

//THUNK
