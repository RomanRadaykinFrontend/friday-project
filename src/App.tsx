import React, { useEffect } from 'react';
import {Redirect, Route} from 'react-router-dom';
import './App.css';
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Error404 from "./Error404/Error404";
import ShowAllComponents from "./ShowAllComponents/ShowAllComponents";
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store and reducers/store";
import { isAuthTC } from './store and reducers/login-reducer';
import {EnterNewPassword} from "./EnterNewPassword/EnterNewPassword";
import { PasswordRecovery } from './PasswordRecovery/PasswordRecovery';

function App() {

       useEffect(() => {
        dispatch(isAuthTC())
    }, [])

    const auth = useSelector<RootStateType, boolean>(state => state.login.isAuth);
    const dispatch = useDispatch();

  return (
    <div className="App">
      <Nav/>
        {!auth && <Redirect to={'/login'}/>}
      <Route path={'/login'} render={()=><Login/>}/>
      <Route path={'/registration'} render={()=><Registration/>}/>
      <Route path={'/404'} render={()=><Error404/>}/>
      <Route path={'/profile'} render={()=><Profile/>}/>
      <Route path={'/password-recovery'} render={()=><PasswordRecovery/>}/>
      <Route path={'/enter-new-password'} render={()=><EnterNewPassword/>}/>
      <Route path={'/show-all'} render={()=><ShowAllComponents/>}/>
    </div>
  );
}

export default App;
