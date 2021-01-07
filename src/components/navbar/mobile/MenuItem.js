import * as React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ nom, path, toggleOpen, currentPage }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      {/* <div className='icon-placeholder' style={style}></div> */}
      <Link
        onClick={toggleOpen}
        to={path}
        className={currentPage === path ? 'active' : undefined}>
        {nom}
      </Link>
    </motion.li>
  );
};
