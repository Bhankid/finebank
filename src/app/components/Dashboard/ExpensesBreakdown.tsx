'use client';

import Image from 'next/image';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface ExpenseCardProps {
  icon: string;
  category: string;
  amount: string;
  percentage: string;
  trend: 'up' | 'down';
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({
  icon,
  category,
  amount,
  percentage,
  trend,
}) => (
  <div className="flex items-center justify-between p-4 w-full relative gap-4 sm:gap-6">
    <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full w-12 h-12 flex items-center justify-center">
      <Image
        src={icon}
        alt={`${category} icon`}
        width={28}
        height={28}
        className="object-contain w-8 h-8"
      />
    </div>
    <div className="flex flex-col flex-grow">
      <div className="text-gray-500 text-sm">{category}</div>
      <div className="text-lg font-bold">{amount}</div>
      <div className="text-sm text-gray-400">{percentage}</div>
    </div>
    <div
      className={`flex items-center text-sm font-medium ${
        trend === 'up' ? 'text-green-500' : 'text-red-500'
      }`}
    >
      {trend === 'up' ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
      {percentage}
    </div>
  </div>
);

interface Expense {
  icon: string;
  category: string;
  amount: string;
  percentage: string;
  trend: 'up' | 'down';
}

interface ExpensesBreakdownProps {
  expenses?: Expense[];
  className?: string;
}

const ExpensesBreakdown: React.FC<ExpensesBreakdownProps> = ({
  expenses = [
    {
      icon: '/home.png',
      category: 'Housing',
      amount: '$250.00',
      percentage: '15%',
      trend: 'up',
    },
    {
      icon: '/food.png',
      category: 'Food',
      amount: '$350.00',
      percentage: '08%',
      trend: 'down',
    },
    {
      icon: '/tnt.png',
      category: 'Transportation',
      amount: '$50.00',
      percentage: '12%',
      trend: 'down',
    },
    {
      icon: '/Ent.png',
      category: 'Entertainment',
      amount: '$80.00',
      percentage: '15%',
      trend: 'down',
    },
    {
      icon: '/shopping.png',
      category: 'Shopping',
      amount: '$420.00',
      percentage: '25%',
      trend: 'up',
    },
    {
      icon: '/others.png',
      category: 'Others',
      amount: '$650.00',
      percentage: '23%',
      trend: 'up',
    },
  ],
  className = '',
}) => {
  return (
    <div className={`${className} w-full`}>
      <h1 className="text-gray-600 text-xl mb-4">Expenses Breakdown</h1>
      
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-700">Monthly Overview</h2>
          <div className="text-sm text-gray-500">*Compare to last month</div>
        </div>
        
        <div className="p-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {expenses.map((expense, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-lg shadow-sm w-full"
            >
              <ExpenseCard
                icon={expense.icon}
                category={expense.category}
                amount={expense.amount}
                percentage={expense.percentage}
                trend={expense.trend}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpensesBreakdown;
