import React from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom';

import Login from '../views/Login';
import Task from '../views/Task';
import Register from '../views/Register';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/task" exact component={Task}/>
      </Switch>
    </BrowserRouter>
  )
}