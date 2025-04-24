import React, { useState, useEffect } from 'react';
import FoodForm from './components/FoodForm';
import FoodItem from './components/FoodItem';
import './App.css';

function App() {
  const [foodList, setFoodList] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  // Load food list from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('foodList'));
    if (saved) setFoodList(saved);
  }, []);

  // Save food list to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('foodList', JSON.stringify(foodList));
  }, [foodList]);

  // Add new food item
  const addFood = () => {
    if (!name || !date) return;
    const newItem = { name, date };
    setFoodList([...foodList, newItem]);
    setName('');
    setDate('');
  };

  const deleteFood = (indexToDelete) => {
	const updatedList = foodList.filter((_, i) => i !== indexToDelete);
	setFoodList(updatedList);
  };

  return (
    <div className="App">
      <h1>Spoiler Alert</h1>

      <FoodForm
        name={name}
        date={date}
        setName={setName}
        setDate={setDate}
        addFood={addFood}
      />

      <ul className="food-list">
        {foodList.map((food, index) => (
          <FoodItem key={index} food={food} onDelete={() => deleteFood(index)}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
