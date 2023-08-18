import React from "react";

function Show({ fruit }) {
  return (
    <>
      <h1>The {fruit.name} is {fruit.color}.</h1>
      <div>
        {fruit.readyToEat ? " It's ready to eat." : " Ew Yuck!"}
      </div>
    </>
  );
}

module.exports = Show;