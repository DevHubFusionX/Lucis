'use client';

import { useState } from 'react';
import { Star, MessageCircle, Send, Filter, TrendingUp } from 'lucide-react';

export default function StudioReviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      client: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'Very professional and patient. Alex took amazing photos for our wedding and was so accommodating with all our requests.',
      date: '2 days ago',
      bookingType: 'Wedding',
      reply: null,
      showReplyForm: false
    },
    {
      id: 2,
      client: 'Mike Chen',
      avatar: '/api/placeholder/40/40',
      rating: 4,
      comment: 'Arrived late but great shots. The final photos were absolutely stunning and worth the wait.',
      date: '1 week ago',
      bookingType: 'Portrait',
      reply: null,
      showReplyForm: false
    },
    {
      id: 3,
      client: 'Emma Wilson',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'Exceeded expectations! The event photography was flawless and captured every important moment.',
      date: '2 weeks ago',
      bookingType: 'Event',
      reply: 'Thank you so much Emma! It was a pleasure working with you and your team.',
      showReplyForm: false
    },
    {
      id: 4,
      client: 'David Brown',
      avatar: '/api/placeholder/40/40',
      rating: 3,
      comment: 'Good quality photos but communication could be better. Would recommend for the photo quality.',
      date: '3 weeks ago',
      bookingType: 'Corporate',
      reply: null,
      showReplyForm: false
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [replyText, setReplyText] = useState('');

  const toggleReplyForm = (reviewId) => {
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { ...review, showReplyForm: !review.showReplyForm }
        : { ...review, showReplyForm: false }
    ));
    setReplyText('');
  };

  const submitReply = (reviewId) => {
    if (!replyText.trim()) return;
    
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { ...review, reply: replyText, showReplyForm: false }
        : review
    ));
    setReplyText('');
  };

  const filteredReviews = reviews.filter(review => {
    if (filter === 'all') return true;
    if (filter === 'replied') return review.reply;
    if (filter === 'unreplied') return !review.reply;
    return review.rating === parseInt(filter);
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  const repliedCount = reviews.filter(r => r.reply).length;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reviews & Ratings</h1>
          <p className="text-gray-600 mt-2">Manage client feedback and build your reputation</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-600" />
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="all">All Reviews</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
            <option value="replied">Replied</option>
            <option value="unreplied">Unreplied</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-xl">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-xl">
              <MessageCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{totalReviews}</p>
              <p className="text-sm text-gray-600">Total Reviews</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-xl">
              <Send className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{repliedCount}</p>
              <p className="text-sm text-gray-600">Replied</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-xl">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{Math.round((repliedCount / totalReviews) * 100)}%</p>
              <p className="text-sm text-gray-600">Response Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.client}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.client}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{review.rating}.0</span>
                    <span className="text-sm text-gray-500">• {review.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                  {review.bookingType}
                </span>
                {!review.reply && (
                  <button
                    onClick={() => toggleReplyForm(review.id)}
                    className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-yellow-600 hover:text-yellow-700 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Reply
                  </button>
                )}
              </div>
            </div>

            {/* Review Comment */}
            <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

            {/* Studio Reply */}
            {review.reply && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 ml-16">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">Alex Visuals (You)</span>
                </div>
                <p className="text-gray-700">{review.reply}</p>
              </div>
            )}

            {/* Reply Form */}
            {review.showReplyForm && (
              <div className="ml-16 mt-4">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write a public reply to this review..."
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  rows="3"
                />
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => submitReply(review.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Post Reply
                  </button>
                  <button
                    onClick={() => toggleReplyForm(review.id)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No reviews found</h3>
          <p className="text-gray-600">
            {filter === 'all' ? 'You have no reviews yet.' : `No ${filter} reviews found.`}
          </p>
        </div>
      )}
    </div>
  );
}