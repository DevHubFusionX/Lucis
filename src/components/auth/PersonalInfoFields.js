'use client';

import { Check, X } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function PersonalInfoFields({ formData, errors, touched, onChange, onBlur, getFieldStyles }) {
  return (
    <>
      {/* First Name */}
      <div>
        <div className="relative">
          <input
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
            style={{
              ...getFieldStyles('firstName'),
              focusRingColor: theme.colors.copper.DEFAULT + '40'
            }}
            placeholder="First name"
          />
          {touched.firstName && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {errors.firstName ? (
                <X className="w-5 h-5" style={{ color: theme.colors.error[500] }} />
              ) : (
                <Check className="w-5 h-5" style={{ color: theme.colors.success[500] }} />
              )}
            </div>
          )}
        </div>
        {errors.firstName && touched.firstName && (
          <p className="mt-2 text-sm" style={{ color: theme.colors.error[500] }}>{errors.firstName}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <div className="relative">
          <input
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
            style={{
              ...getFieldStyles('lastName'),
              focusRingColor: theme.colors.copper.DEFAULT + '40'
            }}
            placeholder="Last name"
          />
          {touched.lastName && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {errors.lastName ? (
                <X className="w-5 h-5" style={{ color: theme.colors.error[500] }} />
              ) : (
                <Check className="w-5 h-5" style={{ color: theme.colors.success[500] }} />
              )}
            </div>
          )}
        </div>
        {errors.lastName && touched.lastName && (
          <p className="mt-2 text-sm" style={{ color: theme.colors.error[500] }}>{errors.lastName}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <div className="relative">
          <input
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
            style={{
              ...getFieldStyles('phone'),
              focusRingColor: theme.colors.copper.DEFAULT + '40'
            }}
            placeholder="Phone number"
          />
          {touched.phone && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {errors.phone ? (
                <X className="w-5 h-5" style={{ color: theme.colors.error[500] }} />
              ) : (
                <Check className="w-5 h-5" style={{ color: theme.colors.success[500] }} />
              )}
            </div>
          )}
        </div>
        {errors.phone && touched.phone && (
          <p className="mt-2 text-sm" style={{ color: theme.colors.error[500] }}>{errors.phone}</p>
        )}
      </div>
    </>
  );
}