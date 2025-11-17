import ClientNavbar from '../../../components/dashboard/ClientNavbar';
import BookingsList from '../../../components/bookings/BookingsList';
import { theme } from '../../../lib/theme';

export default function UserBookingsPage() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: theme.colors.seaMist[50] }}>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <BookingsList />
      </main>
      <ClientNavbar />
    </div>
  );
}