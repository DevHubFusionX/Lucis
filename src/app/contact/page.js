'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    info: "support@lucis.com"
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+234 (0) 123 456 7890"
  },
  {
    icon: MapPin,
    title: "Location",
    info: "Lagos, Nigeria"
  }
];

export default function ContactPage() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <section ref={sectionRef} className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                <h2 className="text-2xl font-light text-gray-900 mb-8">Send a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-light text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows="5" 
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gray-900 text-white font-medium rounded-full flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className={`space-y-6 transition-all duration-700 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h2 className="text-2xl font-light text-gray-900 mb-8">Contact Information</h2>
              
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-light text-lg text-gray-900 mb-1">
                          {contact.title}
                        </h3>
                        <p className="font-light text-gray-600">
                          {contact.info}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
