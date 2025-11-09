import { Camera, Users, Award, Star } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function PhotographyPage() {
  const services = [
    {
      icon: Camera,
      title: "Portrait Photography",
      description: "Professional headshots, family portraits, and personal branding photography that captures your unique personality.",
      features: ["Professional lighting", "Multiple outfit changes", "Retouched images", "Same-day delivery"]
    },
    {
      icon: Users,
      title: "Event Photography",
      description: "Capture your special events, parties, and celebrations with stunning imagery that tells your story.",
      features: ["Full event coverage", "Candid moments", "Group photos", "Online gallery"]
    },
    {
      icon: Award,
      title: "Product Photography",
      description: "High-quality product shots for e-commerce, marketing, and advertising that drive sales.",
      features: ["Studio lighting", "Multiple angles", "Background removal", "Fast turnaround"]
    },
    {
      icon: Star,
      title: "Fashion Photography",
      description: "Creative fashion shoots, lookbooks, and editorial photography with artistic vision.",
      features: ["Creative concepts", "Professional styling", "Location shoots", "Editorial quality"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Photography</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: theme.colors.text.secondary }}>
            Discover professional photography services for every occasion. Our verified photographers 
            specialize in capturing your most important moments with exceptional quality and creativity.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>2K+</div>
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>Photographers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>4.9★</div>
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>24h</div>
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
              Ready to Book a Photographer?
            </h2>
            <p className="text-lg mb-8" style={{ color: theme.colors.text.secondary }}>
              Browse our verified photographers and find the perfect match for your project.
            </p>
            <button 
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
            >
              Find Photographers
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}