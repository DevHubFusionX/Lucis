'use client';

import { useState } from 'react';
import StudioNavbar from '../../../components/studio/StudioNavbar';
import StudioSidebar from '../../../components/studio/StudioSidebar';
import StudioReviews from '../../../components/studio/StudioReviews';
import { theme } from '../../../lib/theme';

export default function ProfessionalReviewsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[50] }}>
      <StudioNavbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex pt-16">
        <StudioSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        <main className="flex-1 lg:ml-64 p-4 lg:p-8">
          <StudioReviews />
        </main>
      </div>
    </div>
  );
}