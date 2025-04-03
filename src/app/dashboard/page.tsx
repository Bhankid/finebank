import { FC } from 'react';
import Header from '@/app/components/Header/Header';
import DashboardSummary from '../components/DashboardSummary/DashboardSummary';
import Sidebar from '../components/SideBar/Sidebar';
import RecentTransaction from '../components/Dashboard/RecentTransaction';
import Statistics from '../components/Dashboard/Statistics';

const DashboardPage: FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 ml-64"> {/* ml-64 matches the width of the sidebar */}
        <Header userName="Tanzir" />
        
        <DashboardSummary />
        
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
           <RecentTransaction />
            
            <Statistics />
          
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h2>
            
            <div className="space-y-4">
              {/* Transaction Item 1 */}
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <span className="text-blue-600">🛒</span>
                  </div>
                  <div>
                    <p className="font-medium">Grocery Shopping</p>
                    <p className="text-sm text-gray-500">May 18, 2023</p>
                  </div>
                </div>
                <p className="font-medium text-red-500">-$156.00</p>
              </div>
              
              {/* Transaction Item 2 */}
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <span className="text-green-600">💰</span>
                  </div>
                  <div>
                    <p className="font-medium">Salary Deposit</p>
                    <p className="text-sm text-gray-500">May 15, 2023</p>
                  </div>
                </div>
                <p className="font-medium text-green-600">+$4,250.00</p>
              </div>
              
              {/* Transaction Item 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <span className="text-purple-600">🏠</span>
                  </div>
                  <div>
                    <p className="font-medium">Rent Payment</p>
                    <p className="text-sm text-gray-500">May 10, 2023</p>
                  </div>
                </div>
                <p className="font-medium text-red-500">-$1,200.00</p>
              </div>
            </div>
            
            <button className="mt-4 text-teal-600 hover:text-teal-800 text-sm font-medium">
              View all transactions →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
