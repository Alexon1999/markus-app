import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Fonctionnalites from "./components/fonctionnalites/Fonctionnalites";
import NavBar from "./components/navbar/Navbar";
import NotFoundPage from "./components/NotFoundPage";
import Contact from "./components/contact";
import Admin from "./components/admin";
import Footer from "./components/footer/Footer";
import Telecharger from "./components/telecharger/telechargement";
import Presentation from "./components/presentation/Presentation";
import datas from "./components/fonctionnalites/data";
import About from "./components/about/About";

const Routing = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path='/'>
            <Home />
            <Presentation />
            {/* fonctionnalites */}
            {datas.map((data) => (
              <Fonctionnalites key={data.titre} {...data} />
            ))}

            <About />
          </Route>
          {/* <Route exact path='/fonctionnalites' component={Fonctionnalites} /> */}
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/telecharger' component={Telecharger} />
          <Route exact path='/laurent-magaye-markus93160' component={Admin} />
          <Route exact component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Routing;
