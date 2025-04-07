'use client';

import TransactionTable from '../TransactionTable';
import { Transaction } from '../types';

const AllTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      icon: 'fas fa-gamepad',
      item: 'GTR 5',
      shopName: 'Gadget & Gear',
      date: '17 May, 2023',
      paymentMethod: 'Credit Card',
      amount: '$160.00',
      type: 'expense'
    },
    {
      id: '2',
      icon: 'fas fa-tshirt',
      item: 'Polo shirt',
      shopName: 'XL fashions',
      date: '17 May, 2023',
      paymentMethod: 'Credit Card',
      amount: '$20.00',
      type: 'expense'
    },
    {
      id: '3',
      icon: 'fas fa-utensils',
      item: 'Biriyani',
      shopName: 'Hajir Biriyani',
      date: '17 May, 2023',
      paymentMethod: 'Credit Card',
      amount: '$12.00',
      type: 'expense'
    },
    {
      id: '4',
      icon: 'fas fa-ticket-alt',
      item: 'Movie ticket',
      shopName: 'Inox',
      date: '17 May, 2023',
      paymentMethod: 'Credit Card',
      amount: '$15.00',
      type: 'expense'
    },
    {
      id: '5',
      icon: 'fas fa-taxi',
      item: 'Taxi fare',
      shopName: 'Uber',
      date: '17 May, 2023',
      paymentMethod: 'Credit Card',
      amount: '$10.00',
      type: 'expense'
    },
    {
      id: '6',
      icon: 'fas fa-pizza-slice',
      item: 'Pizza',
      shopName: 'Pizza Hit',
      date: '17 May, 2023',
      paymentMethod: 'Credit Card',
      amount: '$20.00',
      type: 'expense'
    },
    {
      id: '7',
      icon: 'fas fa-keyboard',
      item: 'Keyboard',
      shopName: 'Gadget & Gear',
      date: '17 May, 2023',
      paymentMethod: 'Credit Card',
      amount: '$30.00',
      type: 'expense'
    },
    // Adding some revenue transactions for the "All" tab
    {
      id: '8',
      icon: 'fas fa-money-bill-wave',
      item: 'Salary',
      shopName: 'Company Inc',
      date: '15 May, 2023',
      paymentMethod: 'Bank Transfer',
      amount: '$3000.00',
      type: 'revenue'
    },
    {
      id: '9',
      icon: 'fas fa-gift',
      item: 'Bonus',
      shopName: 'Company Inc',
      date: '16 May, 2023',
      paymentMethod: 'Bank Transfer',
      amount: '$500.00',
      type: 'revenue'
    }
  ];

  const handleLoadMore = () => {
    console.log('Loading more transactions...');
  };

  return <TransactionTable transactions={transactions} onLoadMore={handleLoadMore} />;
};

export default AllTransactions;
