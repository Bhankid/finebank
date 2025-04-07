'use client';

import { useState } from 'react';

interface Transaction {
  id: string;
  date: string;
  status: 'Complete' | 'Pending' | 'Failed';
  type: 'Credit' | 'Debit';
  receipt: string;
  amount: string;
}

interface TransactionHistoryProps {
  initialTransactions?: Transaction[];
  onLoadMore?: () => Promise<Transaction[]>;
  className?: string;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  initialTransactions = [],
  onLoadMore = async () => [],
  className = ''
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    initialTransactions.length > 0 
      ? initialTransactions 
      : [
          { id: '1', date: '17 Apr, 2023', status: 'Complete', type: 'Credit', receipt: '8C52d5DKDJ5', amount: '$160.00' },
          { id: '2', date: '17 Apr, 2023', status: 'Complete', type: 'Credit', receipt: '8C52d5DKDJ5', amount: '$160.00' },
          { id: '3', date: '17 Apr, 2023', status: 'Complete', type: 'Credit', receipt: '8C52d5DKDJ5', amount: '$160.00' },
          { id: '4', date: '17 Apr, 2023', status: 'Complete', type: 'Credit', receipt: '8C52d5DKDJ5', amount: '$160.00' }
        ]
  );
  
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const newTransactions = await onLoadMore();
      if (newTransactions.length > 0) {
        setTransactions([...transactions, ...newTransactions]);
      }
    } catch (error) {
      console.error('Error loading more transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`w-full bg-white shadow-md rounded-lg p-6 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-600 mb-4">Transactions History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Date</th>
              <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Status</th>
              <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Transaction Type</th>
              <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Receipt</th>
              <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-2 px-4 border-b text-gray-700">{transaction.date}</td>
                <td className="py-2 px-4 border-b text-gray-700">{transaction.status}</td>
                <td className="py-2 px-4 border-b text-gray-700">{transaction.type}</td>
                <td className="py-2 px-4 border-b text-gray-700">{transaction.receipt}</td>
                <td className={`py-2 px-4 border-b ${
                  transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {transactions.length === 0 && (
        <div className="text-center py-4">
          <p className="text-gray-500">No transactions found.</p>
        </div>
      )}
      
      <div className="flex justify-center mt-4">
        <button 
          onClick={handleLoadMore}
          disabled={loading}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors disabled:bg-teal-300 disabled:cursor-not-allowed"
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
