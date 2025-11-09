import { Shield, Eye, Lock, Database, UserCheck, Mail } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function PrivacyPolicyPage() {
  const dataTypes = [
    {
      icon: UserCheck,
      title: "Personal Information",
      description: "Name, email, phone number, and profile details you provide when creating an account."
    },
    {
      icon: Eye,
      title: "Usage Data",
      description: "How you interact with our platform, pages visited, and features used."
    },
    {
      icon: Database,
      title: "Technical Data",
      description: "IP address, browser type, device information, and cookies."
    }
  ];

  const rights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Delete your account and data",
    "Restrict data processing",
    "Data portability",
    "Object to processing"
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
          <h1 className="text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Privacy</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Policy</span>
          </h1>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm mt-4" style={{ color: theme.colors.text.muted }}>
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>
            Information We Collect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {dataTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                    <IconComponent className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                    {type.title}
                  </h3>
                  <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>How We Use Your Information</h2>
              <div className="space-y-3">
                <p style={{ color: theme.colors.text.secondary }}>• To provide and maintain our services</p>
                <p style={{ color: theme.colors.text.secondary }}>• To process bookings and payments</p>
                <p style={{ color: theme.colors.text.secondary }}>• To communicate with you about your account</p>
                <p style={{ color: theme.colors.text.secondary }}>• To improve our platform and user experience</p>
                <p style={{ color: theme.colors.text.secondary }}>• To comply with legal obligations</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Data Security</h2>
              <p style={{ color: theme.colors.text.secondary }}>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
                secure servers, and regular security assessments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                    <span style={{ color: theme.colors.text.secondary }}>{right}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Contact Us</h2>
              <p className="mb-4" style={{ color: theme.colors.text.secondary }}>
                If you have questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4" style={{ color: theme.colors.copper.DEFAULT }} />
                <span style={{ color: theme.colors.text.secondary }}>privacy@lucis.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}