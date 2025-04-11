import ExpenseGoals from '@/app/components/Goals/ExpenseGoals';
import SavingsGoal from '@/app/components/Goals/SavingsGoal';
import SavingSummary from '@/app/components/Goals/SavingSummary';
import Header from '@/app/components/Header/Header';
import Sidebar from '@/app/components/SideBar/Sidebar';

export const metadata = {
  title: 'Savings Goals | Finebank',
  description: 'Track and manage your savings goals',
};

export default function GoalsPage() {
  return (
      <div className="min-h-screen bg-white">
         {/* Sidebar */}
            <Sidebar />

      <main className="flex-1 ml-64">
         <Header userName="Tanzir" /> 
      <h1 className="text-gray-600 text-xl mb-4 max-w-6xl mx-auto p-6">Goals</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  <div className="col-span-1 md:col-span-1">
    <SavingsGoal
      targetAchieved={12500}
      monthlyTarget={20000}
      startDate="01 May"
      endDate="31 May"
    />
  </div>
  
  <div className="col-span-1 md:col-span-2">
    <SavingSummary />
  </div>
</div>
    <ExpenseGoals />
      </main>
    </div>
  );
}
