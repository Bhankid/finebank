'use client';

import { useState } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

interface CardAccount {
  type: string;
  name: string;
  number: string;
  balance: number;
  logo?: string;
}

interface TotalBalanceProps {
  accounts?: CardAccount[];
  className?: string;
}

const TotalBalance: React.FC<TotalBalanceProps> = ({ 
  accounts = [
    { type: 'Credit Card', name: 'Visa', number: '**** **** **** 2598', balance: 25000, logo: '/mastercard.jpg' },
    { type: 'Checking', name: 'Chase', number: '**** **** **** 4321', balance: 12500, logo: '/mastercard.jpg' },
    { type: 'Savings', name: 'Bank of America', number: '**** **** **** 8765', balance: 45000, logo: '/mastercard.jpg' },
  ],
  className = ''
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  const currentAccount = accounts[currentCardIndex];
  
  const handlePrevious = () => {
    setCurrentCardIndex((prev) => (prev === 0 ? accounts.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentCardIndex((prev) => (prev === accounts.length - 1 ? 0 : prev + 1));
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
    <div className={`${className} w-full`}>
      <h1 className="text-gray-600 text-xl mb-4">Total Balance</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl font-bold text-black">{formatCurrency(totalBalance)}</div>
          <span className="text-gray-600">All Accounts</span>
        </div>
        
        <div className="bg-teal-500 text-white rounded-lg p-5 flex justify-between items-center mb-6 min-h-[120px]">
          <div>
            <div className="text-sm">Account Type</div>
            <div className="text-lg font-bold">{currentAccount.type}</div>
            <div className="text-sm mt-1">{currentAccount.number}</div>
          </div>
          <div className="flex items-center">
            <div className="text-2xl font-bold mr-2">{formatCurrency(currentAccount.balance)}</div>
            <FaArrowRight className="text-white" />
          </div>
          {currentAccount.logo && (
            <div className="ml-4 relative w-12 h-12">
              <Image 
                src={currentAccount.logo} 
                alt={`${currentAccount.name} logo`} 
                fill
                sizes="(max-width: 768px) 40px, (max-width: 1200px) 48px, 64px"
                className="rounded-full object-cover"
                priority
              />
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center text-gray-400 py-2">
          <button 
            onClick={handlePrevious}
            className="flex items-center hover:text-teal-600 transition-colors cursor-pointer px-2 py-1"
          >
            <FaChevronLeft className="mr-1" /> Previous
          </button>
          <div className="flex space-x-2">
            {accounts.map((_, index) => (
              <span 
                key={index}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === currentCardIndex ? 'bg-teal-500' : 'bg-gray-300'
                }`}
              ></span>
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="flex items-center hover:text-teal-600 transition-colors cursor-pointer px-2 py-1"
          >
            Next <FaChevronRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
