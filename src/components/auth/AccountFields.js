'use client';

import { Eye, EyeOff, Check, X } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function AccountFields({ 
  formData, 
  errors, 
  touched, 
  showPassword, 
  setShowPassword, 
  onChange, 
  onBlur, 
  getFieldStyles 
}) {
  return (
    <>
      {/* Email */}
      <div>
        <div className="relative">
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
            style={{
              ...getFieldStyles('email'),
              focusRingColor: theme.colors.copper.DEFAULT + '40'
            }}
            placeholder="Email address"
          />
          {touched.email && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {errors.email ? (
                <X className="w-5 h-5" style={{ color: theme.colors.error[500] }} />
              ) : (
                <Check className="w-5 h-5" style={{ color: theme.colors.success[500] }} />
              )}
            </div>
          )}
        </div>
        {errors.email && touched.email && (
          <p className="mt-2 text-sm" style={{ color: theme.colors.error[500] }}>{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
            style={{
              ...getFieldStyles('password'),
              focusRingColor: theme.colors.copper.DEFAULT + '40'
            }}
            placeholder="Password"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            {touched.password && (
              errors.password ? (
                <X className="w-5 h-5" style={{ color: theme.colors.error[500] }} />
              ) : (
                <Check className="w-5 h-5" style={{ color: theme.colors.success[500] }} />
              )
            )}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="transition-colors duration-200 hover:opacity-80"
              style={{ color: theme.colors.text.muted }}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {errors.password && touched.password && (
          <p className="mt-2 text-sm" style={{ color: theme.colors.error[500] }}>{errors.password}</p>
        )}
      </div>
    </>
  );
}