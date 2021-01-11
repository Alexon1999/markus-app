import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

import links from "../../../RouteLinks";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggleOpen, currentPage }) => (
  <motion.ul variants={variants}>
    {links.map(({ path, nom, estDansHome }) => {
      if (!estDansHome) {
        return (
          <MenuItem
            toggleOpen={toggleOpen}
            key={nom}
            path={path}
            nom={nom}
            currentPage={currentPage}
            estDansHome={estDansHome}
          />
        );
      }
      return undefined;
    })}
  </motion.ul>
);
