import React from 'react';
import { useState } from "react";

const Form = ({addFood}) => {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      const food = {name, calories, image};
      addFood(food)
      console.log(food)
  };

  return  (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
				type="text"
				name="name"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

      <label htmlFor='calories'>Calories</label>
      <input
				type="number"
				name="calories"
				id="calories"
				value={calories}
				onChange={(e) => setCalories(e.target.value)}
			/>

      <label htmlFor='image'>Image</label>
      <input
				type="text"
				name="image"
				id="image"
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>
      <button>Add food item</button>
    </form>
  )
};


export default Form;