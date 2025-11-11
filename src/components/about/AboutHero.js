'use client';

import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function AboutHero() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-6 block">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Connecting Creative Talent with Vision
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-600 mb-8 leading-relaxed">
              We're revolutionizing how people discover and book exceptional photographers and videographers, 
              making professional creative services accessible to everyone.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-2">
                  Our Vision
                </h3>
                <p className="font-light text-gray-600">
                  To become the world's leading platform for creative professionals, empowering artists 
                  and making quality visual storytelling accessible to all.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-2">
                  Founded 2023
                </h3>
                <p className="font-light text-gray-600">
                  Started with a mission to bridge the gap between creative talent and those who need their services.
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop" 
                alt="About LUCIS" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
