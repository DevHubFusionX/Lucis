'use client';

import { useState } from 'react';
import { Heart, Eye, Star, User } from 'lucide-react';

export default function ImageGrid() {
  const [likedImages, setLikedImages] = useState(new Set());

  const images = [
    // Wedding Photography
    { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop&q=80', photographer: 'Alex Visuals', likes: 324, views: 5240, rating: 4.9, category: 'wedding' },
    { id: 2, src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop&q=80', photographer: 'Grace Events', likes: 289, views: 4890, rating: 4.8, category: 'wedding' },
    { id: 3, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=500&fit=crop&q=80', photographer: 'Lagos Lens', likes: 456, views: 7100, rating: 4.9, category: 'wedding' },
    
    // Portrait Photography
    { id: 4, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=700&fit=crop&q=80', photographer: 'Kemi Portraits', likes: 203, views: 3200, rating: 4.7, category: 'portrait' },
    { id: 5, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80', photographer: 'Focus Point', likes: 178, views: 2890, rating: 4.8, category: 'portrait' },
    { id: 6, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&q=80', photographer: 'Lens Magic', likes: 234, views: 3800, rating: 4.9, category: 'portrait' },
    
    // Event Photography
    { id: 7, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop&q=80', photographer: 'Sarah Films', likes: 167, views: 3450, rating: 4.8, category: 'event' },
    { id: 8, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=700&fit=crop&q=80', photographer: 'Moment Capture', likes: 145, views: 2650, rating: 4.7, category: 'event' },
    { id: 9, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=500&fit=crop&q=80', photographer: 'Event Masters', likes: 198, views: 3200, rating: 4.8, category: 'event' },
    
    // Corporate Photography
    { id: 10, src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=700&fit=crop&q=80', photographer: 'Mike Studios', likes: 134, views: 2700, rating: 4.8, category: 'corporate' },
    { id: 11, src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=600&fit=crop&q=80', photographer: 'Creative Eye', likes: 89, views: 1560, rating: 4.6, category: 'corporate' },
    { id: 12, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&q=80', photographer: 'Studio Elite', likes: 156, views: 2400, rating: 4.7, category: 'corporate' },
    
    // Fashion Photography
    { id: 13, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop&q=80', photographer: 'David Lens', likes: 278, views: 4200, rating: 4.9, category: 'fashion' },
    { id: 14, src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=500&fit=crop&q=80', photographer: 'Style Focus', likes: 345, views: 5600, rating: 4.8, category: 'fashion' },
    { id: 15, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=700&fit=crop&q=80', photographer: 'Fashion Frame', likes: 412, views: 6800, rating: 4.9, category: 'fashion' },
    
    // Food Photography
    { id: 16, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=600&fit=crop&q=80', photographer: 'Frame Perfect', likes: 98, views: 2100, rating: 4.7, category: 'food' },
    { id: 17, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=500&fit=crop&q=80', photographer: 'Taste Visual', likes: 156, views: 2800, rating: 4.6, category: 'food' },
    { id: 18, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80', photographer: 'Culinary Lens', likes: 234, views: 3900, rating: 4.8, category: 'food' },
    
    // Additional Wedding Photos
    { id: 19, src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=600&fit=crop&q=80', photographer: 'Wedding Pro', likes: 389, views: 6200, rating: 4.9, category: 'wedding' },
    { id: 20, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500&h=700&fit=crop&q=80', photographer: 'Love Capture', likes: 445, views: 7800, rating: 4.8, category: 'wedding' },
    
    // Additional Portraits
    { id: 21, src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80', photographer: 'Portrait Plus', likes: 267, views: 4100, rating: 4.7, category: 'portrait' },
    { id: 22, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&q=80', photographer: 'Face Focus', likes: 198, views: 3400, rating: 4.8, category: 'portrait' },
    
    // Additional Events
    { id: 23, src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=500&h=400&fit=crop&q=80', photographer: 'Event Elite', likes: 178, views: 2900, rating: 4.6, category: 'event' },
    { id: 24, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=600&fit=crop&q=80', photographer: 'Celebration Shots', likes: 234, views: 3800, rating: 4.8, category: 'event' }
  ];

  const toggleLike = (imageId) => {
    setLikedImages(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(imageId)) {
        newLiked.delete(imageId);
      } else {
        newLiked.add(imageId);
      }
      return newLiked;
    });
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((image) => (
            <div key={image.id} className="break-inside-avoid group cursor-pointer">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={`Work by ${image.photographer}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span className="text-sm font-medium">{image.photographer}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="text-sm font-medium">{image.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => toggleLike(image.id)}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        likedImages.has(image.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-slate-600 text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{image.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{image.views}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
              image.category === 'wedding' ? 'bg-pink-100 text-pink-700' :
              image.category === 'portrait' ? 'bg-blue-100 text-blue-700' :
              image.category === 'event' ? 'bg-green-100 text-green-700' :
              image.category === 'corporate' ? 'bg-purple-100 text-purple-700' :
              image.category === 'fashion' ? 'bg-indigo-100 text-indigo-700' :
              'bg-orange-100 text-orange-700'
            }`}>
              {image.category}
            </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl transition-colors">
            Load More Work
          </button>
        </div>
      </div>
    </section>
  );
}