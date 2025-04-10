'use client';

import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

interface CreditCardBalanceProps {
  cardType?: string;
  cardLogo?: string;
  cardNumber?: string;
  totalAmount?: number;
  className?: string;
  onRemove?: () => void;
  onDetails?: () => void;
}

const CreditCardBalance: React.FC<CreditCardBalanceProps> = ({
  cardType = 'Credit Card',
  cardLogo = '/mastercard.jpg',
  cardNumber = '3388 4556 8860 8***',
  totalAmount = 25000,
  className = '',
  onRemove = () => {},
  onDetails = () => {}
}) => {
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      <div className="bg-white">
        <h2 className="text-gray-600 text-lg mb-4">Balances</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-800 font-medium">{cardType}</h3>
            <Image 
              src={cardLogo} 
              alt={`${cardType} logo`} 
              width={40} 
              height={20} 
              className="h-5 w-auto"
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-900 text-xl font-bold">{cardNumber}</p>
            <p className="text-gray-500">Account Number</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-900 text-2xl font-bold">{formatCurrency(totalAmount)}</p>
            <p className="text-gray-500">Total amount</p>
          </div>
          <div className="flex justify-between items-center">
            <button 
              onClick={onRemove}
              className="text-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
            >
              Remove
            </button>
            <button 
              onClick={onDetails}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors cursor-pointer"
            >
              Details <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardBalance;
