import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Contact from './contact';
//import SignUp from './signup'; demo sigup form
import Signup from './containers/Signup';
import AppliedRoute from './components/AppliedRoute';

export default ({ childProps }) => (
  <Switch>
    <Route path="/contact" exact component={Contact}/>
    <Route path="/" exact component={Home}  />
    <AppliedRoute path="/login" exact component={Login}  props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <Route component={NotFound} />
  </Switch>
);
