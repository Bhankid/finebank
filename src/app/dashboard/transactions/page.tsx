'use client';

import Header from "@/app/components/Header/Header";
import Sidebar from "@/app/components/SideBar/Sidebar";
import AccountDetails from "@/app/components/Transactions/AccountDetails";
import TransactionHistory from "@/app/components/Transactions/TransactionHistory";



const TransactionsPage = () => {


  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

        {/* Main Content */}
          <main className="flex-1 ml-64">
              <Header userName="Tanzir" />
              <AccountDetails />
              <TransactionHistory />
         </main>
    </div>
  );
};

export default TransactionsPage;
