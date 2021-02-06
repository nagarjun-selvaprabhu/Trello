import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Login';
import Home from '../Home'
import FormsHome from '../components/FormsHome'
import WorkLog from '../components/WorkLog'

class Routes extends React.Component {
  render(){
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/form" component={FormsHome} />
          <Route path="/work" component={WorkLog} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
}

export default Routes;
