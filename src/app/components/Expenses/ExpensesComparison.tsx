'use client';

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface MonthlyData {
  month: string;
  thisWeek: number;
  lastWeek: number;
}

const ExpensesComparison: React.FC = () => {
  const [comparisonType, setComparisonType] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  
  // Data with actual values in dollars for better visualization
  const monthlyData: MonthlyData[] = [
    { month: 'Jan', thisWeek: 250000, lastWeek: 187500 },
    { month: 'Feb', thisWeek: 187500, lastWeek: 125000 },
    { month: 'Mar', thisWeek: 125000, lastWeek: 187500 },
    { month: 'Apr', thisWeek: 250000, lastWeek: 125000 },
    { month: 'May', thisWeek: 187500, lastWeek: 187500 },
    { month: 'Jun', thisWeek: 62500, lastWeek: 125000 },
    { month: 'Jul', thisWeek: 187500, lastWeek: 125000 },
    { month: 'Aug', thisWeek: 250000, lastWeek: 62500 },
    { month: 'Sep', thisWeek: 187500, lastWeek: 187500 },
    { month: 'Oct', thisWeek: 125000, lastWeek: 125000 },
    { month: 'Nov', thisWeek: 62500, lastWeek: 125000 },
    { month: 'Dec', thisWeek: 187500, lastWeek: 187500 },
  ];

  // Quarterly data aggregation
  const quarterlyData = [
    { month: 'Q1', thisWeek: (monthlyData[0].thisWeek + monthlyData[1].thisWeek + monthlyData[2].thisWeek) / 3, 
      lastWeek: (monthlyData[0].lastWeek + monthlyData[1].lastWeek + monthlyData[2].lastWeek) / 3 },
    { month: 'Q2', thisWeek: (monthlyData[3].thisWeek + monthlyData[4].thisWeek + monthlyData[5].thisWeek) / 3, 
      lastWeek: (monthlyData[3].lastWeek + monthlyData[4].lastWeek + monthlyData[5].lastWeek) / 3 },
    { month: 'Q3', thisWeek: (monthlyData[6].thisWeek + monthlyData[7].thisWeek + monthlyData[8].thisWeek) / 3, 
      lastWeek: (monthlyData[6].lastWeek + monthlyData[7].lastWeek + monthlyData[8].lastWeek) / 3 },
    { month: 'Q4', thisWeek: (monthlyData[9].thisWeek + monthlyData[10].thisWeek + monthlyData[11].thisWeek) / 3, 
      lastWeek: (monthlyData[9].lastWeek + monthlyData[10].lastWeek + monthlyData[11].lastWeek) / 3 },
  ];

  // Yearly data aggregation
  const yearlyData = [
    { month: 'Year', 
      thisWeek: monthlyData.reduce((sum, item) => sum + item.thisWeek, 0) / 12, 
      lastWeek: monthlyData.reduce((sum, item) => sum + item.lastWeek, 0) / 12 
    }
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

  // Select data based on comparison type
  const displayData = 
    comparisonType === 'monthly' ? monthlyData : 
    comparisonType === 'quarterly' ? quarterlyData : yearlyData;

  // Format currency for tooltip
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{ value: number; }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded border border-gray-200">
          <p className="font-semibold">{label}</p>
          <p className="text-teal-600">
            This Week: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-gray-600">
            Last Week: {formatCurrency(payload[1].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6 bg-gray-50">
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
        
        {/* Chart container with fixed height to ensure it doesn't take full screen */}
        <div className="w-full" style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={displayData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={0}
              barCategoryGap={comparisonType === 'yearly' ? '35%' : '15%'}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis 
                tickFormatter={(value) => {
                  if (value === 0) return '$0';
                  if (value === 50000) return '$50k';
                  if (value === 100000) return '$100k';
                  if (value === 150000) return '$150k';
                  if (value === 200000) return '$200k';
                  if (value === 250000) return '$250k';
                  return '';
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ bottom: 0 }} />
              <Bar 
                dataKey="thisWeek" 
                name="This Week" 
                fill="#0d9488" // teal-600
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="lastWeek" 
                name="Last Week" 
                fill="#d1d5db" // gray-300
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ExpensesComparison;
