'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfessionalSignInPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/professional/signin');
  }, [router]);
  
  return null;
}