import React from "react";
import { NavLink } from "react-router-dom";
import style from'./Nav.module.css'
import {PATH} from "../routes/Routes";

const Nav = () => {
    return <nav className={style.nav}>
        <NavLink to={PATH.LOGIN}>Login </NavLink>
        <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
        <NavLink to={PATH.PROFILE}>Profile</NavLink>
        <NavLink to={PATH.RESET_PASS}>Password recovery</NavLink>
        <NavLink to={PATH.NEW_PASS}>New password</NavLink>
        <NavLink to={PATH.TEST}>Show all</NavLink>
    </nav>
}

export default Nav
