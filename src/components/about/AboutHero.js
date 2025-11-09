'use client';

import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function AboutHero() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="pt-32 pb-20" style={{ backgroundColor: theme.colors.bg.primary }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h1 className="text-5xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              About <span style={{ color: theme.colors.copper.DEFAULT }}>LUCIS</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              We're revolutionizing Nigeria's creative industry by connecting talented photographers and videographers 
              with clients who value exceptional quality and professionalism.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
                  Our Vision
                </h3>
                <p style={{ color: theme.colors.text.secondary }}>
                  To become Africa's leading platform for creative professionals, empowering artists and 
                  making quality photography and videography accessible to everyone.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
                  Founded in 2023
                </h3>
                <p style={{ color: theme.colors.text.secondary }}>
                  Started in Lagos, Nigeria, with a mission to bridge the gap between creative talent 
                  and those who need their services.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative">
              <img 
                src="/About.svg" 
                alt="About LUCIS" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}