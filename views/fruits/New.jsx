import React from 'react';

function New() {
  return (
    <div>
        <h1>New Fruit Page</h1>
        <form action="/fruits" method="post">
            Name: <input type="text" name="name" /> <br />
            Color: <input type="text" name="color" /> <br />
            Is Ready To Eat? <input type="checkbox" name="readyToEat" /> <br />
            Is It Good? <input type="checkbox" name="isItGood" /> <br />
            <input type="submit" value="Create Fruit" />
        </form>
    </div>
  )
}

module.exports = New;