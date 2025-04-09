'use client';

import React from 'react';
import Image from 'next/image';

interface Bill {
  id: string;
  dueMonth: string;
  dueDay: string;
  companyName: string;
  logoUrl: string;
  title: string;
  description: string;
  lastChargeDate: string;
  amount: string;
}

const UpcomingBills: React.FC<{ className?: string }> = ({ className = '' }) => {
  const bills: Bill[] = [
    {
      id: '1',
      dueMonth: 'May',
      dueDay: '15',
      companyName: 'Figma',
      logoUrl: '/google_logo.png',
      title: 'Figma - Yearly Plan',
      description: 'For advanced security and more flexible controls, the Professional plan helps you scale design processes company-wide.',
      lastChargeDate: '14 May, 2022',
      amount: '$150'
    },
    {
      id: '2',
      dueMonth: 'Jun',
      dueDay: '16',
      companyName: 'Adobe',
      logoUrl: '/adobe.jpg',
      title: 'Adobe Inc - Yearly Plan',
      description: 'For advanced security and more flexible controls, the Professional plan helps you scale design processes company-wide.',
      lastChargeDate: '17 Jun, 2022',
      amount: '$559'
    }
  ];

  return (
    <div className={`${className} w-full`}>
      <h1 className="text-gray-600 text-xl mb-4">Upcoming Bills</h1>
      
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-2 p-6 border-b">
            <div className="col-span-2 text-gray-600 font-semibold">Due Date</div>
            <div className="col-span-2 text-gray-600 font-semibold">Logo</div>
            <div className="col-span-3 text-gray-600 font-semibold">Item</div>
            <div className="col-span-3 text-gray-600 font-semibold">Last Charge</div>
            <div className="col-span-2 text-gray-600 font-semibold text-right">Amount</div>
          </div>
          
          {bills.map((bill) => (
            <div key={bill.id} className="grid grid-cols-12 gap-2 p-6 border-b last:border-b-0 items-center">
              <div className="col-span-2 flex flex-col items-center">
                <div className="bg-gray-200 text-gray-700 rounded-md px-2 py-1">{bill.dueMonth}</div>
                <div className="text-2xl font-semibold text-gray-700">{bill.dueDay}</div>
              </div>
              <div className="col-span-2 flex items-center">
                <div className="relative w-10 h-10">
                  <Image
                    src={bill.logoUrl}
                    alt={`${bill.companyName} logo`}
                    fill
                    sizes="(max-width: 768px) 40px, (max-width: 1200px) 48px, 64px"
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <div className="text-gray-700 font-semibold">{bill.title}</div>
                <div className="text-gray-600 text-sm line-clamp-1 lg:line-clamp-2">{bill.description}</div>
              </div>
              <div className="col-span-3 text-gray-600">{bill.lastChargeDate}</div>
              <div className="col-span-2 flex items-center justify-end">
                <div className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 font-medium">{bill.amount}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View */}
        <div className="md:hidden">
          {bills.map((bill) => (
            <div key={bill.id} className="p-6 border-b last:border-b-0">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 mr-2">
                    <Image
                      src={bill.logoUrl}
                      alt={`${bill.companyName} logo`}
                      fill
                      sizes="40px"
                      className="object-cover rounded-full"
                    />
                  </div>
                  <span className="text-gray-700 font-semibold">{bill.companyName}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-md px-2 py-1 text-xs">{bill.dueMonth}</div>
                  <div className="text-xl font-semibold text-gray-700">{bill.dueDay}</div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="text-gray-700 font-semibold">{bill.title}</div>
                <div className="text-gray-600 text-sm line-clamp-2">{bill.description}</div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-600 font-medium">Last Charge</div>
                  <div className="text-gray-600">{bill.lastChargeDate}</div>
                </div>
                <div className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 font-medium">
                  {bill.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingBills;
