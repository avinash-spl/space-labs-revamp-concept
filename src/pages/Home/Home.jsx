import React from "react";
import HeroSection from "./components/Hero/HeroSection";
import HeroFooter from "./components/HeroFooter/HeroFooter";
import FeaturedSystems from "./components/FeaturedSystems/FeaturedSystems";
import ObjectiveSection from "./components/Objective/ObjectiveSection";
import OurMission from "./components/OurMission/OurMission";
import Parallax1 from "./components/Parallax1/Parallax1";
import OurTeam from "./components/OurTeam/OurTeam";
import LifeAt from "./components/LifeAt/LifeAt";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HeroFooter />
      <FeaturedSystems />
      <ObjectiveSection />
      <Parallax1 />
      <OurMission />
      <OurTeam />
      <LifeAt />
    </main>
  );
};

export default Home;
