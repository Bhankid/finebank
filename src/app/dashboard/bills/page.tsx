import Sidebar from '@/app/components/SideBar/Sidebar';
import UpcomingBills from '../../components/Bills/UpcomingBills';
import Header from '@/app/components/Header/Header';

export const metadata = {
  title: 'Upcoming Bills | Finebank',
  description: 'View and manage your upcoming bills and subscriptions',
};

export default function BillsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64">
        <Header userName="Tanzir" />
      <UpcomingBills />
      </main>
    </div>
  );
}
