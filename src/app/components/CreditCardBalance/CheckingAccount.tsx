'use client';

import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa6';

interface CheckingAccountProps {
  accountType?: string;
  bankName?: string;
  bankLogo?: string;
  accountNumber?: string;
  totalAmount?: number;
  className?: string;
  onRemove?: () => void;
  onDetails?: () => void;
}

const CheckingAccount: React.FC<CheckingAccountProps> = ({
  accountType = 'Checking',
  bankName = 'AB Bank Ltd',
  bankLogo = '/Visa_Logo 1.png',
  accountNumber = '693 456 69 9****',
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
    <div className={`bg-white p-6 rounded-lg shadow-md w-full max-w-sm ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600 font-semibold">{accountType}</span>
        <div className="flex items-center">
          <span className="text-gray-500 text-sm mr-2">{bankName}</span>
          <Image 
            src={bankLogo} 
            alt={`${bankName} logo`} 
            width={40} 
            height={20} 
            className="h-5 w-auto"
          />
        </div>
      </div>
      <hr className="mb-4"/>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-black mb-1">{accountNumber}</div>
        <div className="text-gray-500 text-sm">Account Number</div>
      </div>
      <div className="mb-4">
        <div className="text-2xl font-semibold text-black mb-1">{formatCurrency(totalAmount)}</div>
        <div className="text-gray-500 text-sm">Total amount</div>
      </div>
      <div className="flex justify-between items-center">
        <button 
          onClick={onRemove}
          className="text-teal-600 font-medium hover:text-teal-700 transition-colors cursor-pointer"
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
  );
};

export default CheckingAccount;
