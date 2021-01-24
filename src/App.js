import React from "react";
import "./App.css";
import Loader from "./components/loading/loader";
import Routing from "./Routing";

function App() {
  return (
    <div className='App'>
      {/* <Loader /> */}
      <div className='app_container'>
        <Routing />
      </div>
    </div>
  );
}

export default App;
