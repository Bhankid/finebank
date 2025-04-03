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

const ExpenseCard: React.FC<ExpenseCardProps> = ({ icon, category, amount, percentage, trend }) => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-full">
    <div className="bg-gray-100 p-3 rounded-full mb-2 relative w-14 h-14 flex items-center justify-center">
      <Image 
        src={icon} 
        alt={`${category} icon`} 
        width={32} 
        height={32}
        className="object-contain"
      />
    </div>
    <div className="text-center">
      <div className="text-gray-500">{category}</div>
      <div className="text-xl font-bold">{amount}</div>
      <div className="text-sm text-gray-500">{percentage}</div>
    </div>
    <div className={`text-sm mt-2 flex items-center ${trend === 'up' ? 'text-red-500' : 'text-green-500'}`}>
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
      icon: "/home.png",
      category: "Housing",
      amount: "$250.00",
      percentage: "15%",
      trend: "up"
    },
    {
      icon: "/food.png",
      category: "Food",
      amount: "$350.00",
      percentage: "08%",
      trend: "down"
    },
    {
      icon: "/tnt.png",
      category: "Transportation",
      amount: "$50.00",
      percentage: "12%",
      trend: "down"
    },
    {
      icon: "/Ent.png",
      category: "Entertainment",
      amount: "$80.00",
      percentage: "15%",
      trend: "down"
    },
    {
      icon: "/shopping.png",
      category: "Shopping",
      amount: "$420.00",
      percentage: "25%",
      trend: "up"
    },
    {
      icon: "/others.png",
      category: "Others",
      amount: "$650.00",
      percentage: "23%",
      trend: "up"
    }
  ],
  className = ''
}) => {
  return (
    <div className={`max-w-4xl ${className}`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-gray-700">Expenses Breakdown</h1>
          <div className="text-sm text-gray-500">*Compare to last month</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expenses.map((expense, index) => (
            <ExpenseCard
              key={index}
              icon={expense.icon}
              category={expense.category}
              amount={expense.amount}
              percentage={expense.percentage}
              trend={expense.trend as 'up' | 'down'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpensesBreakdown;
