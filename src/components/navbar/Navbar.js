import React, { useRef, useEffect, useMemo, useState } from "react";
import Logo from "../../images/logo.png";
import "./navbar.css";

import { Link, useLocation } from "react-router-dom";
import NavMobile from "./mobile/NavMobile";

import links from "../../RouteLinks";
import { debounce, isIntersecting, smoothScroll } from "../../utilities";
import { useNavBarStateValue } from "../../contexts/Navbar/NavBarState";
import { SET_ACTIVE } from "../../contexts/Navbar/actiontypes";

const NavBar = () => {
  const nav = useRef(null);
  const location = useLocation();
  const currentPage = useMemo(() => location.pathname, [location.pathname]);
  // const [activeButton, setActiveButton] = useState("home");
  const { state, dispatch } = useNavBarStateValue();

  useEffect(() => {
    function navBar() {
      const windowHeight = window.innerHeight;
      // console.log(document.documentElement.clientHeight); // pareil

      const { scrollTop } = document.documentElement;

      if (scrollTop >= windowHeight / 4) {
        nav.current.style.opacity = 0.97;
      } else {
        nav.current.style.opacity = 1;
      }
    }

    window.addEventListener(
      "scroll",
      debounce(() => {
        navBar();

        state.forEach((link) => {
          if (isIntersecting(link.id)) {
            dispatch({
              id: link.id,
              type: SET_ACTIVE,
            });
          }
        });
      }, 1000)
    );
    return () => {
      window.removeEventListener("scroll", navBar);
    };
  }, []);

  const IsActiveButton = (id) => (e) => {
    // setActiveButton(id);
    dispatch({
      id,
      type: SET_ACTIVE,
    });
    smoothScroll(id)(e);
  };

  return (
    <nav className='navbar' ref={nav}>
      <div className='navbar__container'>
        <div className='navbar__logo-container'>
          {location.pathname === "/" ? (
            <a href='#home' onClick={IsActiveButton("home")}>
              <img className='navbar__logo' src={Logo} alt='Markus' />
            </a>
          ) : (
            <Link to='/'>
              <img className='navbar__logo' src={Logo} alt='Markus' />
            </Link>
          )}
        </div>
        <div className='navbar__links'>
          {state.map((link) => {
            if (link.estDansHome) {
              if (location.pathname === "/") {
                return (
                  <a
                    href={"#" + link.id}
                    key={link.nom}
                    className={link.active ? "active" : undefined}
                    onClick={IsActiveButton(link.id)}>
                    {link.nom}
                  </a>
                );
              }
              return undefined;
            }
            return undefined;
            // return jsx
            // return (
            //   <Link
            //     to={link.path}
            //     key={link.nom}
            //     className={
            //       location.pathname === link.path ? "active" : undefined
            //     }>
            //     {link.nom}
            //   </Link>
            // );
          })}
        </div>

        <NavMobile
          currentPage={currentPage}
          IsActiveButton={IsActiveButton}
          // activeButton={activeButton}
        />
      </div>
    </nav>
  );
};

export default NavBar;
