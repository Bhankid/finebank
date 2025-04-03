'use client';

import { FaPencilAlt, FaTrophy, FaBullseye } from 'react-icons/fa';

interface Goal {
  target: number;
  achieved: number;
  month: string;
  year: number;
}

interface GoalsProps {
  goal?: Goal;
  className?: string;
}

const Goals: React.FC<GoalsProps> = ({
  goal = {
    target: 20000,
    achieved: 12500,
    month: 'May',
    year: 2023
  },
  className = ''
}) => {
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate goal progress percentage
  const goalProgress = Math.round((goal.achieved / goal.target) * 100);
  const strokeDashoffset = 251 - (251 * goalProgress) / 100; // 251 is approx 2*PI*40

  return (
    <div className={className}>
      <h1 className="text-gray-500 text-xl mb-4">Goals</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl text-black font-bold flex items-center">
            {formatCurrency(goal.target)} 
            <FaPencilAlt className="text-gray-400 ml-2 text-lg cursor-pointer hover:text-teal-600 transition-colors" />
          </div>
          <div className="text-gray-500">{goal.month}, {goal.year}</div>
        </div>
        
        <hr className="mb-4"/>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center mb-2">
              <FaTrophy className="text-gray-400 mr-2" />
              <div className="text-gray-500">Target Achieved</div>
            </div>
            <div className="text-2xl font-bold mb-4 text-gray-800">{formatCurrency(goal.achieved)}</div>
            
            <div className="flex items-center mb-2">
              <FaBullseye className="text-gray-400 mr-2" />
              <div className="text-gray-500">This month Target</div>
            </div>
            <div className="text-2xl font-bold text-gray-800">{formatCurrency(goal.target)}</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-2">
              <svg className="w-24 h-24" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  stroke="#14b8a6" 
                  strokeWidth="10" 
                  fill="none" 
                  strokeDasharray="251" 
                  strokeDashoffset={strokeDashoffset}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xl font-bold text-gray-800">{formatCurrency(goal.achieved)}</p>
              </div>
            </div>
            <div className="text-gray-500">Target vs Achievement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
