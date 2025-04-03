'use client';

import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface Bill {
  name: string;
  description: string;
  amount: number;
  dueDate: Date;
  lastCharge: Date;
  logo?: string;
  logoColor?: string;
}

interface UpcomingBillProps {
  bills?: Bill[];
  className?: string;
  viewAllLink?: string;
}

const UpcomingBill: React.FC<UpcomingBillProps> = ({
  bills = [
    {
      name: 'Figma',
      description: 'Figma - Monthly',
      amount: 150,
      dueDate: new Date(2023, 4, 15), // May 15, 2023
      lastCharge: new Date(2022, 4, 14), // May 14, 2022
    },
    {
      name: 'Adobe',
      description: 'Adobe - Yearly',
      amount: 559,
      dueDate: new Date(2023, 5, 16), // June 16, 2023
      lastCharge: new Date(2023, 5, 17), // June 17, 2023
      logo: '/adobe.jpg',
      logoColor: 'text-red-500'
    }
  ],
  className = '',
  viewAllLink = '#'
}) => {
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format date to display
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  // Get month abbreviation
  const getMonthAbbr = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  };

  return (
    <div className={`max-w-md ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-medium text-gray-700">Upcoming Bill</h1>
        <Link 
          href={viewAllLink} 
          className="text-sm text-gray-500 hover:text-teal-600 transition-colors flex items-center"
        >
          View All <FaChevronRight className="ml-1 text-xs" />
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="space-y-4">
          {bills.map((bill, index) => (
            <div key={index}>
              <div className="flex items-center justify-between p-2 bg-gray-50 ">
                <div className="flex items-center">
                  <div className="text-center bg-gray-200 rounded-lg p-2 w-16">
                    <div className="text-sm text-gray-500">{getMonthAbbr(bill.dueDate)}</div>
                    <div className="text-2xl font-bold text-gray-700">{bill.dueDate.getDate()}</div>
                  </div>
                  
                  <div className="ml-4">
                    <div className="flex items-center">
                      {bill.logo ? (
                        <div className="relative w-5 h-5 mr-1">
                          <Image 
                            src={bill.logo} 
                            alt={`${bill.name} logo`} 
                            fill
                            sizes="20px"
                            className="object-contain"
                          />
                        </div>
                      ) : null}
                      <div className={`text-sm ${bill.logoColor || 'text-gray-500'}`}>{bill.name}</div>
                    </div>
                    <div className="text-lg font-bold text-gray-700">{bill.description}</div>
                    <div className="text-sm text-gray-400">Last Charge - {formatDate(bill.lastCharge)}</div>
                  </div>
                </div>
                
                <div className="text-lg font-bold text-gray-700">{formatCurrency(bill.amount)}</div>
              </div>
              
              {/* Add a divider line between cards except for the last one */}
              {index < bills.length - 1 && (
                <hr className="my-4 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingBill;
