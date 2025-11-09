'use client';

import { Linkedin, Twitter, Mail } from 'lucide-react';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function AboutTeam() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const team = [
    {
      name: 'Adebayo Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Former photographer turned entrepreneur, passionate about empowering Nigeria\'s creative community.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'adebayo@lucis.ng'
      }
    },
    {
      name: 'Kemi Okafor',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Operations expert with 8+ years experience in marketplace platforms and customer success.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'kemi@lucis.ng'
      }
    },
    {
      name: 'Chidi Nwankwo',
      role: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer and tech lead, building scalable solutions for the creative industry.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'chidi@lucis.ng'
      }
    },
    {
      name: 'Fatima Abdullahi',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&crop=face',
      bio: 'Marketing strategist focused on connecting brands with Nigeria\'s vibrant creative ecosystem.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'fatima@lucis.ng'
      }
    }
  ];

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
            Meet Our <span style={{ color: theme.colors.copper.DEFAULT }}>Team</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            The passionate individuals behind LUCIS, working to revolutionize Nigeria's creative industry
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className="rounded-3xl overflow-hidden p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ 
                  backgroundColor: theme.colors.bg.primary,
                  border: `1px solid ${theme.colors.border}`
                }}
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-2xl mx-auto object-cover"
                  />
                </div>
                
                {/* Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: theme.colors.copper.DEFAULT }}>
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    {member.bio}
                  </p>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a 
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: theme.colors.seaMist[100] }}
                  >
                    <Linkedin className="w-5 h-5" style={{ color: theme.colors.text.primary }} />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: theme.colors.seaMist[100] }}
                  >
                    <Twitter className="w-5 h-5" style={{ color: theme.colors.text.primary }} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: theme.colors.copper[100] }}
                  >
                    <Mail className="w-5 h-5" style={{ color: theme.colors.copper.DEFAULT }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className={`text-center mt-16 transition-all duration-700 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div 
            className="max-w-2xl mx-auto p-8 rounded-3xl"
            style={{ backgroundColor: theme.colors.copper[50], border: `1px solid ${theme.colors.copper[200]}` }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Join Our Team
            </h3>
            <p className="mb-6" style={{ color: theme.colors.text.secondary }}>
              We're always looking for passionate individuals to join our mission of empowering 
              Nigeria's creative community.
            </p>
            <button 
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: theme.colors.copper.DEFAULT }}
            >
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}