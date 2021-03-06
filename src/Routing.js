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
import NavBarContextProvider from "./contexts/Navbar/NavBarState";
import Politique from "./components/politique/Politique";

const Routing = () => {
  return (
    <>
      <Router>
        <NavBarContextProvider>
          <NavBar />
        </NavBarContextProvider>

        <Switch>
          <Route exact path='/'>
            <Home />
            <Presentation />
            {/* fonctionnalites */}
            {datas.map((data, i) => (
              <Fonctionnalites key={data.titre} num={i} {...data} />
            ))}

            <About />
            <Telecharger />
            <Contact />
          </Route>
          {/* <Route exact path='/fonctionnalites' component={Fonctionnalites} /> */}
          {/* <Route exact path='/contact' component={Contact} />
          <Route exact path='/telecharger' component={Telecharger} /> */}
          <Route exact path='/laurent-magaye-markus93160' component={Admin} />
          <Route exact path='/cgu' component={Politique} />
          <Route exact component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Routing;
