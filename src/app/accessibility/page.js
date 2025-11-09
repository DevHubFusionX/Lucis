import { Eye, Keyboard, Volume2, Type, Contrast, MessageCircle } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function AccessibilityPage() {
  const features = [
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full keyboard navigation support for users who cannot use a mouse or touch screen."
    },
    {
      icon: Volume2,
      title: "Screen Reader Support",
      description: "Compatible with popular screen readers including JAWS, NVDA, and VoiceOver."
    },
    {
      icon: Contrast,
      title: "High Contrast Mode",
      description: "Enhanced color contrast options for users with visual impairments."
    },
    {
      icon: Type,
      title: "Scalable Text",
      description: "Text and interface elements that scale properly with browser zoom settings."
    },
    {
      icon: Eye,
      title: "Alternative Text",
      description: "Descriptive alt text for all images and visual content throughout the platform."
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Simple, clear language and consistent navigation patterns across all pages."
    }
  ];

  const standards = [
    "WCAG 2.1 AA compliance",
    "Section 508 standards",
    "ADA compliance guidelines",
    "Regular accessibility audits"
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Eye className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
          <h1 className="text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Accessibility</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Statement</span>
          </h1>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            LUCIS is committed to ensuring digital accessibility for people with disabilities. 
            We strive to provide an inclusive experience for all users.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>Our Commitment</h2>
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              We are continually improving the user experience for everyone and applying relevant accessibility standards. 
              Our goal is to ensure that LUCIS is accessible to users with diverse abilities and provides equal access 
              to information and functionality.
            </p>
          </div>
          
          {/* Standards */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>Accessibility Standards</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                  <span style={{ color: theme.colors.text.secondary }}>{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>
            Accessibility Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                    <IconComponent className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <MessageCircle className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              We Value Your Feedback
            </h2>
            <p className="text-lg mb-8" style={{ color: theme.colors.text.secondary }}>
              We welcome your feedback on the accessibility of LUCIS. Please let us know if you encounter 
              accessibility barriers or have suggestions for improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
              >
                Contact Accessibility Team
              </button>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: theme.colors.copper.DEFAULT, color: theme.colors.copper.DEFAULT }}
              >
                Report Issue
              </button>
            </div>
            
            <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: theme.colors.seaMist[50] }}>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                <strong>Email:</strong> accessibility@lucis.com | <strong>Phone:</strong> +234 (0) 123 456 7890
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}