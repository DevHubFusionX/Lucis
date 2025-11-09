import ClientNavbar from '../../../components/dashboard/ClientNavbar';
import BookingDetails from '../../../components/booking/BookingDetails';
import { theme } from '../../../lib/theme';

export default function BookingDetailPage({ params }) {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: theme.colors.seaMist[50] }}>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <BookingDetails bookingId={params.id} />
      </main>
      <ClientNavbar />
    </div>
  );
}