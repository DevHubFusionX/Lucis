import { HelpCircle, BookOpen, CreditCard, Users, MessageCircle, Search } from 'lucide-react';
import { theme } from '../../lib/theme';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function HelpPage() {
  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of using LUCIS",
      articles: [
        "How to create an account",
        "Setting up your profile",
        "Finding the right photographer",
        "Understanding our verification process"
      ]
    },
    {
      icon: CreditCard,
      title: "Booking & Payments",
      description: "Everything about bookings and payments",
      articles: [
        "How to book a photographer",
        "Payment methods and security",
        "Cancellation and refund policy",
        "Understanding booking fees"
      ]
    },
    {
      icon: Users,
      title: "For Professionals",
      description: "Guide for photographers and videographers",
      articles: [
        "Joining as a photographer",
        "Portfolio guidelines",
        "Managing bookings",
        "Setting your rates"
      ]
    },
    {
      icon: HelpCircle,
      title: "Account & Settings",
      description: "Manage your account and preferences",
      articles: [
        "Updating your profile",
        "Privacy settings",
        "Notification preferences",
        "Deleting your account"
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Help</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Center</span>
          </h1>
          <p className="text-xl mb-8" style={{ color: theme.colors.text.secondary }}>
            Find answers to your questions and get the help you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: theme.colors.text.muted }} />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 text-lg focus:outline-none focus:border-opacity-100 transition-all duration-200"
                style={{ borderColor: theme.colors.border }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300" style={{ borderColor: theme.colors.border }}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                      <IconComponent className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                        {category.title}
                      </h3>
                      <p className="text-lg mb-6" style={{ color: theme.colors.text.secondary }}>
                        {category.description}
                      </p>
                      <div className="space-y-3">
                        {category.articles.map((article, articleIndex) => (
                          <div key={articleIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                            <span className="text-sm" style={{ color: theme.colors.text.secondary }}>{article}</span>
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

      {/* Contact Support */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <MessageCircle className="w-16 h-16 mx-auto mb-6" style={{ color: theme.colors.copper.DEFAULT }} />
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Still Need Help?
            </h2>
            <p className="text-lg mb-8" style={{ color: theme.colors.text.secondary }}>
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
              >
                Contact Support
              </button>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: theme.colors.copper.DEFAULT, color: theme.colors.copper.DEFAULT }}
              >
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}