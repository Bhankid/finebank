'use client';

import React, { useState } from 'react';

interface MonthlyData {
  month: string;
  thisWeek: number;
  lastWeek: number;
}

const ExpensesComparison: React.FC = () => {
  const [comparisonType, setComparisonType] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  
  const monthlyData: MonthlyData[] = [
    { month: 'Jan', thisWeek: 1.0, lastWeek: 0.75 },
    { month: 'Feb', thisWeek: 0.75, lastWeek: 0.5 },
    { month: 'Mar', thisWeek: 0.5, lastWeek: 0.75 },
    { month: 'Apr', thisWeek: 1.0, lastWeek: 0.5 },
    { month: 'May', thisWeek: 0.75, lastWeek: 0.75 },
    { month: 'Jun', thisWeek: 0.25, lastWeek: 0.5 },
    { month: 'Jul', thisWeek: 0.75, lastWeek: 0.5 },
    { month: 'Aug', thisWeek: 1.0, lastWeek: 0.25 },
    { month: 'Sep', thisWeek: 0.75, lastWeek: 0.75 },
    { month: 'Oct', thisWeek: 0.5, lastWeek: 0.5 },
    { month: 'Nov', thisWeek: 0.25, lastWeek: 0.5 },
    { month: 'Dec', thisWeek: 0.75, lastWeek: 0.75 },
  ];

  const toggleComparisonType = () => {
    if (comparisonType === 'monthly') {
      setComparisonType('quarterly');
    } else if (comparisonType === 'quarterly') {
      setComparisonType('yearly');
    } else {
      setComparisonType('monthly');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Expenses Comparison</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div 
            className="text-lg font-semibold text-gray-700 mb-2 md:mb-0 cursor-pointer flex items-center"
            onClick={toggleComparisonType}
          >
            {comparisonType === 'monthly' && 'Monthly Comparison'}
            {comparisonType === 'quarterly' && 'Quarterly Comparison'}
            {comparisonType === 'yearly' && 'Yearly Comparison'}
            <i className="fas fa-chevron-down ml-2"></i>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <div className="flex items-center mb-2 sm:mb-0">
              <div className="w-4 h-4 bg-teal-600 rounded-full mr-2"></div>
              <span className="text-gray-600">This Week</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-gray-600">Last Week</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-gray-500 p-2"> </th>
                <th className="text-left text-gray-500 p-2">$250k</th>
                <th className="text-left text-gray-500 p-2">$50k</th>
                <th className="text-left text-gray-500 p-2">$10k</th>
                <th className="text-left text-gray-500 p-2">$2k</th>
                <th className="text-left text-gray-500 p-2">$0</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((data) => (
                <tr key={data.month}>
                  <td className="text-gray-500 p-2">{data.month}</td>
                  <td className="h-32 p-2">
                    <div className="relative h-full">
                      <div 
                        className="absolute bottom-0 left-0 w-1/2 bg-gray-300"
                        style={{ height: `${data.lastWeek * 100}%` }}
                      ></div>
                      <div 
                        className="absolute bottom-0 right-0 w-1/2 bg-teal-600"
                        style={{ height: `${data.thisWeek * 100}%` }}
                      ></div>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpensesComparison;
