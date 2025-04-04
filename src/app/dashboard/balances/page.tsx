'use client';

import CreditCardBalance from '@/app/components/CreditCardBalance/CreditCardBalance';
import Header from '@/app/components/Header/Header';
import Sidebar from '@/app/components/SideBar/Sidebar';



const BalancePage = () => {
 

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        <Header userName="Tanzir" />
        <CreditCardBalance />
      </main>
    </div>
  );
};

export default BalancePage;
