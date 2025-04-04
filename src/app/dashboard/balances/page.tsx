'use client';

import CheckingAccount from '@/app/components/CreditCardBalance/CheckingAccount';
import CreditCardBalance from '@/app/components/CreditCardBalance/CreditCardBalance';
import InvestmentCard from '@/app/components/CreditCardBalance/InvestmentCard';
import LoanCard from '@/app/components/CreditCardBalance/LoanCard';
import SavingsAccount from '@/app/components/CreditCardBalance/SavingsAccount';
import Header from '@/app/components/Header/Header';
import Sidebar from '@/app/components/SideBar/Sidebar';



const BalancePage = () => {
 

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        <Header userName="Tanzir" />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        <CreditCardBalance />
        <CheckingAccount />
          <SavingsAccount />
          <InvestmentCard />
          <LoanCard />
        </div> 
      </main>
    </div>
  );
};

export default BalancePage;
