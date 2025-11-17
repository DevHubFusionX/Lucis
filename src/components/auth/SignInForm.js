'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import { theme } from '../../lib/theme';
import { userAuthService } from '../../lib/auth/userAuth';
import { professionalAuthService } from '../../lib/auth/professionalAuth';
import { useAuth } from './AuthProvider';
import UserTypeSelector from './UserTypeSelector';

export default function SignInForm(props = {}) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [userType, setUserType] = useState(props.userType || 'user');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [apiError, setApiError] = useState('');

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email' : '';
      case 'password':
        return value.length < 1 ? 'Password is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setApiError('');
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      setIsLoading(false);
      return;
    }
    
    try {
      const authService = userType === 'professional' ? professionalAuthService : userAuthService;
      const response = await authService.login(formData.email, formData.password);
      
      if (response.error === false && response.data) {
        // Use AuthProvider login method
        login(response.data.token, response.data.user);
        
        // Redirect based on user type
        const redirectPath = userType === 'professional' ? '/studio' : '/dashboard';
        router.push(redirectPath);
      } else {
        setApiError(response.message || 'Login failed');
      }
    } catch (error) {
      setApiError(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getFieldStatus = (fieldName) => {
    if (!touched[fieldName]) return 'default';
    return errors[fieldName] ? 'error' : 'success';
  };

  const getFieldStyles = (fieldName) => {
    const status = getFieldStatus(fieldName);
    const baseStyle = {
      borderColor: theme.colors.border,
      backgroundColor: 'white'
    };
    
    switch (status) {
      case 'error':
        return {
          ...baseStyle,
          borderColor: theme.colors.error[500],
          backgroundColor: theme.colors.error[50]
        };
      case 'success':
        return {
          ...baseStyle,
          borderColor: theme.colors.success[500],
          backgroundColor: theme.colors.success[50]
        };
      default:
        return baseStyle;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {!props.userType && <UserTypeSelector userType={userType} setUserType={setUserType} />}
      {/* Email Field */}
      <div>
        <div className="relative">
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
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

      {/* Password Field */}
      <div>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
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

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input 
            type="checkbox" 
            className="w-4 h-4 rounded" 
            style={{ accentColor: theme.colors.copper.DEFAULT }}
          />
          <span className="ml-2 text-sm" style={{ color: theme.colors.text.secondary }}>Remember me</span>
        </label>
        <Link 
          href="/forgot-password" 
          className="text-sm transition-colors duration-200 hover:opacity-80"
          style={{ color: theme.colors.copper.DEFAULT }}
        >
          Forgot password?
        </Link>
      </div>

      {/* API Error */}
      {apiError && (
        <div className="p-4 rounded-xl" style={{ backgroundColor: theme.colors.error[50], borderColor: theme.colors.error[200] }}>
          <p className="text-sm" style={{ color: theme.colors.error[600] }}>{apiError}</p>
        </div>
      )}

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={isLoading || Object.keys(errors).some(key => errors[key])}
        className="w-full py-4 font-semibold rounded-xl transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center mt-8"
        style={{
          backgroundColor: isLoading || Object.keys(errors).some(key => errors[key]) 
            ? theme.colors.gray[300] 
            : theme.colors.copper.DEFAULT,
          color: 'white'
        }}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            Signing in...
          </>
        ) : (
          'Sign In'
        )}
      </button>
    </form>
  );
}