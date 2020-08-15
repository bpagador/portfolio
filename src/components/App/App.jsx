import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from '../header/Header';
import Projects from '../projects/Projects';
import NavBar from '../nav/NavBar';
import Contact from '../contact/Contact';
import BonusTracks from '../bonus/BonusTracks';
import Home from '../home/Home';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/bonus' component={BonusTracks} />
      </Switch>
      <NavBar />
    </Router>
  );
  
}
  
