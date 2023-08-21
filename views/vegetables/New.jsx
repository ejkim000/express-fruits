import React, { useState, useEffect } from "react";

function New() {
  return (
    <div>
      <h1>Create a new vegetable</h1>
      <form action="/vegetables">
        Name: <input type="text" name="name" /> <br />
        Color: <input type="text" name="color" /> <br />
        Eatable: <input type="checkbox" name="readyToEat" /> <br />
        <input type="submit" value="Create New" />
      </form>
    </div>
  );
}

module.exports = New;
