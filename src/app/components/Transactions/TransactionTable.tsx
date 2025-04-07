'use client';

import { useState } from 'react';
import { Transaction } from './types';

interface TransactionTableProps {
  transactions: Transaction[];
  onLoadMore?: () => void;
}

const TransactionTable: React.FC<TransactionTableProps> = ({ 
  transactions, 
  onLoadMore 
}) => {
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    if (onLoadMore) {
      onLoadMore();
    }
    // Simulate loading
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500">
            <th className="pb-4">Items</th>
            <th className="pb-4">Shop Name</th>
            <th className="pb-4">Date</th>
            <th className="pb-4">Payment Method</th>
            <th className="pb-4">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t">
              <td className="py-4 flex items-center text-gray-700">
                <i className={`${transaction.icon} mr-2`}></i> {transaction.item}
              </td>
              <td className="py-4 text-gray-700">{transaction.shopName}</td>
              <td className="py-4 text-gray-700">{transaction.date}</td>
              <td className="py-4 text-gray-700">{transaction.paymentMethod}</td>
              <td className={`py-4 ${transaction.type === 'revenue' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
        <button 
          className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors disabled:bg-teal-300"
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </>
  );
};

export default TransactionTable;
