import { Cookie, Shield, Settings, Info } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for the website to function properly. These cannot be disabled.",
      examples: ["Authentication", "Security", "Form submissions"]
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Help us provide enhanced functionality and personalization.",
      examples: ["Language preferences", "Theme settings", "User preferences"]
    },
    {
      icon: Info,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      examples: ["Page views", "User behavior", "Performance metrics"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Cookie className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
          <h1 className="text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Cookie</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Policy</span>
          </h1>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Learn how LUCIS uses cookies to improve your experience on our platform.
          </p>
          <p className="text-sm mt-4" style={{ color: theme.colors.text.muted }}>
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>
            Types of Cookies We Use
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cookieTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                    <IconComponent className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                    {type.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: theme.colors.text.secondary }}>
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center gap-2 justify-center">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                        <span className="text-xs" style={{ color: theme.colors.text.muted }}>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>What Are Cookies?</h2>
              <p style={{ color: theme.colors.text.secondary }}>
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>How We Use Cookies</h2>
              <div className="space-y-3">
                <p style={{ color: theme.colors.text.secondary }}>• To keep you signed in to your account</p>
                <p style={{ color: theme.colors.text.secondary }}>• To remember your preferences and settings</p>
                <p style={{ color: theme.colors.text.secondary }}>• To analyze website traffic and usage patterns</p>
                <p style={{ color: theme.colors.text.secondary }}>• To improve our services and user experience</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Managing Cookies</h2>
              <p className="mb-4" style={{ color: theme.colors.text.secondary }}>
                You can control and manage cookies through your browser settings. However, please note that 
                disabling certain cookies may affect the functionality of our website.
              </p>
              <button 
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}