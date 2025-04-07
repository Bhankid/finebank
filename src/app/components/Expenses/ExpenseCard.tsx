'use client';

import React from 'react';

export interface ExpenseItem {
  name: string;
  amount: string;
  date: string;
}

export interface ExpenseCardProps {
  icon: string;
  category: string;
  amount: string;
  percentage: string;
  isIncrease: boolean;
  items: ExpenseItem[];
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ 
  icon, 
  category, 
  amount, 
  percentage, 
  isIncrease, 
  items 
}) => (
  <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 m-2">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="bg-gray-200 p-2 rounded-full">
          <i className={`fas ${icon} text-gray-600`}></i>
        </div>
        <div className="ml-2">
          <h2 className="text-gray-600">{category}</h2>
          <h3 className="text-2xl font-bold">{amount}</h3>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">
          {percentage} {isIncrease ? 
            <i className="fas fa-arrow-up text-red-500"></i> : 
            <i className="fas fa-arrow-down text-green-500"></i>
          }
        </p>
        <p className="text-xs text-gray-400">Compare to last month</p>
      </div>
    </div>
    <div>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <p className="text-gray-600">{item.name}</p>
          <div className="text-right">
            <p className="text-gray-600">{item.amount}</p>
            <p className="text-xs text-gray-400">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ExpenseCard;
