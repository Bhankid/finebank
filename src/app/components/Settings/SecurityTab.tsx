'use client';

import React, { useState } from 'react';
import { FaLock, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

interface SecuritySettings {
  password: string;
  twoFactorEnabled: boolean;
  recoveryEmail: string;
  recoveryPhone: string;
}

interface SecurityTabProps {
  initialSettings?: SecuritySettings;
  onUpdateSecurity?: (settings: SecuritySettings) => void;
}

const SecurityTab: React.FC<SecurityTabProps> = ({
  initialSettings = {
    password: '********',
    twoFactorEnabled: false,
    recoveryEmail: 'tanzir.rahman@email.com',
    recoveryPhone: '+880 | 51547 58868'
  },
  onUpdateSecurity = () => {}
}) => {
  const [settings, setSettings] = useState<SecuritySettings>(initialSettings);
  
  const toggleTwoFactor = () => {
    setSettings({
      ...settings,
      twoFactorEnabled: !settings.twoFactorEnabled
    });
  };

  const handleUpdateSecurity = () => {
    onUpdateSecurity(settings);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <FaLock className="text-gray-500 mr-2" />
          <h2 className="text-gray-700 font-semibold">Password</h2>
        </div>
        <p className="text-gray-500 mb-2">{settings.password}</p>
        <button className="text-teal-500 text-sm hover:underline">Change password</button>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <FaShieldAlt className="text-gray-500 mr-2" />
          <h2 className="text-gray-700 font-semibold">Two-Factor Authentication</h2>
        </div>
        <div className="flex items-center">
          <label className="inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={settings.twoFactorEnabled}
              onChange={toggleTwoFactor}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
            <span className="ml-3 text-gray-500">
              {settings.twoFactorEnabled ? 'Enabled' : 'Disabled'}
            </span>
          </label>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <FaMobileAlt className="text-gray-500 mr-2" />
          <h2 className="text-gray-700 font-semibold">Recovery Information</h2>
        </div>
        <div className="mb-2">
          <p className="text-gray-500 text-sm">Recovery Email</p>
          <p className="text-gray-700">{settings.recoveryEmail}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Recovery Phone</p>
          <p className="text-gray-700">{settings.recoveryPhone}</p>
        </div>
      </div>
      
      <button 
        className="bg-teal-500 text-white px-4 py-2 rounded self-start hover:bg-teal-600 transition-colors"
        onClick={handleUpdateSecurity}
      >
        Update Security Settings
      </button>
    </div>
  );
};

export default SecurityTab;
