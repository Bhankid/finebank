'use client';

import React, { useState } from 'react';
import AccountTab from './AccountTab';
import SecurityTab from './SecurityTab';

type TabType = 'account' | 'security';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('account');

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full">
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`font-semibold px-4 py-2 cursor-pointer ${
              activeTab === 'account'
                ? 'text-teal-500 border-b-2 border-teal-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('account')}
          >
            Account
          </button>
          <button
            className={`font-semibold px-4 py-2 cursor-pointer ${
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
            phoneNumber="+880 | 51547 58868"
            onUpdateSecurity={() => console.log('Security updated')}
          />
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
