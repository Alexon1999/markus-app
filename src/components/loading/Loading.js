import React from 'react';
import ReactDom from 'react-dom';
import Logo from '../../imgs/markus.png';
import './loading.css';
import { motion } from 'framer-motion';

const loaderVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,

    // + applique le transition pour des property specific
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      delay: 5,
      duration: 0.4,
    },
  },
};

const backdropVaraiants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.5,
      delay: 1,
      ease: 'easeOut',
    },
  },
};

const Loader = ({ isLoading }) => {
  return ReactDom.createPortal(
    <>
      {isLoading && (
        <motion.div
          variants={backdropVaraiants}
          exit='exit'
          initial='from'
          animate='to'
          className={`loader ${!isLoading && 'finished'}`}
          id='loader'>
          <div>
            <motion.img
              src={Logo}
              variants={loaderVariants}
              initial='from'
              animate='to'
              className='img'
              alt=''
            />
          </div>
        </motion.div>
      )}
    </>,

    document.getElementById('portal')
  );
};

export default Loader;
