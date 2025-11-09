import ClientNavbar from '../../components/dashboard/ClientNavbar';
import SearchInterface from '../../components/search/SearchInterface';
import { theme } from '../../lib/theme';

export default function SearchPage({ searchParams }) {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: theme.colors.seaMist[50] }}>
      <div className="pt-6">
        <SearchInterface initialQuery={searchParams?.query || ''} />
      </div>
      <ClientNavbar />
    </div>
  );
}