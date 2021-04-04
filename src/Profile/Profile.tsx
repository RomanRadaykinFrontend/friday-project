import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store and reducers/store";
import {logoutTC} from "../store and reducers/login-reducer";
import {Redirect} from "react-router-dom";

const Profile = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector<RootStateType, boolean>(state => state.login.isAuth);
    const fetch = useSelector<RootStateType, boolean>(state => state.app.isFetching);

    const logout = () => {
        dispatch(logoutTC())
    }

    if(!isAuth){
        return <Redirect to={'/login'}/>
    }

    return <div>
        Profile
        <button onClick={logout}>logout</button>
    </div>
}

export default Profile
