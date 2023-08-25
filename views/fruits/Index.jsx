import React from "react";
const Default = require("../layout/Default");

function Index({ fruits }) {
  return (
    <Default title="Fruits Index Page">
      <nav>
        <a href="/fruits/new">Create New Fruit</a>
      </nav>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is {fruit.color}.
              <br />
              {fruit.readyToEat
                ? "It is ready to eat."
                : "It is not ready to eat."}
              <br />
              {fruit.isItGood
                ? "It is good."
                : "It is not good."}
              <form method="POST" action={`/fruits/${fruit.id}?_method=DELETE`}>
                <input type="submit" value="DELETE" />
              </form>
              <a href={`/fruits/${fruit.id}/edit`}>Edit this fruit</a>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

module.exports = Index;
