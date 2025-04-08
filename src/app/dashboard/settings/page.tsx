import SettingsPage from '@/app/components/Settings/SettingsPage';
import Header from '@/app/components/Header/Header';
import Sidebar from '@/app/components/SideBar/Sidebar';

export const metadata = {
  title: 'Account Settings | Finebank',
  description: 'Manage your account settings and security preferences',
};

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      <main className="flex-1 ml-64">
        <Header userName="Tanzir" />
        <SettingsPage />
      </main>
    </div>
  );
}
