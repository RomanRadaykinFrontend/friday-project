import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import { EnterNewPassword } from "../EnterNewPassword/EnterNewPassword";
import Error404 from "../Error404/Error404";
import Login from "../Login/Login";
import { PasswordRecovery } from "../PasswordRecovery/PasswordRecovery";
import Profile from "../Profile/Profile";
import {Registration} from "../Registration/Registration";
import ShowAllComponents from "../ShowAllComponents/ShowAllComponents";


export const PATH = {
    LOGIN: "/login",
    REGISTRATION: "/registration",
    PROFILE: "/profile",
    NEW_PASS : "/enter-new-password/:token",
    RESET_PASS: "/password-recovery",
    TEST: "/show-all",
}

export const Routes = () => {
    return (
        <div>
            <Switch>

                <Route path={"/"} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.NEW_PASS} render={() => <EnterNewPassword/>}/>
                <Route path={PATH.RESET_PASS} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.TEST} render={() => <ShowAllComponents/>}/>

                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}