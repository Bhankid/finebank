'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Import icons (you can use any icon library like react-icons)
import { 
  FaTachometerAlt, 
  FaWallet, 
  FaExchangeAlt, 
  FaFileInvoiceDollar, 
  FaReceipt, 
  FaBullseye, 
  FaCog, 
  FaSignOutAlt, 
  FaEllipsisV 
} from 'react-icons/fa';

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const Sidebar = () => {
  const pathname = usePathname();
  const [userName] = useState('Tanzir Rahman');

  const navItems: NavItem[] = [
    { name: 'Overview', path: '/dashboard', icon: <FaTachometerAlt className="mr-3" /> },
    { name: 'Balances', path: '/dashboard/balances', icon: <FaWallet className="mr-3" /> },
    { name: 'Transactions', path: '/dashboard/transactions', icon: <FaExchangeAlt className="mr-3" /> },
    { name: 'Bills', path: '/dashboard/bills', icon: <FaFileInvoiceDollar className="mr-3" /> },
    { name: 'Expenses', path: '/dashboard/expenses', icon: <FaReceipt className="mr-3" /> },
    { name: 'Goals', path: '/dashboard/goals', icon: <FaBullseye className="mr-3" /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <FaCog className="mr-3" /> },
  ];

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logging out...');
  };

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col justify-between p-4 fixed left-0 top-0">
      <div>
        <div className="text-center mb-8">
          {/* <Image 
            src="/Frame 40589.png" 
            alt="FINEbank.IO Logo" 
            width={120} 
            height={40} 
            className="mx-auto mb-2"
          /> */}
          <div className="text-xl font-bold text-white">FINEbank.IO</div>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name} 
                href={item.path}
                className={`flex items-center w-full p-2 rounded-md transition-colors duration-200 ${
                  isActive 
                    ? 'bg-teal-500 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div>
        <button 
          onClick={handleLogout}
          className="flex items-center w-full p-2 mb-4 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-200"
        >
          <FaSignOutAlt className="mr-3" />
          <span>Logout</span>
        </button>
        
        <div className="flex items-center p-2 bg-gray-800 rounded-md">
          <Image 
            src="/profile.png" 
            alt="User profile picture" 
            width={40} 
            height={40} 
            className="rounded-full mr-3"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = '/profile.png';
            }}
          />
          <div>
            <div className="text-sm">{userName}</div>
            <Link href="/dashboard/profile" className="text-xs text-gray-400 hover:text-teal-500">
              View profile
            </Link>
          </div>
          <button className="ml-auto text-gray-400 hover:text-white">
            <FaEllipsisV />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
