import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/loading/Loading";
import { AnimatePresence } from "framer-motion";
import Routing from "./Routing";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = () => {
      // setTimeout(() => {
      //   setLoading(false);
      // }, 1000);
      //   // fin du loading
      setLoading(false);
    };

    window.addEventListener("load", loader);

    return () => {
      window.removeEventListener("load", loader);
    };
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <Loader isLoading={loading} />
        ) : (
          <div className='App'>
            <div className='app_container'>
              <Routing />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
