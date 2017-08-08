import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Contact from './contact';
import SignUp from './signup';

export default () => (
  <Switch>
    <Route path="/contact" exact component={Contact}/>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    <Route component={NotFound} />
  </Switch>
);
