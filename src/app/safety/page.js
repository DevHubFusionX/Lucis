import { Shield, Users, Camera, AlertTriangle, Phone, CheckCircle } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function SafetyPage() {
  const safetyTips = [
    {
      icon: Users,
      title: "For Clients",
      color: "#3B82F6",
      tips: [
        "Always meet photographers in public places initially",
        "Verify photographer credentials and portfolio",
        "Share shoot details with trusted friends or family",
        "Trust your instincts and report any concerns",
        "Check reviews and ratings before booking",
        "Communicate boundaries clearly before the shoot"
      ]
    },
    {
      icon: Camera,
      title: "For Professionals",
      color: "#10B981",
      tips: [
        "Maintain professional boundaries at all times",
        "Clearly communicate shoot expectations",
        "Respect client privacy and confidentiality",
        "Follow platform guidelines and policies",
        "Provide clear contracts and terms",
        "Keep all interactions professional and documented"
      ]
    }
  ];

  const emergencyContacts = [
    { title: "Emergency Services", number: "199", description: "Police emergency line" },
    { title: "LUCIS Safety Team", number: "+234 (0) 123 456 7890", description: "24/7 safety support" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
          <h1 className="text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Safety</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>First</span>
          </h1>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Your safety is our top priority. Follow these guidelines to ensure a safe and professional experience for everyone.
          </p>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {safetyTips.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300" style={{ borderColor: theme.colors.border }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: section.color + '10' }}>
                      <IconComponent className="w-8 h-8" style={{ color: section.color }} />
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: section.color }} />
                        <span style={{ color: theme.colors.text.secondary }}>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-bold text-red-800">Emergency Contacts</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-6 h-6" style={{ color: theme.colors.copper.DEFAULT }} />
                    <h3 className="font-bold text-lg" style={{ color: theme.colors.text.primary }}>
                      {contact.title}
                    </h3>
                  </div>
                  <p className="text-2xl font-bold mb-1" style={{ color: theme.colors.copper.DEFAULT }}>
                    {contact.number}
                  </p>
                  <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                    {contact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report Issue */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Report Safety Concerns
            </h2>
            <p className="text-lg mb-8" style={{ color: theme.colors.text.secondary }}>
              If you experience any safety concerns or inappropriate behavior, please report it immediately. 
              We take all reports seriously and will investigate promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
              >
                Report Issue
              </button>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: theme.colors.copper.DEFAULT, color: theme.colors.copper.DEFAULT }}
              >
                Safety Resources
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}