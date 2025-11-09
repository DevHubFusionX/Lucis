import { Heart, Users, Star, Shield, MessageCircle, Award } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function CommunityPage() {
  const values = [
    {
      icon: Heart,
      title: "Respect & Professionalism",
      description: "We treat every member with respect and maintain the highest standards of professionalism in all interactions."
    },
    {
      icon: Star,
      title: "Quality & Creativity",
      description: "We celebrate exceptional work and encourage creative expression while maintaining quality standards."
    },
    {
      icon: MessageCircle,
      title: "Honest Communication",
      description: "We value transparent, honest communication that builds trust and fosters meaningful connections."
    },
    {
      icon: Users,
      title: "Support & Collaboration",
      description: "We support each other's growth and success through collaboration, mentorship, and shared knowledge."
    }
  ];

  const standards = [
    "No harassment, discrimination, or inappropriate behavior",
    "Authentic portfolios and honest representation of work",
    "Respectful reviews and constructive feedback",
    "Compliance with local laws and platform policies",
    "Professional conduct in all business interactions",
    "Respect for intellectual property and creative rights"
  ];

  const stats = [
    { number: "50K+", label: "Community Members" },
    { number: "5K+", label: "Active Professionals" },
    { number: "4.9★", label: "Community Rating" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
          <h1 className="text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Our</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Community</span>
          </h1>
          <p className="text-xl mb-12" style={{ color: theme.colors.text.secondary }}>
            Join a thriving community of photographers, videographers, and clients who share a passion for visual storytelling.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>{stat.number}</div>
                <div className="text-sm" style={{ color: theme.colors.text.muted }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.text.primary }}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300" style={{ borderColor: theme.colors.border }}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                      <IconComponent className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                        {value.title}
                      </h3>
                      <p style={{ color: theme.colors.text.secondary }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Standards */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
              <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Community Standards</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                  <span style={{ color: theme.colors.text.secondary }}>{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <Award className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Ready to Join Our Community?
            </h2>
            <p className="text-lg mb-8" style={{ color: theme.colors.text.secondary }}>
              Connect with fellow photographers, videographers, and clients. Share experiences, 
              learn from each other, and grow together in a supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
              >
                Join Community
              </button>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: theme.colors.copper.DEFAULT, color: theme.colors.copper.DEFAULT }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}