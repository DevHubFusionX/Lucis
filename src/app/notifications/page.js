import ClientNavbar from '../../components/dashboard/ClientNavbar';
import NotificationsInterface from '../../components/notifications/NotificationsInterface';
import { theme } from '../../lib/theme';

export default function NotificationsPage() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: theme.colors.seaMist[50] }}>
      <main className="max-w-5xl mx-auto px-4 py-6">
        <NotificationsInterface />
      </main>
      <ClientNavbar />
    </div>
  );
}