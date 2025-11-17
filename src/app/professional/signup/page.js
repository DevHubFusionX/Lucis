import SignUpLayout from '../../../components/auth/SignUpLayout';
import ProfessionalSignUpForm from '../../../components/auth/ProfessionalSignUpForm';

export default function ProfessionalSignUpPage() {
  return (
    <SignUpLayout userType="professional">
      <ProfessionalSignUpForm />
    </SignUpLayout>
  );
}