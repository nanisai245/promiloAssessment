import Home from "./components/Home";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import { useState } from "react";
import "./App.css";
import NavPopUp from "./components/navigationPopUp/NavPopUp";
import Footer from "./components/footer/Footer";

function App() {
  const [currState, setCurrState] = useState(false);

  function handleClick() {
    setCurrState((prev) => !prev);
  }

  return (
    <>
      {currState && (
        <div className="nav-pop">
          <NavPopUp handleSelect={handleClick} />
        </div>
      )}
      <MainNavigation handleSelect={handleClick} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
