import { FC } from 'react';
import Header from '@/app/components/Header/Header';
import DashboardSummary from '../components/DashboardSummary/DashboardSummary';
import Sidebar from '../components/SideBar/Sidebar';
import RecentTransaction from '../components/Dashboard/RecentTransaction';
import Statistics from '../components/Dashboard/Statistics';
import ExpensesBreakdown from '../components/Dashboard/ExpensesBreakdown';

const DashboardPage: FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 ml-64">
        <Header userName="Tanzir" />
        
        <DashboardSummary />
        
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
          
          <div className="grid grid-cols-[1fr_2fr] grid-rows-[auto_auto] gap-6">
            {/* Left Column - Recent Transactions */}
            <RecentTransaction className="col-start-1 row-span-2 h-full" />
            
            {/* Right Column - Top Section */}
            <Statistics className="col-start-2 row-start-1" />
            
            {/* Right Column - Bottom Section */}
            <ExpensesBreakdown className="col-start-2 row-start-2" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;