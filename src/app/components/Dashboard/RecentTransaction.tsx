'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FaGamepad, 
  FaTshirt, 
  FaUtensils, 
  FaTaxi, 
  FaKeyboard,
  FaShoppingBag,
  FaMoneyBillWave,
  FaCreditCard
} from 'react-icons/fa';

type TransactionType = 'expense' | 'revenue';

interface Transaction {
  id: string;
  title: string;
  merchant: string;
  amount: number;
  date: Date;
  type: TransactionType;
  icon: 'gamepad' | 'tshirt' | 'utensils' | 'taxi' | 'keyboard' | 'shopping' | 'money' | 'credit-card';
}

interface RecentTransactionProps {
  transactions?: Transaction[];
  className?: string;
  viewAllLink?: string;
}

const RecentTransaction: React.FC<RecentTransactionProps> = ({
  transactions = [
    {
      id: '1',
      title: 'GTR 5',
      merchant: 'Gadget & Gear',
      amount: 160,
      date: new Date(2023, 4, 17), // May 17, 2023
      type: 'expense',
      icon: 'gamepad'
    },
    {
      id: '2',
      title: 'Polo Shirt',
      merchant: 'XL fashions',
      amount: 20,
      date: new Date(2023, 4, 17), // May 17, 2023
      type: 'expense',
      icon: 'tshirt'
    },
    {
      id: '3',
      title: 'Biriyani',
      merchant: 'Hajir Biriyani',
      amount: 10,
      date: new Date(2023, 4, 17), // May 17, 2023
      type: 'expense',
      icon: 'utensils'
    },
    {
      id: '4',
      title: 'Taxi Fare',
      merchant: 'Uber',
      amount: 12,
      date: new Date(2023, 4, 17), // May 17, 2023
      type: 'expense',
      icon: 'taxi'
    },
    {
      id: '5',
      title: 'Keyboard',
      merchant: 'Gadget & Gear',
      amount: 22,
      date: new Date(2023, 4, 17), // May 17, 2023
      type: 'expense',
      icon: 'keyboard'
    },
    {
      id: '6',
      title: 'Salary',
      merchant: 'Company Inc',
      amount: 3500,
      date: new Date(2023, 4, 15), // May 15, 2023
      type: 'revenue',
      icon: 'money'
    },
    {
      id: '7',
      title: 'Refund',
      merchant: 'Amazon',
      amount: 45,
      date: new Date(2023, 4, 16), // May 16, 2023
      type: 'revenue',
      icon: 'credit-card'
    }
  ],
  className = '',
  viewAllLink = '#'
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'revenue' | 'expenses'>('all');
  
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Format date
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  // Filter transactions based on active tab
  const filteredTransactions = transactions.filter(transaction => {
    if (activeTab === 'all') return true;
    if (activeTab === 'revenue') return transaction.type === 'revenue';
    if (activeTab === 'expenses') return transaction.type === 'expense';
    return true;
  });

  // Get icon component based on icon name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'gamepad':
        return <FaGamepad className="text-gray-500" />;
      case 'tshirt':
        return <FaTshirt className="text-gray-500" />;
      case 'utensils':
        return <FaUtensils className="text-gray-500" />;
      case 'taxi':
        return <FaTaxi className="text-gray-500" />;
      case 'keyboard':
        return <FaKeyboard className="text-gray-500" />;
      case 'shopping':
        return <FaShoppingBag className="text-gray-500" />;
      case 'money':
        return <FaMoneyBillWave className="text-gray-500" />;
      case 'credit-card':
        return <FaCreditCard className="text-gray-500" />;
      default:
        return <FaShoppingBag className="text-gray-500" />;
    }
  };

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-gray-700">Recent Transaction</h2>
        <Link 
          href={viewAllLink} 
          className="text-sm text-gray-500 hover:text-teal-600 transition-colors"
        >
          View All
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-around mb-4">
          <button 
            className={`pb-1 cursor-pointer ${activeTab === 'all' 
              ? 'text-teal-500 border-b-2 border-teal-500' 
              : 'text-gray-500 hover:text-teal-500 transition-colors'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`pb-1 cursor-pointer ${activeTab === 'revenue' 
              ? 'text-teal-500 border-b-2 border-teal-500' 
              : 'text-gray-500 hover:text-teal-500 transition-colors'}`}
            onClick={() => setActiveTab('revenue')}
          >
            Revenue
          </button>
          <button 
            className={`pb-1 cursor-pointer ${activeTab === 'expenses' 
              ? 'text-teal-500 border-b-2 border-teal-500' 
              : 'text-gray-500 hover:text-teal-500 transition-colors'}`}
            onClick={() => setActiveTab('expenses')}
          >
            Expenses
          </button>
        </div>
        
        <div className="space-y-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {getIconComponent(transaction.icon)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-700">{transaction.title}</h3>
                    <p className="text-sm text-gray-500">{transaction.merchant}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${transaction.type === 'revenue' ? 'text-green-600' : 'text-gray-700'}`}>
                    {transaction.type === 'revenue' ? '+' : ''}{formatCurrency(transaction.amount)}
                  </p>
                  <p className="text-sm text-gray-500">{formatDate(transaction.date)}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500">
              No transactions found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
