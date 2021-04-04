import { createStore } from "redux";
import { applyMiddleware } from "redux";
import {combineReducers} from "redux";
import {loginReducer} from "./login-reducer";
import thunkMiddleware from 'redux-thunk'
import {registrationReducer} from "./registration-reducer";
import {profileReducer} from "./profile-reducer";
import { passwordRecoveryReducer } from "./password-recovery-reducer";
import {showAllComponentsReducer} from "./show-all-components-reducer";
import { enterNewPasswordReducer } from "./enter-new-password-reducer";


const reducers = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    showAllComponents: showAllComponentsReducer,
    passwordRecovery: passwordRecoveryReducer,
    enterNewPassword: enterNewPasswordReducer
})

export type ReducersType = typeof reducers;
export type RootStateType = ReturnType<ReducersType>

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))