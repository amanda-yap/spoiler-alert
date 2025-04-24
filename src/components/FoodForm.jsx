import React from 'react';

const FoodForm = ({ name, date, setName, setDate, addFood }) => (
  <div className="form">
    <input
      type="text"
      placeholder="Food name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
    <button onClick={addFood}>Add</button>
  </div>
);

export default FoodForm;
