import React, { useState, useEffect } from "react";

function New() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [eatable, setEatable] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleChangeColor = (e) => {
    setColor(e.target.value);
    console.log(color);
  };

  const handleEatable = (e) => {
    setEatable(e.target.checked);
    console.log(eatable);
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert('clicked!')
  };


  useEffect(() => {
    console.log(name, color, eatable);
  }, [])
  

  return (
    <div>
      <h1>Create a new vegetable</h1>
      <form>
        Name: <input type="text" onChange={handleChangeName} value={name} /> <br />
        Color: <input type="text" onChange={handleChangeColor} value={color} /> <br />
        Eatable: <input type="checkbox" onChange={handleEatable} checked={eatable} /> <br />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

module.exports = New;
