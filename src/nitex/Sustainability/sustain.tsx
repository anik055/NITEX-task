import React from "react";
import Slide from "react-reveal/Slide";

export default function Sustain() {
  return (
    <div className="sustain-wrapper">
      <div className="container ">
        <img
          className="zoom-image"
          src="https://nitex.com/wp-content/uploads/2022/10/Sustainable-materials-from-natural-resources.png"
          alt=""
        />
      </div>
      <div className="child">
        <h1>Sustainability Begins At The Core</h1>
        <Slide bottom>
          <h2>
            We craft well-forecasted & unique designs for household brands,
            using organic & sustainable materials from the outset
          </h2>
        </Slide>
      </div>
    </div>
  );
}
