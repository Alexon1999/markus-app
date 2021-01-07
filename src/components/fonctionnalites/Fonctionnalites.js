import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './fonctionnalites.css';

import Smartphone from '../../imgs/smartphone.png';

const Fonctionnalites = () => {
  return (
    <div className='fonctionnalites'>
      <h1 className='fonctionnalites__heading'>
        EKTOR est directement relié à votre caisse enregistreuse
      </h1>
      <div className='fonctionnalites__container'>
        <div className='fonctionnalites__content'>
          <div>
            <p className='fonctionnalites__nom'>
              <CheckCircleIcon
                className='fonctionnalites__icon'
                style={{ fontSize: 50 }}
              />
              Trans
            </p>
            <p className='fonctionnalites__nom'>
              <CheckCircleIcon
                className='fonctionnalites__icon'
                style={{ fontSize: 50 }}
              />
              Piloter la performance de votre établissement
            </p>
          </div>
        </div>

        <div className='fonctionnalites__smartphone'>
          <img src={Smartphone} alt='smartphone' />
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalites;
