import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Error404 from "./Error404/Error404";
import PasswordRecovery from "./PasswordRecovery/PasswordRecovery";
import EnterNewPassword from "./EnterNewPassword/EnterNewPassword";
import ShowAllComponents from "./ShowAllComponents/ShowAllComponents";
import Nav from './Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route path={'/login'} render={()=><Login/>}/>
      <Route path={'/registration'} render={()=><Registration/>}/>
      <Route path={'/404'} render={()=><Error404/>}/>
      <Route path={'/password-recovery'} render={()=><PasswordRecovery/>}/>
      <Route path={'/enter-new-password'} render={()=><EnterNewPassword/>}/>
      <Route path={'/show-all'} render={()=><ShowAllComponents/>}/>
    </div>
  );
}

export default App;
