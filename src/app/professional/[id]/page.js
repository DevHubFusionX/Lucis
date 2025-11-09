import { Star, MapPin, Camera, Video, Calendar, MessageCircle, CheckCircle, Award } from 'lucide-react';
import { theme } from '../../../lib/theme';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function ProfessionalProfilePage({ params }) {
  // Mock data - in real app, fetch based on params.id
  const professional = {
    id: params.id,
    name: "Alex Visuals",
    title: "Wedding & Portrait Photographer",
    location: "Lagos, Nigeria",
    rating: 4.9,
    reviews: 127,
    verified: true,
    responseTime: "< 1 hour",
    completedJobs: 200,
    memberSince: "2022",
    profileImage: "/api/placeholder/150/150",
    coverImage: "/api/placeholder/800/300",
    about: "Passionate photographer with 5+ years of experience capturing life's most precious moments. Specializing in weddings, portraits, and events with a focus on natural, candid photography that tells your unique story.",
    services: [
      { name: "Wedding Photography", price: "₦150,000", duration: "8 hours" },
      { name: "Portrait Session", price: "₦45,000", duration: "2 hours" },
      { name: "Event Coverage", price: "₦75,000", duration: "4 hours" }
    ],
    skills: ["Wedding", "Portrait", "Event", "Fashion"],
    equipment: ["Canon EOS R5", "Sony A7 IV", "Professional Lighting", "Drone"],
    portfolio: [
      "/api/placeholder/300/300",
      "/api/placeholder/300/300",
      "/api/placeholder/300/300",
      "/api/placeholder/300/300",
      "/api/placeholder/300/300",
      "/api/placeholder/300/300"
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "2 weeks ago",
        comment: "Alex captured our wedding beautifully! Professional, creative, and delivered amazing photos."
      },
      {
        name: "Michael Chen",
        rating: 5,
        date: "1 month ago", 
        comment: "Excellent portrait session. Very comfortable to work with and great results."
      }
    ]
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <Navbar />
      
      {/* Cover & Profile Section */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto">
          {/* Cover Image */}
          <div className="h-64 bg-gradient-to-r from-gray-300 to-gray-400 rounded-t-2xl mx-4"></div>
          
          {/* Profile Info */}
          <div className="bg-white rounded-b-2xl mx-4 p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-300 -mt-16 border-4 border-white shadow-lg"></div>
                {professional.verified && (
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              
              {/* Profile Details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                      {professional.name}
                    </h1>
                    <p className="text-lg mb-2" style={{ color: theme.colors.copper.DEFAULT }}>
                      {professional.title}
                    </p>
                    <div className="flex items-center gap-4 text-sm" style={{ color: theme.colors.text.secondary }}>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {professional.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {professional.rating} ({professional.reviews} reviews)
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
                    >
                      Book Now
                    </button>
                    <button 
                      className="px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105"
                      style={{ borderColor: theme.colors.copper.DEFAULT, color: theme.colors.copper.DEFAULT }}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* About */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>About</h2>
                <p style={{ color: theme.colors.text.secondary }}>{professional.about}</p>
              </div>

              {/* Portfolio */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>Portfolio</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {professional.portfolio.map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-300 rounded-xl hover:scale-105 transition-transform cursor-pointer"></div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>Reviews</h2>
                <div className="space-y-6">
                  {professional.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                        <div>
                          <h4 className="font-semibold" style={{ color: theme.colors.text.primary }}>{review.name}</h4>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm" style={{ color: theme.colors.text.muted }}>{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p style={{ color: theme.colors.text.secondary }}>{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold mb-4" style={{ color: theme.colors.text.primary }}>Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span style={{ color: theme.colors.text.secondary }}>Response time</span>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>{professional.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: theme.colors.text.secondary }}>Completed jobs</span>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>{professional.completedJobs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: theme.colors.text.secondary }}>Member since</span>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>{professional.memberSince}</span>
                  </div>
                </div>
              </div>

              {/* Services & Pricing */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold mb-4" style={{ color: theme.colors.text.primary }}>Services & Pricing</h3>
                <div className="space-y-4">
                  {professional.services.map((service, index) => (
                    <div key={index} className="border rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold" style={{ color: theme.colors.text.primary }}>{service.name}</h4>
                        <span className="font-bold" style={{ color: theme.colors.copper.DEFAULT }}>{service.price}</span>
                      </div>
                      <p className="text-sm" style={{ color: theme.colors.text.muted }}>{service.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold mb-4" style={{ color: theme.colors.text.primary }}>Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {professional.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10', color: theme.colors.copper.DEFAULT }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold mb-4" style={{ color: theme.colors.text.primary }}>Equipment</h3>
                <div className="space-y-2">
                  {professional.equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                      <span className="text-sm" style={{ color: theme.colors.text.secondary }}>{item}</span>
                    </div>
                  ))}
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