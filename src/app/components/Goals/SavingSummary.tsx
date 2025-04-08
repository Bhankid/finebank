'use client';

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface SavingDataPoint {
  date: string;
  thisMonth: number;
  lastMonth: number;
}

interface SavingSummaryProps {
  initialMonth?: string;
  initialYear?: number;
  onMonthChange?: (month: string, year: number) => void;
}

const SavingSummary: React.FC<SavingSummaryProps> = ({
  initialMonth = 'Mar',
  initialYear = 2022,
  onMonthChange
}) => {
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  // Sample data for the chart
  const savingData: SavingDataPoint[] = [
    { date: 'May 01', thisMonth: 500, lastMonth: 300 },
    { date: 'May 05', thisMonth: 1200, lastMonth: 800 },
    { date: 'May 10', thisMonth: 2000, lastMonth: 1500 },
    { date: 'May 15', thisMonth: 2800, lastMonth: 2200 },
    { date: 'May 20', thisMonth: 3500, lastMonth: 2800 },
    { date: 'May 25', thisMonth: 4200, lastMonth: 3200 },
    { date: 'May 30', thisMonth: 5000, lastMonth: 3800 },
  ];

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const years = [2021, 2022, 2023];

  const handleMonthSelect = (month: string, year: number) => {
    setSelectedMonth(month);
    setSelectedYear(year);
    setShowMonthPicker(false);
    
    if (onMonthChange) {
      onMonthChange(month, year);
    }
  };

  // Format currency for tooltip
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
  }

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded border border-gray-200">
          <p className="font-semibold">{label}</p>
          <p className="text-teal-600">
            This month: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-gray-600">
            Last month: {formatCurrency(payload[1].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-700">Saving Summary</h2>
        <div className="relative">
          <div 
            className="flex items-center space-x-2 cursor-pointer bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-md"
            onClick={() => setShowMonthPicker(!showMonthPicker)}
          >
            <span>{selectedMonth} {selectedYear}</span>
            <i className={`fas fa-chevron-${showMonthPicker ? 'up' : 'down'}`}></i>
          </div>
          
          {showMonthPicker && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-3 z-10 w-64">
              <div className="grid grid-cols-3 gap-2">
                {years.map(year => (
                  <div key={year} className="col-span-3 font-semibold text-gray-800 mb-1">{year}</div>
                )).concat(
                  years.flatMap(year => 
                    months.map(month => (
                      <div 
                        key={`${month}-${year}`}
                        className={`text-center py-1 px-2 rounded cursor-pointer ${
                          selectedMonth === month && selectedYear === year 
                            ? 'bg-teal-500 text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => handleMonthSelect(month, year)}
                      >
                        {month}
                      </div>
                    ))
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-end items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
            <span className="text-sm text-gray-600">This month</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-600">Same period last month</span>
          </div>
        </div>
      </div>
      
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={savingData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis 
              tickFormatter={(value) => `$${value}`}
              tick={{ fontSize: 12 }}
              tickMargin={10}
              domain={[0, 5000]}
              ticks={[0, 500, 2000, 5000]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#14b8a6"
              strokeWidth={3}
              dot={{ r: 4, fill: "#14b8a6", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#14b8a6", stroke: "#fff", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="lastMonth"
              stroke="#d1d5db"
              strokeWidth={3}
              dot={{ r: 4, fill: "#d1d5db", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#d1d5db", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SavingSummary;
