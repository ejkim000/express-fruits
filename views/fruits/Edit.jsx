import React from "react";
import Default from "../layout/Default";

function Edit({ fruit }) {
  return (
    <Default title="Edit Fruit">
      <form action={`/fruits/${fruit.id}?_method=PUT`} method="post">
        Name:
        <input type="text" name="name" defaultValue={fruit.name} /> <br />
        Color:
        <input type="text" name="color" defaultValue={fruit.color} /> <br />
        Is Ready To Eat?
        {fruit.readyToEat ? (
          <input type="checkbox" name="readyToEat" defaultChecked />
        ) : (
          <input type="checkbox" name="readyToEat" />
        )}
        <br />
        Is It Good?
        {fruit.isItGood ? (
          <input type="checkbox" name="isItGood" defaultChecked />
        ) : (
          <input type="checkbox" name="isItGood" />
        )}
        <br />
        <input type="submit" value="Edit Fruit" />
      </form>
    </Default>
  );
}

module.exports = Edit;
