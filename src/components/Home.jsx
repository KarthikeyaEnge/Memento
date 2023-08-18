import React from "react";
import Headsec from "./Headsec";
import Mainsec from "./Mainsec";
const Home = () => {
  return (
    <main className="lg:min-h-screen h-auto w-screen flex flex-row flex-wrap lg:px-10 gap-2  back backdrop-blur-lg ">
      <Headsec />
      <Mainsec />
    </main>
  );
};

export default Home;
