'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, X, Calendar, Settings } from 'lucide-react';

export default function StudioAvailability() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [workingHours, setWorkingHours] = useState({ start: '09:00', end: '18:00' });
  const [busyDays, setBusyDays] = useState(new Set(['2024-12-15', '2024-12-22']));
  const [bookedSessions] = useState([
    { date: '2024-12-12', time: '10:00', client: 'John Doe', type: 'Wedding' },
    { date: '2024-12-18', time: '14:00', client: 'Sarah Wilson', type: 'Portrait' },
    { date: '2024-12-20', time: '11:00', client: 'Mike Chen', type: 'Event' }
  ]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const toggleBusyDay = (date) => {
    const dateStr = formatDate(date);
    const newBusyDays = new Set(busyDays);
    
    if (newBusyDays.has(dateStr)) {
      newBusyDays.delete(dateStr);
    } else {
      newBusyDays.add(dateStr);
    }
    
    setBusyDays(newBusyDays);
  };

  const getDayStatus = (date) => {
    const dateStr = formatDate(date);
    const hasBooking = bookedSessions.some(session => session.date === dateStr);
    const isBusy = busyDays.has(dateStr);
    
    if (hasBooking) return 'booked';
    if (isBusy) return 'busy';
    return 'available';
  };

  const getDayClasses = (date) => {
    const status = getDayStatus(date);
    const isToday = formatDate(date) === formatDate(new Date());
    
    let classes = 'w-full h-12 rounded-lg font-medium transition-all cursor-pointer ';
    
    if (isToday) {
      classes += 'ring-2 ring-yellow-500 ';
    }
    
    switch (status) {
      case 'booked':
        classes += 'bg-blue-500 text-white hover:bg-blue-600';
        break;
      case 'busy':
        classes += 'bg-red-500 text-white hover:bg-red-600';
        break;
      default:
        classes += 'bg-white hover:bg-yellow-50 text-gray-700 border border-gray-200 hover:border-yellow-300';
    }
    
    return classes;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Availability Calendar</h1>
          <p className="text-gray-600 mt-2">Manage your schedule and working hours</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-gray-200">
            <Clock className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">{workingHours.start} - {workingHours.end}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {dayNames.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {getDaysInMonth(currentDate).map((date, index) => (
              <div key={index} className="aspect-square">
                {date ? (
                  <button
                    onClick={() => toggleBusyDay(date)}
                    className={getDayClasses(date)}
                  >
                    {date.getDate()}
                  </button>
                ) : (
                  <div className="w-full h-12"></div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border border-gray-200 rounded"></div>
              <span className="text-sm text-gray-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm text-gray-600">Booked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-600">Busy/Blocked</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Working Hours */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Working Hours</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                <input
                  type="time"
                  value={workingHours.start}
                  onChange={(e) => setWorkingHours(prev => ({ ...prev, start: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                <input
                  type="time"
                  value={workingHours.end}
                  onChange={(e) => setWorkingHours(prev => ({ ...prev, end: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Upcoming Bookings</h3>
            </div>
            
            <div className="space-y-3">
              {bookedSessions.map((session, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{session.client}</p>
                      <p className="text-sm text-gray-600">{session.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{session.date}</p>
                      <p className="text-sm text-gray-600">{session.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors">
                Block Next Week
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors">
                Clear All Blocks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}