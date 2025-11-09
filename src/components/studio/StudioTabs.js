'use client';

import { Camera, Eye, TrendingUp, Edit3 } from 'lucide-react';
import { theme } from '../../lib/theme';
import StudioOverviewTab from './StudioOverviewTab';
import StudioPortfolioTab from './StudioPortfolioTab';
import StudioAnalyticsTab from './StudioAnalyticsTab';
import StudioSettingsTab from './StudioSettingsTab';

export default function StudioTabs({ activeTab, setActiveTab, user, studioData }) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Camera },
    { id: 'portfolio', label: 'Portfolio', icon: Eye },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Edit3 }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b" style={{ borderColor: theme.colors.border }}>
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 font-medium transition-colors border-b-2 whitespace-nowrap"
              style={{
                borderColor: activeTab === tab.id ? theme.colors.copper.DEFAULT : 'transparent',
                color: activeTab === tab.id ? theme.colors.copper.DEFAULT : theme.colors.text.muted
              }}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>
      
      {/* Tab Content */}
      <div className="p-4 sm:p-6">
        {activeTab === 'overview' && <StudioOverviewTab user={user} studioData={studioData} />}
        {activeTab === 'portfolio' && <StudioPortfolioTab studioData={studioData} />}
        {activeTab === 'analytics' && <StudioAnalyticsTab studioData={studioData} />}
        {activeTab === 'settings' && <StudioSettingsTab user={user} />}
      </div>
    </div>
  );
}