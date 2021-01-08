import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Fonctionnalites from './components/fonctionnalites/Fonctionnalites';
import NavBar from './components/navbar/Navbar';
import NotFoundPage from './components/NotFoundPage';
import Contact from './components/contact';

const Routing = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/fonctionnalites' component={Fonctionnalites} />
          <Route exact path='/contact' component={Contact} />
          <Route exact component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
