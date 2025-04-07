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

const UpcomingBills: React.FC = () => {
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
    <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Bills</h1>
      
      {/* Desktop View */}
      <div className="hidden md:block bg-white shadow-md rounded-lg">
        <div className="grid grid-cols-5 gap-4 p-4 border-b">
          <div className="col-span-1 text-gray-500 font-semibold">Due Date</div>
          <div className="col-span-1 text-gray-500 font-semibold">Logo</div>
          <div className="col-span-2 text-gray-500 font-semibold">Item Description</div>
          <div className="col-span-1 text-gray-500 font-semibold">Last Charge</div>
          <div className="col-span-1 text-gray-500 font-semibold">Amount</div>
        </div>
        
        {bills.map((bill) => (
          <div key={bill.id} className="grid grid-cols-5 gap-4 p-4 border-b last:border-b-0">
            <div className="col-span-1 flex flex-col items-center">
              <div className="bg-gray-200 text-gray-700 rounded-md px-2 py-1">{bill.dueMonth}</div>
              <div className="text-2xl font-semibold text-gray-700">{bill.dueDay}</div>
            </div>
            <div className="col-span-1 flex items-center">
              <div className="relative w-10 h-10">
                <Image 
                  src={bill.logoUrl} 
                  alt={`${bill.companyName} logo`} 
                  fill 
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="ml-2 text-gray-700 font-semibold">{bill.companyName}</span>
            </div>
            <div className="col-span-2">
              <div className="text-gray-700 font-semibold">{bill.title}</div>
              <div className="text-gray-500 text-sm">{bill.description}</div>
            </div>
            <div className="col-span-1 text-gray-500">{bill.lastChargeDate}</div>
            <div className="col-span-1 flex items-center justify-center">
              <div className="bg-gray-200 text-gray-700 rounded-md px-4 py-2">{bill.amount}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {bills.map((bill) => (
          <div key={bill.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-2">
                  <Image 
                    src={bill.logoUrl} 
                    alt={`${bill.companyName} logo`} 
                    fill 
                    sizes="40px"
                    className="object-cover"
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
              <div className="text-gray-500 text-sm">{bill.description}</div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500 font-medium">Last Charge</div>
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
  );
};

export default UpcomingBills;
