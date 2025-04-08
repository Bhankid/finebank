'use client';

import React, { useState } from 'react';
import AccountTab from './AccountTab';
import SecurityTab from './SecurityTab';

type TabType = 'account' | 'security';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('account');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <div className="flex border-b border-gray-200 mb-8">
          <button 
            className={`font-semibold px-4 py-2 ${
              activeTab === 'account' 
                ? 'text-teal-500 border-b-2 border-teal-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('account')}
          >
            Account
          </button>
          <button 
            className={`font-semibold px-4 py-2 ${
              activeTab === 'security' 
                ? 'text-teal-500 border-b-2 border-teal-500' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
        </div>
        
        {activeTab === 'account' && (
          <AccountTab 
            initialProfile={{
              fullName: 'Tanzir Rahman',
              email: 'tanzir.rahman@email.com',
              username: 'tanzir.rahman',
              phoneNumber: '+880 | 51547 58868'
            }}
            onUpdateProfile={(profile) => console.log('Profile updated:', profile)}
          />
        )}
        
        {activeTab === 'security' && (
          <SecurityTab 
            onUpdateSecurity={(settings) => console.log('Security updated:', settings)}
          />
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
