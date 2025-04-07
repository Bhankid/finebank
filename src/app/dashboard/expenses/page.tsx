import Sidebar from '@/app/components/SideBar/Sidebar';
import ExpensesComparison from '@/app/components/Expenses/ExpensesComparison';
import Header from '@/app/components/Header/Header';
import ExpensesBreakdown from '@/app/components/Expenses/ExpensesBreakdown';

export const metadata = {
  title: 'Expenses Comparison | Finebank',
  description: 'View and analyze your expense patterns over time',
};

export default function ExpensesPage() {
  return (
      <div className="min-h-screen bg-gray-50">
          <Sidebar />

         {/* Main Content */}
          <main className="flex-1 ml-64">
            <Header userName="Tanzir" />
      <ExpensesComparison />
       <ExpensesBreakdown />
      </main>
    </div>
  );
}
