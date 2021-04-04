import {Dispatch} from "redux";
import {loginAPI} from "../dal/api";

export type ProfileStateType = {
}

const initialState = {} as ProfileStateType

export const profileReducer = (state: typeof initialState = initialState, action: ActionType): ProfileStateType => {
    switch (action.type) {

        default:
            return state
    }
}

//TYPES
type ActionType = any;

//AC

//THUNK

