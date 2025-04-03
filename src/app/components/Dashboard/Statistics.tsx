'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface DayData {
  day: string;
  shortDay: string;
  date: string;
  thisWeek: number;
  lastWeek: number;
}

interface StatisticsProps {
  weeklyData?: DayData[];
  className?: string;
}

const Statistics: React.FC<StatisticsProps> = ({
  className = ''
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Generate dates for the current week
  const generateWeeklyData = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return days.map((day, index) => {
      // Calculate the date for this day
      const date = new Date(today);
      date.setDate(today.getDate() - dayOfWeek + index);
      
      // Generate some random data for demonstration
      const thisWeek = Math.floor(Math.random() * 40000) + 5000;
      const lastWeek = Math.floor(Math.random() * 40000) + 5000;
      
      return {
        day,
        shortDay: shortDays[index],
        date: `${date.getDate()} ${shortDays[index]}`,
        thisWeek,
        lastWeek
      };
    });
  };
  
  const weeklyData = generateWeeklyData();
  
  // Format currency for tooltip
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded-md border border-gray-200">
          <p className="font-medium">{label}</p>
          <p className="text-teal-600">
            This Week: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-gray-500">
            Last Week: {formatCurrency(payload[1].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={className}>
      <h1 className="text-2xl font-base text-gray-700 mb-4">Statistics</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-600">Weekly Comparison</h2>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-gray-500 hover:text-teal-600 transition-colors"
          >
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-teal-600 mr-2"></div>
            <span className="text-gray-700">This week</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-300 mr-2"></div>
            <span className="text-gray-700">Last week</span>
          </div>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 20
              }}
              barGap={2}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => {
                  if (value >= 1000000) return `$${value / 1000000}M`;
                  if (value >= 1000) return `$${value / 1000}k`;
                  return `$${value}`;
                }}
              />
              <Tooltip content={<CustomTooltip />} />
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

export default Statistics;
