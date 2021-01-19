import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import googlePlay from "../../images/google-play.svg";
import appleStore from "../../images/app-store.svg";
import logo from "../../images/logo.png";

import "./footerMobile.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "auto",
    padding: "3rem 0.5rem 1.5rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
  },

  bg: {
    background: "rgba(0,0,0,0.1)",
    color: "rgb(226, 223, 223)",
  },
}));

const FooterMobile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.bg} defaultExpanded>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "rgb(226, 223, 223)" }} />
          }
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className={classes.heading}>A Propos de nous</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='footerMobile__a-propos-de-nous'>
            <div className='footerMobile__a-propos-de-nous__image-container'>
              <img src={logo} alt='logo markus' />
            </div>

            <div className='footerMobile__a-propos-de-nous__content'>
              <div className='footerMobile__a-propos-de-nous__content__headings'>
                <p>Le bras de droit des restaurateurs</p>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.bg}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "rgb(226, 223, 223)" }} />
          }
          aria-controls='panel2a-content'
          id='panel2a-header'>
          <Typography className={classes.heading}>
            Télécharger gratuitement l'application sur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='footer__telechargement footerMobile__telechargement'>
            <a href='#test'>
              <img src={googlePlay} alt='google play store' /> Google play Store
            </a>
            <a href='#test'>
              <img src={appleStore} alt='Apple store' /> Apple store
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.bg}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "rgb(226, 223, 223)" }} />
          }
          aria-controls='panel2a-content'
          id='panel2a-header'>
          <Typography className={classes.heading}>
            Prendre contact avec nous
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='footer__contacts footerMobile__contacts'>
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
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.bg}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "rgb(226, 223, 223)" }} />
          }
          aria-controls='panel2a-content'
          id='panel2a-header'>
          <Typography className={classes.heading}>Conformité</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='footer__legales'>
            <a href='#test'>Mention légales</a>
            <a href='#test'>CGU</a>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FooterMobile;
