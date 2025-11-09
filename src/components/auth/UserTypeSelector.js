'use client';

import { Camera, User } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function UserTypeSelector({ userType, setUserType }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-3" style={{ color: theme.colors.text.primary }}>
        I am a
      </label>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setUserType('user')}
          className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
            userType === 'user' ? 'border-2 shadow-sm' : 'border-gray-200 hover:border-gray-300'
          }`}
          style={{
            borderColor: userType === 'user' ? theme.colors.copper.DEFAULT : undefined,
            backgroundColor: userType === 'user' ? theme.colors.copper[50] : 'white'
          }}
        >
          <User className="w-5 h-5" style={{ color: userType === 'user' ? theme.colors.copper.DEFAULT : theme.colors.text.muted }} />
          <span className={`font-medium ${userType === 'user' ? '' : 'text-gray-600'}`}
            style={{ color: userType === 'user' ? theme.colors.copper.DEFAULT : undefined }}>
            Client
          </span>
        </button>
        
        <button
          type="button"
          onClick={() => setUserType('professional')}
          className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
            userType === 'professional' ? 'border-2 shadow-sm' : 'border-gray-200 hover:border-gray-300'
          }`}
          style={{
            borderColor: userType === 'professional' ? theme.colors.copper.DEFAULT : undefined,
            backgroundColor: userType === 'professional' ? theme.colors.copper[50] : 'white'
          }}
        >
          <Camera className="w-5 h-5" style={{ color: userType === 'professional' ? theme.colors.copper.DEFAULT : theme.colors.text.muted }} />
          <span className={`font-medium ${userType === 'professional' ? '' : 'text-gray-600'}`}
            style={{ color: userType === 'professional' ? theme.colors.copper.DEFAULT : undefined }}>
            Professional
          </span>
        </button>
      </div>
    </div>
  );
}