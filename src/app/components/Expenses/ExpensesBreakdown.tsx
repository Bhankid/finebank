'use client';

import React from 'react';
import ExpenseCard, { ExpenseCardProps } from './ExpenseCard';

const ExpensesBreakdown: React.FC = () => {
  const expenses: ExpenseCardProps[] = [
    {
      icon: "fa-home",
      category: "Housing",
      amount: "$250.00",
      percentage: "15%",
      isIncrease: true,
      items: [
        { name: "House Rent", amount: "$230.00", date: "17 May 2023" },
        { name: "Parking", amount: "$20.00", date: "17 May 2023" }
      ]
    },
    {
      icon: "fa-utensils",
      category: "Food",
      amount: "$350.00",
      percentage: "08%",
      isIncrease: false,
      items: [
        { name: "Grocery", amount: "$230.00", date: "17 May 2023" },
        { name: "Restaurant bill", amount: "$120.00", date: "17 May 2023" }
      ]
    },
    {
      icon: "fa-bus",
      category: "Transportation",
      amount: "$50.00",
      percentage: "12%",
      isIncrease: false,
      items: [
        { name: "Taxi Fare", amount: "$30.00", date: "17 May 2023" },
        { name: "Metro Card bill", amount: "$20.00", date: "17 May 2023" }
      ]
    },
    {
      icon: "fa-film",
      category: "Entertainment",
      amount: "$80.00",
      percentage: "15%",
      isIncrease: false,
      items: [
        { name: "Movie ticket", amount: "$30.00", date: "17 May 2023" },
        { name: "iTunes", amount: "$50.00", date: "17 May 2023" }
      ]
    },
    {
      icon: "fa-shopping-bag",
      category: "Shopping",
      amount: "$420.00",
      percentage: "25%",
      isIncrease: true,
      items: [
        { name: "Shirt", amount: "$230.00", date: "17 May 2023" },
        { name: "Jeans", amount: "$190.00", date: "17 May 2023" }
      ]
    },
    {
      icon: "fa-ellipsis-h",
      category: "Others",
      amount: "$50.00",
      percentage: "23%",
      isIncrease: true,
      items: [
        { name: "Donation", amount: "$30.00", date: "17 May 2023" },
        { name: "Gift", amount: "$20.00", date: "17 May 2023" }
      ]
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Expenses Breakdown</h1>
      <div className="flex flex-wrap -m-2">
        {expenses.map((expense, index) => (
          <ExpenseCard key={index} {...expense} />
        ))}
      </div>
    </div>
  );
};

export default ExpensesBreakdown;
