import React from "react";

function Show({ vegetable }) {
  return (
    <>
      <h1>The {vegetable.name} is {vegetable.color}.</h1>
      <div>
        {vegetable.readyToEat ? " It's ready to eat." : " It's not ready to eat."}
      </div>
    </>
  );
}

module.exports = Show;