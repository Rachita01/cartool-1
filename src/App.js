import React from 'react';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import ServiceInfo from './components/serviceinfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsForm from './components/details';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/logout" component={Logout} />
        <Route exact path="/serviceinfo" component={ServiceInfo}/>
        <Route exact path="/details" component={DetailsForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
