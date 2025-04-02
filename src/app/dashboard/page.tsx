import { FC } from 'react';
import Header from '@/app/components/Header/Header';
import DashboardSummary from '../components/DashboardSummary/DashboardSummary';
import Sidebar from '../components/SideBar/Sidebar';

const DashboardPage: FC = () => {
  return (
      <div className="min-h-screen bg-gray-50">
          <Sidebar />
    <main className="flex-1">
      <Header userName="Tanzir" />
      
        <DashboardSummary />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Summary Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Balance</h2>
            <p className="text-3xl font-bold text-teal-600">$24,562.00</p>
            <p className="text-sm text-gray-500 mt-2">Updated 2 hours ago</p>
          </div>
          
          {/* Summary Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Monthly Income</h2>
            <p className="text-3xl font-bold text-green-600">$8,350.00</p>
            <p className="text-sm text-gray-500 mt-2">+5.3% from last month</p>
          </div>
          
          {/* Summary Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Monthly Expenses</h2>
            <p className="text-3xl font-bold text-red-500">$4,825.00</p>
            <p className="text-sm text-gray-500 mt-2">-2.7% from last month</p>
          </div>
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
