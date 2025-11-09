'use client';

import ProfessionalMultiStepSignUp from './ProfessionalMultiStepSignUp';
import SocialLogin from './SocialLogin';

export default function ResponsiveSignUpForm() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <ProfessionalMultiStepSignUp />
      <SocialLogin />
    </div>
  );
}