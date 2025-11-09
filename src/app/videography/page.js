import { Video, Play, Film, Mic } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function VideographyPage() {
  const services = [
    {
      icon: Video,
      title: "Event Videography",
      description: "Capture the energy and emotion of your events with cinematic quality that preserves every moment.",
      features: ["4K recording", "Multi-camera setup", "Professional audio", "Same-day highlights"]
    },
    {
      icon: Play,
      title: "Corporate Videos",
      description: "Professional corporate videos, testimonials, and promotional content that elevates your brand.",
      features: ["Brand alignment", "Professional editing", "Motion graphics", "Quick turnaround"]
    },
    {
      icon: Film,
      title: "Music Videos",
      description: "Creative music video production with artistic vision and technical expertise that brings songs to life.",
      features: ["Creative concepts", "Professional lighting", "Color grading", "Artistic direction"]
    },
    {
      icon: Mic,
      title: "Documentary",
      description: "Tell your story through compelling documentary-style videography with authentic storytelling.",
      features: ["Story development", "Interview setup", "B-roll footage", "Professional editing"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Videography</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: theme.colors.text.secondary }}>
            Professional videography services to bring your stories to life. Our skilled videographers 
            create compelling visual narratives for every occasion.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>1K+</div>
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>Videographers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>4K</div>
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>48h</div>
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>Delivery</div>
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
              Ready to Create Your Video?
            </h2>
            <p className="text-lg mb-8" style={{ color: theme.colors.text.secondary }}>
              Browse our skilled videographers and bring your vision to life.
            </p>
            <button 
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
            >
              Find Videographers
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}