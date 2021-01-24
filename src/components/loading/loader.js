import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import Logo from "../../images/markus.png";
import "./loading.css";
import { motion } from "framer-motion";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = () => {
      // fin du loading
      setLoading(false);
    };

    window.addEventListener("load", loader);

    return () => {
      window.removeEventListener("load", loader);
    };
  }, []);

  if (!loading) {
    // const navbar = document.getElementById('navbar');
    const loader = document.getElementById("loader");
    const app = document.querySelector(".App");

    // navbar?.classList.add('show');
    app?.classList.add("show");
    // loader?.classList.add("finished");
  }

  return ReactDom.createPortal(
    <>
      {loading ? (
        <div className='loader' id='loader'>
          <div>
            <motion.img
              variants={loaderVariants}
              initial='from'
              animate='to'
              src={Logo}
              className='img'
              alt=''
            />
          </div>
        </div>
      ) : undefined}
    </>,
    document.getElementById("portal")
  );
};

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
      delay: 1,
      duration: 0.4,
    },
  },
};

export default Loader;
