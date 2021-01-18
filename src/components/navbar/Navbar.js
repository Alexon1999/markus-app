import React, { useRef, useEffect, useMemo, useState } from "react";
import Logo from "../../imgs/logo.png";
import "./navbar.css";

import { Link, useLocation } from "react-router-dom";
import NavMobile from "./mobile/NavMobile";

import links from "../../RouteLinks";
import { smoothScroll } from "../../utilities";

const NavBar = () => {
  const nav = useRef(null);
  const [isActive, toggleActive] = useState(false);
  const location = useLocation();
  const currentPage = useMemo(() => location.pathname, [location.pathname]);

  useEffect(() => {
    function navBar() {
      const windowHeight = window.innerHeight;
      // console.log(document.documentElement.clientHeight); // pareil

      const { scrollTop } = document.documentElement;

      if (scrollTop >= windowHeight / 4) {
        nav.current.style.opacity = 0.97;
        toggleActive(true);
      } else {
        nav.current.style.opacity = 1;
      }
    }

    window.addEventListener("scroll", navBar);
    return () => {
      window.removeEventListener("scroll", navBar);
    };
  }, [isActive]);

  return (
    <nav className='navbar' ref={nav}>
      <div className='navbar__container'>
        <div className='navbar__logo-container'>
          <Link to='/'>
            <img className='navbar__logo' src={Logo} alt='Markus' />
          </Link>
        </div>
        <div className='navbar__links'>
          {links.map((link) => {
            if (link.estDansHome) {
              if (location.pathname === "/") {
                return (
                  <a
                    href='#fonctionnalites'
                    key={link.nom}
                    onClick={smoothScroll("fonctionnalites")}>
                    {link.nom}
                  </a>
                );
              }
              return undefined;
            }
            // return jsx
            return (
              <Link
                to={link.path}
                key={link.nom}
                className={
                  location.pathname === link.path ? "active" : undefined
                }>
                {link.nom}
              </Link>
            );
          })}
        </div>

        <NavMobile currentPage={currentPage} />
      </div>
    </nav>
  );
};

export default NavBar;
