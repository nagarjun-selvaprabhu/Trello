import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Login';
import Home from '../Home'
import FormsHome from '../components/FormsHome'

class Routes extends React.Component {
  render(){
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/form" component={FormsHome} />
          {/* <Route path="/workdone" component={WorkDone} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}
}

export default Routes;
