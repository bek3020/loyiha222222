import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Soft from "./components/Soft";
import Sviper from "./components/Sviper";
import Our from "./components/Our";

const App = () => {
  return (
    <div className="bg-[#0C151C]">
      <Header />
      <Banner />
      <Soft />
      <Sviper />
      <Our />
    </div>
  );
};

export default App;
