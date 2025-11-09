import { Heart, Camera, Video, Gift } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function WeddingPage() {
  const packages = [
    {
      name: "Essential",
      price: "₦150,000",
      duration: "4 hours",
      features: ["200+ edited photos", "Online gallery", "Professional photographer", "Basic retouching"]
    },
    {
      name: "Premium",
      price: "₦300,000",
      duration: "8 hours",
      features: ["500+ edited photos", "Video highlights (3-5 min)", "Two photographers", "Advanced retouching", "USB drive"]
    },
    {
      name: "Luxury",
      price: "₦500,000",
      duration: "Full day",
      features: ["Unlimited photos", "Cinematic wedding film", "Drone footage", "Same-day highlights", "Premium album"]
    }
  ];

  const services = [
    {
      icon: Camera,
      title: "Wedding Photography",
      description: "Capture every precious moment of your special day with artistic excellence."
    },
    {
      icon: Video,
      title: "Wedding Videography",
      description: "Cinematic wedding films that tell your unique love story."
    },
    {
      icon: Heart,
      title: "Engagement Shoots",
      description: "Beautiful pre-wedding photography to celebrate your engagement."
    },
    {
      icon: Gift,
      title: "Bridal Portraits",
      description: "Stunning bridal portraits to commemorate your wedding day."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Wedding</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Memories</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: theme.colors.text.secondary }}>
            Your wedding day deserves to be captured perfectly. Our experienced wedding photographers 
            and videographers specialize in documenting your love story with elegance and artistry.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>
            Wedding Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                    <IconComponent className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                    {service.title}
                  </h3>
                  <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>
            Wedding Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                index === 1 ? 'scale-105' : ''
              }`} style={{ borderColor: index === 1 ? theme.colors.copper.DEFAULT : theme.colors.border }}>
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full text-white" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.copper.DEFAULT }}>
                    {pkg.price}
                  </div>
                  <div className="text-sm" style={{ color: theme.colors.text.muted }}>
                    {pkg.duration} coverage
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                      <span className="text-sm" style={{ color: theme.colors.text.secondary }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: index === 1 ? theme.colors.copper.DEFAULT : theme.colors.copper.DEFAULT + '10',
                    color: index === 1 ? 'white' : theme.colors.copper.DEFAULT
                  }}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Ready to Book Your Wedding Photography?
            </h2>
            <p className="text-lg mb-8" style={{ color: theme.colors.text.secondary }}>
              Connect with our experienced wedding photographers and videographers.
            </p>
            <button 
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
            >
              Find Wedding Photographers
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}