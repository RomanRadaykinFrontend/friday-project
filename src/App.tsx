import React, { useEffect } from 'react';
import {HashRouter, Redirect, Route} from 'react-router-dom';
import './App.css';
import Nav from './Nav/Nav';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store and reducers/store";
import { isAuthTC } from './store and reducers/login-reducer';
import {Routes} from "./routes/Routes";


function App() {

       useEffect(() => {
        dispatch(isAuthTC())
    }, [])

    //const auth = useSelector<RootStateType, boolean>(state => state.login.isAuth);
    const dispatch = useDispatch();

  return (
      <HashRouter>
          <Nav/>
          <Routes/>
      </HashRouter>
  );
}

export default App;
