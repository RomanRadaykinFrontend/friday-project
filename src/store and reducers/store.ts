import { createStore } from "redux";
import { applyMiddleware } from "redux";
import {combineReducers} from "redux";
import {loginReducer} from "./login-reducer";
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
    login: loginReducer
})

export type ReducersType = typeof reducers;
export type RootStateType = ReturnType<ReducersType>

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))