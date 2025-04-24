import React from 'react';

const FoodItem = ({ food, onDelete }) => {
  const isExpired = (date) => {
    const today = new Date().toISOString().split('T')[0];
    return date < today;
  };

  return (
    <li className={isExpired(food.date) ? 'expired' : ''}>
      {food.name} - expires on {food.date}
      <button className="delete-btn" onClick={onDelete}>🗑️</button>
    </li>
  );
};

export default FoodItem;
