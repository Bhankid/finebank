'use client';

import { useState } from 'react';
import AllTransactions from './Tabs/AllTransactions';
import RevenueTransactions from './Tabs/RevenueTransactions';
import ExpensesTransactions from './Tabs/ExpensesTransactions';

type TabType = 'all' | 'revenue' | 'expenses';

const RecentTransactions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'all':
        return <AllTransactions />;
      case 'revenue':
        return <RevenueTransactions />;
      case 'expenses':
        return <ExpensesTransactions />;
      default:
        return <AllTransactions />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Recent Transaction</h1>
      <div className="flex space-x-4 mb-6">
        <button 
          className={`pb-2 cursor-pointer ${activeTab === 'all' ? 'text-teal-500 border-b-2 border-teal-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button 
          className={`pb-2 cursor-pointer ${activeTab === 'revenue' ? 'text-teal-500 border-b-2 border-teal-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('revenue')}
        >
          Revenue
        </button>
        <button 
          className={`pb-2 cursor-pointer ${activeTab === 'expenses' ? 'text-teal-500 border-b-2 border-teal-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('expenses')}
        >
          Expenses
        </button>
      </div>
      
      {renderTabContent()}
    </div>
  );
};

export default RecentTransactions;
