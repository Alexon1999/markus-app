import React from "react";

import "./footer.css";
import logo from "../../images/logo.png";
import googlePlay from "../../images/google-play.svg";
import appleStore from "../../images/app-store.svg";
// import { useDimensions } from "../../hooks/useDimensions";
import useWindowMatchMedia from "../../hooks/useWindowMatchMedia";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  // const footer_container_ref = useRef(null);
  // const { height, width } = useDimensions(footer_container_ref);
  const { isInTheMediaQuery } = useWindowMatchMedia(600);

  return (
    <div className='footer'>
      {!isInTheMediaQuery ? (
        <div
          className='footer__container'
          // ref={footer_container_ref}
        >
          <div className='footer__a-propos-de-nous'>
            <div className='footer__a-propos-de-nous__image-container'>
              <img src={logo} alt='logo markus' />
            </div>

            <div className='footer__a-propos-de-nous__content'>
              <div className='footer__a-propos-de-nous__content__headings'>
                <p>Le bras de droit des restaurateurs</p>
              </div>
            </div>
          </div>

          <div className='footer__telechargement'>
            <h1>Télécharger gratuitement l'application sur</h1>
            <a href='#test'>
              <img src={googlePlay} alt='google play store' /> Google play Store
            </a>
            <a href='#test'>
              <img src={appleStore} alt='Apple store' /> Apple store
            </a>
          </div>

          <div className='footer__contacts'>
            <h1>Prendre contact avec nous</h1>
            <div className='footer__contacts-content'>
              <p>
                <i className='fas fa-phone-alt'></i> 0123456789
              </p>
              <a href='mailto:azerty@gmail.com'>
                <i className='fas fa-envelope'></i> azerty@gmail.com
              </a>
              <p>
                <i className='fas fa-map-marker-alt'></i> 7 place de l'Hôtel de
                Ville 93600 Aulnay sous Bois, France
              </p>
            </div>
            <div className='footer__suivez-nous'>
              <a href='#test' target='_blank'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href='#test' target='_blank'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#test' target='_blank'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>

          <div className='footer__legales'>
            <h1>Conformité</h1>
            <a href='CGU site web Markus.pdf' target='_blank'>
              CGU &amp; Mention légales
            </a>
          </div>
        </div>
      ) : (
        <FooterMobile />
      )}
    </div>
  );
};

export default Footer;
