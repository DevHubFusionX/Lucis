import { FileText, Users, CreditCard, Shield, AlertTriangle, Scale } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: Users,
      title: "User Accounts",
      description: "Requirements and responsibilities for creating and maintaining your LUCIS account."
    },
    {
      icon: CreditCard,
      title: "Payments & Bookings",
      description: "Terms governing payments, bookings, cancellations, and refunds on our platform."
    },
    {
      icon: Shield,
      title: "User Conduct",
      description: "Expected behavior and prohibited activities for all users of the platform."
    },
    {
      icon: Scale,
      title: "Liability & Disputes",
      description: "Limitation of liability, dispute resolution, and legal responsibilities."
    }
  ];

  const keyTerms = [
    "You must be 18 years or older to use LUCIS",
    "Provide accurate and complete information",
    "Maintain the security of your account",
    "Respect intellectual property rights",
    "Follow community guidelines and standards",
    "Report any violations or safety concerns"
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
          <h1 className="text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Terms of</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Service</span>
          </h1>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Please read these terms carefully before using LUCIS. By using our platform, you agree to these terms.
          </p>
          <p className="text-sm mt-4" style={{ color: theme.colors.text.muted }}>
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>
            Key Sections
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                      <IconComponent className="w-6 h-6" style={{ color: theme.colors.copper.DEFAULT }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                        {section.title}
                      </h3>
                      <p style={{ color: theme.colors.text.secondary }}>
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Acceptance of Terms</h2>
              <p style={{ color: theme.colors.text.secondary }}>
                By accessing and using LUCIS, you accept and agree to be bound by the terms and provision 
                of this agreement. These terms apply to all users of the platform, including clients, 
                photographers, and videographers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Key Requirements</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {keyTerms.map((term, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                    <span style={{ color: theme.colors.text.secondary }}>{term}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Platform Usage</h2>
              <p className="mb-4" style={{ color: theme.colors.text.secondary }}>
                LUCIS provides a platform for connecting clients with photographers and videographers. 
                We facilitate bookings and payments but are not directly involved in the provision of 
                photography or videography services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Modifications</h2>
              <p style={{ color: theme.colors.text.secondary }}>
                We reserve the right to modify these terms at any time. Users will be notified of 
                significant changes, and continued use of the platform constitutes acceptance of the 
                modified terms.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Important Notice</h3>
                  <p className="text-yellow-700 text-sm">
                    These terms constitute a legally binding agreement. If you do not agree to these terms, 
                    please do not use our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}