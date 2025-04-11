'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface SavingsGoalProps {
  targetAchieved: number;
  monthlyTarget: number;
  startDate: string;
  endDate: string;
  onAdjustGoal?: () => void;
}

const SavingsGoal: React.FC<SavingsGoalProps> = ({
  targetAchieved = 12500,
  monthlyTarget = 20000,
  startDate = '01 May',
  endDate = '31 May',
  onAdjustGoal = () => console.log('Adjust goal clicked')
}) => {
  // Calculate percentage achieved
  const percentageAchieved = (targetAchieved / monthlyTarget) * 100;
  const percentageRemaining = 100 - percentageAchieved;

  // Data for the pie chart
  const data = [
    { name: 'Achieved', value: percentageAchieved },
    { name: 'Remaining', value: percentageRemaining }
  ];

  // Colors for the pie chart
  const COLORS = ['#14b8a6', '#e2e8f0']; 

  // Format currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Format for the center text (abbreviated)
  const formatAbbreviatedAmount = (value: number): string => {
    if (value >= 1000) {
      return `${Math.floor(value / 1000)}K`;
    }
    return value.toString();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <h2 className="text-gray-700 text-lg font-semibold mb-2 sm:mb-0">Savings Goal</h2>
        <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm self-start sm:self-auto">
          {startDate} ~ {endDate}
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-4">
          <div className="flex items-center">
            <i className="fas fa-trophy text-gray-500 mr-2 text-xl"></i>
            <div>
              <p className="text-gray-500 text-sm">Target Achieved</p>
              <p className="text-gray-700 text-2xl font-bold">{formatCurrency(targetAchieved)}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <i className="fas fa-bullseye text-gray-500 mr-2 text-xl"></i>
            <div>
              <p className="text-gray-500 text-sm">This month Target</p>
              <p className="text-gray-700 text-2xl font-bold">{formatCurrency(monthlyTarget)}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center mb-4">
          <div className="relative w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={45}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-teal-500 text-xl font-bold">
                {formatAbbreviatedAmount(targetAchieved)}
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 text-center text-sm">Target vs Achievement</p>
      </div>
      
      <div className="flex justify-center mt-4">
        <button 
          className="bg-teal-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-teal-600 transition-colors cursor-pointer"
          onClick={onAdjustGoal}
        >
          <span>Adjust Goal</span>
          <i className="fas fa-pencil-alt ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default SavingsGoal;
