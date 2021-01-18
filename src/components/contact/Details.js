import React from "react";

import "./contactdetails.css";

import Card from "../card/Card";

import MapIcon from "@material-ui/icons/Map";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const datas = [
  {
    id: 1,
    nom: "Adresse",
    content: [
      "CEOS TECH",
      "7 place de l'Hôtel de Ville",
      "93600 Aulnay sous Bois",
      "France",
    ],
    icone: MapIcon,
  },

  {
    id: 2,
    nom: "Téléphone",
    content: ["(+33) 615244088"],
    icone: PhoneAndroidIcon,
  },

  {
    id: 3,
    nom: "Email",
    content: ["Laurentgoulenok@gmail.com"],
    icone: MailOutlineIcon,
  },
  {
    id: 4,
    content: [
      <a href='#test' target='_blank'>
        <i className='fab fa-facebook'></i>
      </a>,
      <a href='#test' target='_blank'>
        <i className='fab fa-twitter'></i>
      </a>,
      <a href='#test' target='_blank'>
        <i className='fab fa-linkedin-in'></i>
      </a>,
    ],
  },
];

const ContactDetails = () => {
  return (
    <div className='contact-details'>
      {datas.map((data) => (
        <Card {...data} key={data.id} />
      ))}
    </div>
  );
};

export default ContactDetails;
