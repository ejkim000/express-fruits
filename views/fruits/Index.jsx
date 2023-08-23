import React from "react";

function Index({ fruits }) {
  return (
    <div>
      <nav><a href="/fruits/new">Create New Fruit</a></nav>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is {fruit.color}.
              <br />
              {fruit.readyToEat
                ? "It is ready to eat."
                : "It is not ready to eat."}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
