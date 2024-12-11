import React from "react";
import { useState } from "react";

const StateHold = () => {
  const [car, setCar] = useState({
    Name: "Honda",
    Brand: "Hondaxr",
    Color: "Black",
    MFD: "2024",
  });
  return (
    <div>
      <h1>I have a {car.Name}</h1>
      <p>
        Thats color is {car.Color} and its model is {car.Model} its manufacture
        in {car.MFD}
      </p>
      {/* <button
        onClick={setCar({
          Name: "Ford",
          Model: "Mustang",
          MFD: "1964",
          Color: "red",
        })}
      ></button> */}
    </div>
  );
};

export default StateHold;
