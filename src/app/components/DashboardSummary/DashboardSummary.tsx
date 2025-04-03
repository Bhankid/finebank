'use client';

import TotalBalance from './TotalBalance';
import Goals from './Goals';



interface Bill {
  name: string;
  description: string;
  amount: number;
  dueDate: Date;
  lastCharge: Date;
}

const DashboardSummary: React.FC = () => {

  
  
  const bills: Bill[] = [
    {
      name: 'Figma',
      description: 'Figma - Monthly',
      amount: 150,
      dueDate: new Date(2023, 4, 15), // May 15, 2023
      lastCharge: new Date(2022, 4, 14) // May 14, 2022
    },
    {
      name: 'Adobe',
      description: 'Adobe - Yearly',
      amount: 559,
      dueDate: new Date(2023, 5, 16), // June 16, 2023
      lastCharge: new Date(2023, 5, 17) // June 17, 2023
    }
  ];
  
  
  // Format date to display
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };
  
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Balance */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-500 text-lg mb-2">Total Balance</h2>
          <h1 className="text-3xl font-bold mb-4">{formatCurrency(totalBalance)}</h1>
          <p className="text-gray-500 mb-4">All Accounts</p>
          
          <div className="bg-teal-500 p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-white">Account Type</p>
              <p className="text-white font-bold">{currentAccount.type}</p>
              <p className="text-white">{currentAccount.number}</p>
            </div>
            <div className="text-white text-2xl font-bold">{formatCurrency(currentAccount.balance)}</div>
            <div className="text-white">
              <FaArrowRight />
            </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <button 
              onClick={handlePrevious}
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              &lt; Previous
            </button>
            <div className="flex space-x-2">
              {accounts.map((_, index) => (
                <span 
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentCardIndex ? 'bg-gray-500' : 'bg-gray-300'
                  }`}
                ></span>
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              Next &gt;
            </button>
          </div>
        </div> */}
        <TotalBalance />

        {/* Goals */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-500 text-lg mb-2">Goals</h2>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{formatCurrency(goal.target)}</h1>
            <button className="text-gray-500 hover:text-teal-600 transition-colors">
              <FaPencilAlt />
            </button>
          </div>
          <p className="text-gray-500 mb-4">{goal.month}, {goal.year}</p>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FaTrophy className="text-gray-500 mr-2" />
              <p className="text-gray-500">Target Achieved</p>
              <p className="ml-auto font-bold">{formatCurrency(goal.achieved)}</p>
            </div>
            <div className="flex items-center">
              <FaBullseye className="text-gray-500 mr-2" />
              <p className="text-gray-500">This month Target</p>
              <p className="ml-auto font-bold">{formatCurrency(goal.target)}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative">
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
                <p className="text-xl font-bold">{formatCurrency(goal.achieved).replace('$', '')}</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-2">Target vs Achievement</p>
        </div> */}
        <Goals />

        {/* Upcoming Bill */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-lg">Upcoming Bill</h2>
            <button className="text-gray-500 hover:text-teal-600 transition-colors">View All &gt;</button>
          </div>
          
          <div className="mb-4 space-y-4">
            {bills.map((bill, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-gray-100 p-2 rounded-lg mr-4 text-center min-w-[60px]">
                  <p className="text-gray-500">{new Intl.DateTimeFormat('en-US', { month: 'short' }).format(bill.dueDate)}</p>
                  <p className="text-xl font-bold">{bill.dueDate.getDate()}</p>
                </div>
                <div>
                  <p className="font-bold">{bill.name}</p>
                  <p className="text-gray-500">{bill.description}</p>
                  <p className="text-gray-500 text-sm">Last Charge - {formatDate(bill.lastCharge)}</p>
                </div>
                <div className="ml-auto text-xl font-bold">{formatCurrency(bill.amount)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
