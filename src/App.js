import React from "react";
import "./App.css";

import Carousel from "./components/carousel/Carousel";
import Card from "./components/card/Card";
import carouselArray from "./assets/data/carouselData";

function App() {
  return (
    <div className="App">
      <Carousel>
        {carouselArray.map((c, index) => {
          return (
            <Card
              heading={c.heading}
              subHeading={c.subHeading}
              para={c.para}
              img={c.img}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default App;
