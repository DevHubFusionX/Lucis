import { Users, Building, Briefcase, Video } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function CorporatePage() {
  const services = [
    {
      icon: Users,
      title: "Corporate Headshots",
      description: "Professional headshots for executives, teams, and LinkedIn profiles that enhance your professional image.",
      features: ["Studio lighting", "Multiple looks", "Professional retouching", "LinkedIn optimization"]
    },
    {
      icon: Building,
      title: "Event Documentation",
      description: "Comprehensive coverage of corporate events, conferences, and meetings with professional quality.",
      features: ["Full event coverage", "Key moment capture", "Group photography", "Same-day delivery"]
    },
    {
      icon: Briefcase,
      title: "Brand Photography",
      description: "Visual content that aligns with your brand identity and marketing goals to strengthen your presence.",
      features: ["Brand alignment", "Marketing materials", "Website imagery", "Social media content"]
    },
    {
      icon: Video,
      title: "Training Videos",
      description: "Educational and training content for internal and external use that engages and informs your audience.",
      features: ["Script development", "Professional production", "Multi-camera setup", "Post-production"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Corporate</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Solutions</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: theme.colors.text.secondary }}>
            Professional corporate visual content to elevate your business. From headshots to event coverage, 
            we help you maintain a professional image that reflects your brand values.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>500+</div>
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>24h</div>
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>100%</div>
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>Professional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300" style={{ borderColor: theme.colors.border }}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                      <IconComponent className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                        {service.title}
                      </h3>
                      <p className="text-lg mb-6" style={{ color: theme.colors.text.secondary }}>
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                            <span className="text-sm" style={{ color: theme.colors.text.secondary }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Elevate Your Corporate Image
            </h2>
            <p className="text-lg mb-8" style={{ color: theme.colors.text.secondary }}>
              Connect with professional corporate photographers and videographers.
            </p>
            <button 
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
            >
              Get Corporate Quote
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}