'use client';

import TransactionTable from '../TransactionTable';
import { Transaction } from '../types';

const RevenueTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      icon: 'fas fa-money-bill-wave',
      item: 'Salary',
      shopName: 'Company Inc',
      date: '15 May, 2023',
      paymentMethod: 'Bank Transfer',
      amount: '$3000.00',
      type: 'revenue'
    },
    {
      id: '2',
      icon: 'fas fa-gift',
      item: 'Bonus',
      shopName: 'Company Inc',
      date: '16 May, 2023',
      paymentMethod: 'Bank Transfer',
      amount: '$500.00',
      type: 'revenue'
    },
    {
      id: '3',
      icon: 'fas fa-hand-holding-usd',
      item: 'Freelance Work',
      shopName: 'Client XYZ',
      date: '14 May, 2023',
      paymentMethod: 'PayPal',
      amount: '$250.00',
      type: 'revenue'
    },
    {
      id: '4',
      icon: 'fas fa-coins',
      item: 'Investment Return',
      shopName: 'Stock Market',
      date: '12 May, 2023',
      paymentMethod: 'Bank Transfer',
      amount: '$120.00',
      type: 'revenue'
    }
  ];

  const handleLoadMore = () => {
    console.log('Loading more revenue transactions...');
  };

  return <TransactionTable transactions={transactions} onLoadMore={handleLoadMore} />;
};

export default RevenueTransactions;
