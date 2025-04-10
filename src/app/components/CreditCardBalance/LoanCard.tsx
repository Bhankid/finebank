'use client';

import { FaChevronRight } from 'react-icons/fa';

interface LoanCardProps {
  bankName?: string;
  accountNumber?: string;
  totalAmount?: number;
  className?: string;
  onRemove?: () => void;
  onDetails?: () => void;
}

const LoanCard: React.FC<LoanCardProps> = ({
  bankName = 'City Bank Ltd.',
  accountNumber = '363 456 896 6****',
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
    <div className={`bg-white rounded-lg shadow-md p-6 w-full text-gray-600 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">Loan</h2>
        <span className="text-gray-800">{bankName}</span>
      </div>
      <hr className="mb-4"/>
      <div className="mb-4">
        <p className="text-2xl font-semibold text-black text-gray-600">{accountNumber}</p>
        <p className="text-gray-800">Account Number</p>
      </div>
      <div className="mb-4">
        <p className="text-2xl font-semibold text-black text-gray-600">{formatCurrency(totalAmount)}</p>
        <p className="text-gray-800">Total amount</p>
      </div>
      <div className="flex justify-between items-center">
        <button 
          onClick={onRemove}
          className="text-teal-600 hover:text-teal-700 transition-colors cursor-pointer"
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

export default LoanCard;
