'use client';

import React from 'react';
import { 
  FaHome, 
  FaUtensils, 
  FaBus, 
  FaFilm, 
  FaShoppingBag, 
  FaThLarge 
} from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

interface ExpenseCategory {
  name: string;
  icon: React.ReactNode;
  amount: string;
}

interface ExpenseGoalsProps {
  onAdjust?: (categoryName: string) => void;
}

const ExpenseGoals: React.FC<ExpenseGoalsProps> = ({ 
  onAdjust = (categoryName) => console.log(`Adjust ${categoryName}`) 
}) => {
  const categories: ExpenseCategory[] = [
    { name: 'Housing', icon: <FaHome className="text-2xl text-gray-600" />, amount: '$250.00' },
    { name: 'Food', icon: <FaUtensils className="text-2xl text-gray-600" />, amount: '$250.00' },
    { name: 'Transportation', icon: <FaBus className="text-2xl text-gray-600" />, amount: '$250.00' },
    { name: 'Entertainment', icon: <FaFilm className="text-2xl text-gray-600" />, amount: '$250.00' },
    { name: 'Shopping', icon: <FaShoppingBag className="text-2xl text-gray-600" />, amount: '$250.00' },
    { name: 'Others', icon: <FaThLarge className="text-2xl text-gray-600" />, amount: '$250.00' },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-gray-400">Expenses Goals by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div className="flex items-center">
              <div className="bg-gray-200 p-3 rounded-lg mr-4">
                {category.icon}
              </div>
              <div>
                <h2 className="text-gray-600">{category.name}</h2>
                <p className="text-black font-bold">{category.amount}</p>
              </div>
            </div>
            <button 
              className="flex items-center text-teal-600 border border-teal-600 rounded-lg px-3 py-1 hover:bg-teal-50 transition-colors"
              onClick={() => onAdjust(category.name)}
            >
              Adjust <FaPen className="ml-2 cursor-pointer" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseGoals;
