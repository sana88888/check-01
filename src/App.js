import React from "react";
import "./App.css";
import Description from "./components/Description";
import Name from "./components/Name";
import Price from "./components/Price";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <Image />
      <Name />
      <Price />
      <Description />
      
    </div>
  );
}

export default App;
