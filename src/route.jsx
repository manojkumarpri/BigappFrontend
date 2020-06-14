import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Userlist from './components/Userlist';
import DragandDrop from './components/DragandDrop';
 const Routes =() => (
     <BrowserRouter >
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/userlist' component={Userlist}></Route>
            <Route exact path='/drag' component={DragandDrop}></Route>

           

        </Switch>
    </BrowserRouter>
 )

 export default Routes;