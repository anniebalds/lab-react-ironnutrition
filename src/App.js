import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsOrigin from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodaysFoods from './components/TodaysFoods';
import { useState } from "react";


function App() {

  const [foods, setFoods] = useState(foodsOrigin);
  const [searchedString, setSearchedString] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [todaysFoods, setTodaysFoods] = useState([]);
  


  const addFood = (food) => {
  setFoods([...foods, food]);
  setIsClicked(!isClicked)
}

  let searchedFoods = null;
  if (searchedString !== '') {
    searchedFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedFoods = foods;
  }

  const addToList = (name, calories, foodQuantity) => {
    const todayItem = {name, calories, quantity: foodQuantity};


//---------------1st group attempt unfinished

    // const groupedFoods = [...todaysFoods]

    // const foodUpdate = groupedFoods.filter(food => food.name === todayItem.name)

    // if (foodUpdate) {
    //   foodUpdate.calories += todayCalories
    //   foodUpdate.quantity += todayItem.quantity
    // }
//---------------2nd group attempt unfinished
    //const todayCalories = todayItem.calories * todayItem.quantity
    // for (let i=0; i<groupedFoods.length; i++) {
    //   console.log(groupedFoods[i].name, todayItem.name)
    //   if (todayItem.name === groupedFoods[i].name) {
    //       //groupedFoods[i].calories += todayItem.calories * todayItem.quantity;
    //       //groupedFoods[i].quantity += todayItem.quantity

    //       let newObject = groupedFoods[i]
    //       newObject.calories += todayItem.calories
    //       newObject.quantity += todayItem.quantity
    //       newObject = todayItem
    //   }
    //   console.log(groupedFoods[i].calories, todayItem.calories)
    // }
    // console.log('grouped foods', groupedFoods)

    setTodaysFoods([...todaysFoods, todayItem])

  }





  return (
  <div className="App">

    <Search 
      searchedString={searchedString}
      callbackSearch={setSearchedString}
    />

    <button onClick={() => setIsClicked(!isClicked)}>Add food item</button>
    {isClicked && (
      <Form addFood={addFood}/>
    )}
    
    <div class='bodycontainer'>
    <div className='wholebox'>
    {searchedFoods.map((food) => {
    return (
      <FoodBox food={food} addToList={addToList}  />
    )
    })}
    </div>

    <TodaysFoods todaysFoods={todaysFoods}  />
    </div>
  </div>
  );
}

export default App;