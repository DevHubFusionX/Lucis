import SignUpLayout from '../../../components/auth/SignUpLayout';
import ClientSignUpForm from '../../../components/auth/ClientSignUpForm';

export default function UserSignUpPage() {
  return (
    <SignUpLayout userType="client">
      <ClientSignUpForm />
    </SignUpLayout>
  );
}