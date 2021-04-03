import React from "react";
import { NavLink } from "react-router-dom";
import style from'./Nav.module.css'

const Nav = () => {
    return <nav className={style.nav}>
        <NavLink to={'/login'}>Login </NavLink>
        <NavLink to={'/registration'}>Registration</NavLink>
        <NavLink to={'/404'}>Error404</NavLink>
        <NavLink to={'/password-recovery'}>Password recovery</NavLink>
        <NavLink to={'/enter-new-password'}>New password</NavLink>
        <NavLink to={'/show-all'}>Show all</NavLink>
    </nav>
}

export default Nav
