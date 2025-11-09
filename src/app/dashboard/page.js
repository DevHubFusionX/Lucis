import ClientNavbar from '../../components/dashboard/ClientNavbar';
import WelcomeHeader from '../../components/dashboard/WelcomeHeader';
import UpcomingBookings from '../../components/dashboard/UpcomingBookings';
import PastBookings from '../../components/dashboard/PastBookings';
import Recommendations from '../../components/dashboard/Recommendations';
import NotificationsSummary from '../../components/dashboard/NotificationsSummary';
import { theme } from '../../lib/theme';

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: theme.colors.seaMist[50] }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeHeader />
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-8">
          {/* Main Content - Asymmetric Layout */}
          <div className="xl:col-span-8 space-y-6">
            <UpcomingBookings />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PastBookings />
              <Recommendations />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="xl:col-span-4">
            <NotificationsSummary />
          </div>
        </div>
      </main>
      <ClientNavbar />
    </div>
  );
}