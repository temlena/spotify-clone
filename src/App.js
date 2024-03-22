import React from "react";
import  Header from "./components/Header";
import GetPremium from "./components/Hero";
import PremiumBenefits from "./components/PremiumBenefits";
import Plans from "./components/Plans";
const App = () => {
  return (
    <div>
      <Header />
      <GetPremium />
      <PremiumBenefits/>
      <Plans/>
    </div>
  );
};

export default App;
