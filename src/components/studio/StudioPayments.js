'use client';

import { useState } from 'react';
import { CreditCard, DollarSign, Clock, CheckCircle, Filter, Download } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function StudioPayments() {
  const [payments] = useState([
    {
      id: 102,
      client: 'Sarah Johnson',
      amount: 30000,
      status: 'paid',
      date: 'Nov 13, 2024',
      type: 'Wedding',
      method: 'Bank Transfer'
    },
    {
      id: 103,
      client: 'Mike Chen',
      amount: 45000,
      status: 'pending',
      date: 'Nov 20, 2024',
      type: 'Portrait',
      method: 'Card Payment'
    },
    {
      id: 104,
      client: 'Emma Wilson',
      amount: 120000,
      status: 'paid',
      date: 'Nov 10, 2024',
      type: 'Event',
      method: 'Bank Transfer'
    },
    {
      id: 105,
      client: 'David Brown',
      amount: 75000,
      status: 'pending',
      date: 'Nov 25, 2024',
      type: 'Corporate',
      method: 'Card Payment'
    },
    {
      id: 106,
      client: 'Lisa Adams',
      amount: 90000,
      status: 'paid',
      date: 'Nov 8, 2024',
      type: 'Wedding',
      method: 'Bank Transfer'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredPayments = payments.filter(payment => {
    if (filter === 'all') return true;
    return payment.status === filter;
  });

  const totalEarnings = payments.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0);
  const pendingAmount = payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0);
  const paidCount = payments.filter(p => p.status === 'paid').length;
  const pendingCount = payments.filter(p => p.status === 'pending').length;

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Payments</h1>
          <p className="mt-2" style={{ color: theme.colors.text.secondary }}>Track your earnings and payment status</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5" style={{ color: theme.colors.text.muted }} />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 rounded-xl focus:ring-2 focus:outline-none"
              style={{ 
                border: `1px solid ${theme.colors.border}`,
                backgroundColor: theme.colors.bg.primary,
                color: theme.colors.text.primary,
                focusRingColor: theme.colors.copper.DEFAULT
              }}
            >
              <option value="all">All Payments</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          
          <button 
            className="flex items-center justify-center gap-2 px-4 py-2 text-white font-medium rounded-xl transition-colors"
            style={{ backgroundColor: theme.colors.copper.DEFAULT }}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div 
          className="p-4 lg:p-6 rounded-2xl"
          style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-xl">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>₦{(totalEarnings / 1000).toFixed(0)}k</p>
              <p className="text-xs lg:text-sm" style={{ color: theme.colors.text.secondary }}>Total Earnings</p>
            </div>
          </div>
        </div>
        
        <div 
          className="p-4 lg:p-6 rounded-2xl"
          style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-xl">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>₦{(pendingAmount / 1000).toFixed(0)}k</p>
              <p className="text-xs lg:text-sm" style={{ color: theme.colors.text.secondary }}>Pending</p>
            </div>
          </div>
        </div>
        
        <div 
          className="p-4 lg:p-6 rounded-2xl"
          style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-xl">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{paidCount}</p>
              <p className="text-xs lg:text-sm" style={{ color: theme.colors.text.secondary }}>Paid Bookings</p>
            </div>
          </div>
        </div>
        
        <div 
          className="p-4 lg:p-6 rounded-2xl"
          style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-xl">
              <CreditCard className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{payments.length}</p>
              <p className="text-xs lg:text-sm" style={{ color: theme.colors.text.secondary }}>Total Transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div 
        className="hidden lg:block rounded-2xl overflow-hidden"
        style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead style={{ backgroundColor: theme.colors.seaMist[50], borderBottom: `1px solid ${theme.colors.border}` }}>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Booking</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Method</th>
              </tr>
            </thead>
            <tbody style={{ borderColor: theme.colors.border }} className="divide-y">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="transition-colors hover:bg-opacity-50" style={{ ':hover': { backgroundColor: theme.colors.seaMist[25] } }}>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium" style={{ color: theme.colors.text.primary }}>#{payment.id}</p>
                      <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{payment.type}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium" style={{ color: theme.colors.text.primary }}>{payment.client}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold" style={{ color: theme.colors.text.primary }}>₦{payment.amount.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full capitalize ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p style={{ color: theme.colors.text.secondary }}>{payment.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p style={{ color: theme.colors.text.secondary }}>{payment.method}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredPayments.map((payment) => (
          <div 
            key={payment.id}
            className="p-4 rounded-2xl"
            style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold" style={{ color: theme.colors.text.primary }}>#{payment.id}</h3>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{payment.type}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(payment.status)}`}>
                {payment.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.muted }}>Client:</span>
                <span className="text-sm font-medium" style={{ color: theme.colors.text.primary }}>{payment.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.muted }}>Amount:</span>
                <span className="text-sm font-semibold" style={{ color: theme.colors.copper.DEFAULT }}>₦{payment.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.muted }}>Date:</span>
                <span className="text-sm" style={{ color: theme.colors.text.secondary }}>{payment.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: theme.colors.text.muted }}>Method:</span>
                <span className="text-sm" style={{ color: theme.colors.text.secondary }}>{payment.method}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPayments.length === 0 && (
        <div className="text-center py-12">
          <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No payments found</h3>
          <p className="text-gray-600">
            {filter === 'all' ? 'You have no payment records yet.' : `No ${filter} payments found.`}
          </p>
        </div>
      )}
    </div>
  );
}