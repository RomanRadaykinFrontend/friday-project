import {Dispatch} from "redux";
import {loginAPI} from "../dal/api";

export type ShowAllComponentsStateType = {
}

const initialState = {} as ShowAllComponentsStateType

export const showAllComponentsReducer = (state: typeof initialState = initialState, action: ActionType): ShowAllComponentsStateType => {
    switch (action.type) {

        default:
            return state
    }
}

//TYPES
type ActionType = any;

//AC

//THUNK
