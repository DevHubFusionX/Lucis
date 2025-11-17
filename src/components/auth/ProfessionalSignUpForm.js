'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Camera, Briefcase, Award, Upload } from 'lucide-react';
import { theme } from '../../lib/theme';
import { professionalAuthService } from '../../lib/auth/professionalAuth';
import { useAuth } from './AuthProvider';
import PersonalInfoFields from './PersonalInfoFields';
import AccountFields from './AccountFields';
import ProfileUpload from './ProfileUpload';
import ProfessionalFields from './ProfessionalFields';
import MediaUpload from './MediaUpload';
import SocialLogin from './SocialLogin';

const STEPS = [
  { id: 1, title: 'Personal Details', desc: 'Your basic information', icon: Camera },
  { id: 2, title: 'Account Setup', desc: 'Login credentials', icon: Briefcase },
  { id: 3, title: 'Profile Photo', desc: 'Add your picture', icon: Upload },
  { id: 4, title: 'Professional Info', desc: 'Skills & portfolio', icon: Award }
];

export default function ProfessionalSignUpForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '',
    photo: null, bio: '', baseCity: '', skills: [], mediaFiles: []
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [apiError, setApiError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName': return value.length < 2 ? 'First name must be at least 2 characters' : '';
      case 'lastName': return value.length < 2 ? 'Last name must be at least 2 characters' : '';
      case 'email': return !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email' : '';
      case 'phone': return value.length < 10 ? 'Please enter a valid phone number' : '';
      case 'password': return value.length < 6 ? 'Password must be at least 6 characters' : '';
      case 'baseCity': return value.length < 2 ? 'Base city is required' : '';
      default: return '';
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

  const getFieldStyles = (fieldName) => {
    const status = !touched[fieldName] ? 'default' : errors[fieldName] ? 'error' : 'success';
    const baseStyle = { borderColor: theme.colors.border, backgroundColor: 'white' };
    
    switch (status) {
      case 'error': return { ...baseStyle, borderColor: theme.colors.error[500], backgroundColor: theme.colors.error[50] };
      case 'success': return { ...baseStyle, borderColor: theme.colors.success[500], backgroundColor: theme.colors.success[50] };
      default: return baseStyle;
    }
  };

  const validateStep = (step) => {
    const stepFields = {
      1: ['firstName', 'lastName', 'phone'],
      2: ['email', 'password'],
      4: ['baseCity']
    };
    
    const fields = stepFields[step] || [];
    const stepErrors = {};
    
    fields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) stepErrors[field] = error;
    });
    
    setErrors(stepErrors);
    setTouched(fields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsLoading(true);
    setApiError('');
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          await submitForm(latitude, longitude);
        },
        async () => await submitForm(0, 0)
      );
    } else {
      await submitForm(0, 0);
    }
  };

  const submitForm = async (lat, lng) => {
    try {
      const apiFormData = new FormData();
      apiFormData.append('email', formData.email);
      apiFormData.append('password', formData.password);
      apiFormData.append('phone', formData.phone);
      apiFormData.append('firstName', formData.firstName);
      apiFormData.append('lastName', formData.lastName);
      apiFormData.append('latitude', lat.toString());
      apiFormData.append('longitude', lng.toString());
      apiFormData.append('bio', formData.bio || '');
      apiFormData.append('baseCity', formData.baseCity);
      
      formData.skills.forEach(skill => apiFormData.append('skills[]', skill));
      formData.mediaFiles.forEach(file => apiFormData.append('media', file));
      
      if (formData.photo) {
        apiFormData.append('media', formData.photo);
      }
      
      const response = await professionalAuthService.register(apiFormData);
      
      if (response.error === false && response.data) {
        login(response.data.token, response.data.user);
        router.push('/studio');
      } else {
        setApiError(response.message || 'Registration failed');
      }
    } catch (error) {
      setApiError(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isLastStep = currentStep === 4;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Camera className="w-6 h-6 text-orange-600" />
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Professional</span>
        </div>
        <h2 className="text-xl font-semibold mb-1" style={{ color: theme.colors.text.primary }}>
          {STEPS[currentStep - 1]?.title}
        </h2>
        <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
          {STEPS[currentStep - 1]?.desc}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs mb-2" style={{ color: theme.colors.text.muted }}>
          <span>Step {currentStep}</span>
          <span>4 steps</span>
        </div>
        <div className="w-full rounded-full h-2" style={{ backgroundColor: theme.colors.gray[200] }}>
          <div 
            className="h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${(currentStep / 4) * 100}%`,
              backgroundColor: '#ea580c'
            }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[300px]">
        {currentStep === 1 && (
          <div className="space-y-4">
            <PersonalInfoFields 
              formData={formData} errors={errors} touched={touched}
              onChange={handleChange} onBlur={handleBlur} getFieldStyles={getFieldStyles}
            />
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="space-y-4">
            <AccountFields 
              formData={formData} errors={errors} touched={touched}
              showPassword={showPassword} setShowPassword={setShowPassword}
              onChange={handleChange} onBlur={handleBlur} getFieldStyles={getFieldStyles}
            />
          </div>
        )}
        
        {currentStep === 3 && (
          <div>
            <ProfileUpload onFileChange={(file) => setFormData(prev => ({ ...prev, photo: file }))} />
          </div>
        )}
        
        {currentStep === 4 && (
          <div className="space-y-6">
            <ProfessionalFields 
              formData={formData} errors={errors} touched={touched}
              onChange={handleChange} onBlur={handleBlur} getFieldStyles={getFieldStyles}
              onSkillsChange={(skills) => setFormData(prev => ({ ...prev, skills }))}
            />
            <MediaUpload onMediaChange={(mediaFiles) => setFormData(prev => ({ ...prev, mediaFiles }))} />
          </div>
        )}

        {/* API Error */}
        {apiError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{apiError}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-6">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="flex-1 py-3 px-4 rounded-lg transition-colors font-medium"
            style={{
              border: `1px solid ${theme.colors.border}`,
              color: theme.colors.text.secondary,
              backgroundColor: theme.colors.bg.primary
            }}
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={isLastStep ? handleSubmit : nextStep}
          disabled={isLoading}
          className="flex-1 py-3 px-4 text-white rounded-lg transition-all font-medium disabled:opacity-50"
          style={{ backgroundColor: '#ea580c' }}
        >
          {isLoading ? 'Creating...' : isLastStep ? 'Create Account' : 'Continue'}
        </button>
      </div>

      {/* Social Login */}
      <div className="mt-8">
        <SocialLogin />
      </div>
    </div>
  );
}