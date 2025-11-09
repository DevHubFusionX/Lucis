import { Mail, Phone, Clock, MapPin, MessageCircle, Send } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "support@lucis.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+234 (0) 123 456 7890",
      description: "Call us during business hours"
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "Mon-Fri: 9AM-6PM",
      description: "Saturday: 10AM-4PM"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Lagos, Nigeria",
      description: "Victoria Island Office"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Contact</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Us</span>
          </h1>
          <p className="text-xl" style={{ color: theme.colors.text.secondary }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Send us a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>First Name</label>
                    <input 
                      type="text" 
                      className="w-full p-4 border-2 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-200" 
                      style={{ borderColor: theme.colors.border }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>Last Name</label>
                    <input 
                      type="text" 
                      className="w-full p-4 border-2 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-200" 
                      style={{ borderColor: theme.colors.border }}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-4 border-2 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-200" 
                    style={{ borderColor: theme.colors.border }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>Subject</label>
                  <input 
                    type="text" 
                    className="w-full p-4 border-2 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-200" 
                    style={{ borderColor: theme.colors.border }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full p-4 border-2 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-200 resize-none" 
                    style={{ borderColor: theme.colors.border }}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-8" style={{ color: theme.colors.text.primary }}>Get in Touch</h2>
              
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                        <IconComponent className="w-6 h-6" style={{ color: theme.colors.copper.DEFAULT }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1" style={{ color: theme.colors.text.primary }}>
                          {contact.title}
                        </h3>
                        <p className="font-semibold mb-1" style={{ color: theme.colors.copper.DEFAULT }}>
                          {contact.info}
                        </p>
                        <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Quick Response */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2" style={{ borderColor: theme.colors.copper.DEFAULT + '20' }}>
                <h3 className="font-bold text-lg mb-2" style={{ color: theme.colors.text.primary }}>Quick Response</h3>
                <p className="text-sm mb-4" style={{ color: theme.colors.text.secondary }}>We typically respond within 2-4 hours during business hours.</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium" style={{ color: theme.colors.text.primary }}>Support team online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}