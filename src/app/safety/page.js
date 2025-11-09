import { Shield, Users, Camera, AlertTriangle, Phone, CheckCircle, ShieldCheck, Lock, Eye } from 'lucide-react';
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
      
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${theme.colors.copper[100]} 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, ${theme.colors.seaMist[200]} 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 animate-pulse" 
          style={{ backgroundColor: theme.colors.copper[300] }} />
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full opacity-10 animate-pulse" 
          style={{ backgroundColor: theme.colors.copper[200], animationDelay: '1s' }} />
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: theme.colors.copper[200]
            }}>
            <ShieldCheck className="w-4 h-4" style={{ color: theme.colors.copper.DEFAULT }} />
            <span className="text-sm font-semibold" style={{ color: theme.colors.copper.DEFAULT }}>
              TRUSTED BY 5,000+ PROFESSIONALS
            </span>
          </div>

          {/* Hero Icon */}
          <div className="relative inline-block mb-8 animate-in zoom-in duration-700" style={{ animationDelay: '200ms' }}>
            <div 
              className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center shadow-2xl relative"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.copper.DEFAULT} 0%, ${theme.colors.copper[600]} 100%)`
              }}
            >
              <Shield className="w-12 h-12 text-white" strokeWidth={2.5} />
              <div className="absolute inset-0 rounded-3xl bg-white opacity-20 animate-pulse" />
            </div>
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 rounded-3xl blur-2xl opacity-30 -z-10"
              style={{ backgroundColor: theme.colors.copper.DEFAULT }}
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700" 
            style={{ animationDelay: '400ms' }}>
            <span style={{ color: theme.colors.text.primary }}>Your Safety,</span>
            <br />
            <span className="bg-gradient-to-r from-copper-500 to-copper-600 bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${theme.colors.copper.DEFAULT} 0%, ${theme.colors.copper[700]} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
              Our Priority
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700" 
            style={{ 
              color: theme.colors.text.secondary,
              animationDelay: '600ms'
            }}>
            Experience peace of mind with our comprehensive safety guidelines and 24/7 support system designed to protect every interaction.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12 animate-in fade-in duration-700" 
            style={{ animationDelay: '800ms' }}>
            {[
              { icon: ShieldCheck, label: 'Verified Profiles', color: theme.colors.copper.DEFAULT },
              { icon: Lock, label: 'Secure Platform', color: theme.colors.copper.DEFAULT },
              { icon: Eye, label: '24/7 Monitoring', color: theme.colors.copper.DEFAULT }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-3 rounded-2xl backdrop-blur-sm border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderColor: theme.colors.seaMist[200]
                }}>
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
                <span className="font-semibold text-sm" style={{ color: theme.colors.text.primary }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-in fade-in zoom-in duration-700" style={{ animationDelay: '1000ms' }}>
            <button
              className="group relative px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.copper.DEFAULT} 0%, ${theme.colors.copper[600]} 100%)`,
                color: 'white'
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Safety Guidelines
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>
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