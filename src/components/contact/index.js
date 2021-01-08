import React from 'react';
import ContactForm from '../form';

import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__header'>
        <h1 className='contact__heading'>Contactez-nous</h1>
        <p className='contact__text'>
          Veuillez remplir le formulaire ci-dessous et nous vous econtacterons
          très prochainement
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
