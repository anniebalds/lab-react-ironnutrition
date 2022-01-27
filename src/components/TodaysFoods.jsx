import React from 'react';

const TodaysFoods = ({todaysFoods}) => {

    const total = todaysFoods.reduce((acc, curr)=> acc + (curr.calories * curr.quantity), 0)

  return <div>
    <h1>Today's foods</h1>

    {todaysFoods.map((food) => {
        return (
            <ul>
            <li key={food.name}>&#8729; {food.quantity} {food.name} = {food.calories * food.quantity} cal</li>
            </ul>
        )
    })}

    <h3>Total calories: {total}</h3>
  </div>;
};

export default TodaysFoods;