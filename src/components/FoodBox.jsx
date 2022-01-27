import React from 'react';
import { useState } from "react";

const FoodBox = ({food, addToList}) => {

  const [foodQuantity, setFoodQuantity] = useState(1)

  return (
    <div className="box" key={food.name}>
    <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} alt={food.name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={foodQuantity} onChange={(e) => setFoodQuantity(e.target.value)}/>
        </div>
        <div className="control">
          <button onClick={() => addToList(food.name, food.calories, foodQuantity)} className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
  </div>

  )
};

export default FoodBox;