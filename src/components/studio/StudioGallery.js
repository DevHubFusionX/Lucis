'use client';

import { useState } from 'react';
import { Upload, Folder, Star, X, Plus, Image as ImageIcon } from 'lucide-react';

export default function StudioGallery() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [photos, setPhotos] = useState({
    Event: [
      { id: 1, url: '/api/placeholder/300/200', name: 'event1.jpg', featured: true },
      { id: 2, url: '/api/placeholder/300/200', name: 'event2.jpg', featured: false },
      { id: 3, url: '/api/placeholder/300/200', name: 'event3.jpg', featured: true }
    ],
    Wedding: [
      { id: 4, url: '/api/placeholder/300/200', name: 'wedding1.jpg', featured: true },
      { id: 5, url: '/api/placeholder/300/200', name: 'wedding2.jpg', featured: false },
      { id: 6, url: '/api/placeholder/300/200', name: 'wedding3.jpg', featured: true }
    ],
    Portrait: [
      { id: 7, url: '/api/placeholder/300/200', name: 'portrait1.jpg', featured: true },
      { id: 8, url: '/api/placeholder/300/200', name: 'portrait2.jpg', featured: false }
    ]
  });

  const folders = Object.keys(photos);
  const featuredCount = Object.values(photos).flat().filter(photo => photo.featured).length;

  const toggleFeatured = (folderId, photoId) => {
    setPhotos(prev => ({
      ...prev,
      [folderId]: prev[folderId].map(photo => {
        if (photo.id === photoId) {
          const newFeatured = !photo.featured;
          if (newFeatured && featuredCount >= 5) {
            alert('Maximum 5 featured photos allowed');
            return photo;
          }
          return { ...photo, featured: newFeatured };
        }
        return photo;
      })
    }));
  };

  const handleUpload = (folder) => {
    setSelectedFolder(folder);
    setShowUploadModal(true);
  };

  const UploadModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Upload to {selectedFolder}</h3>
          <button onClick={() => setShowUploadModal(false)}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">Drag & drop photos or click to browse</p>
          <input type="file" multiple accept="image/*" className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="px-4 py-2 bg-yellow-500 text-white rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors">
            Choose Files
          </label>
        </div>
        
        <div className="flex gap-3 mt-6">
          <button 
            onClick={() => setShowUploadModal(false)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            Upload
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery & Portfolio</h1>
          <p className="text-gray-600 mt-2">Manage your photo collections and featured work</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
            {featuredCount}/5 Featured
          </div>
        </div>
      </div>

      {/* Folder View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {folders.map((folder) => (
          <div key={folder} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-100 rounded-xl">
                  <Folder className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">/Portfolio/{folder}/</h3>
                  <p className="text-sm text-gray-600">{photos[folder].length} photos</p>
                </div>
              </div>
              
              <button
                onClick={() => handleUpload(folder)}
                className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {photos[folder].slice(0, 6).map((photo) => (
                <div key={photo.id} className="relative group">
                  <img
                    src={photo.url}
                    alt={photo.name}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => toggleFeatured(folder, photo.id)}
                    className={`absolute top-1 right-1 p-1 rounded-full transition-colors ${
                      photo.featured 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-white/80 text-gray-600 hover:bg-yellow-500 hover:text-white'
                    }`}
                  >
                    <Star className="w-3 h-3" />
                  </button>
                </div>
              ))}
              
              {photos[folder].length > 6 && (
                <div className="flex items-center justify-center bg-gray-100 rounded-lg h-20">
                  <span className="text-sm text-gray-600">+{photos[folder].length - 6}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => handleUpload(folder)}
              className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-yellow-500 hover:text-yellow-600 transition-colors"
            >
              <Upload className="w-4 h-4" />
              <span>Upload new photo</span>
            </button>
          </div>
        ))}

        {/* Add New Folder */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-dashed border-gray-300 hover:border-yellow-500 transition-colors">
          <div className="text-center">
            <div className="p-3 bg-gray-100 rounded-xl w-fit mx-auto mb-4">
              <Plus className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Create New Folder</h3>
            <p className="text-sm text-gray-600 mb-4">Organize your photos by category</p>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
              Add Folder
            </button>
          </div>
        </div>
      </div>

      {/* Featured Photos Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Featured Photos</h2>
          <span className="text-sm text-gray-600">{featuredCount}/5 photos</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.values(photos).flat().filter(photo => photo.featured).map((photo) => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.url}
                alt={photo.name}
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute top-2 right-2 p-1 bg-yellow-500 text-white rounded-full">
                <Star className="w-4 h-4" />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <p className="text-white text-sm font-medium">{photo.name}</p>
              </div>
            </div>
          ))}
          
          {featuredCount < 5 && (
            <div className="h-32 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Add Featured</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {showUploadModal && <UploadModal />}
    </div>
  );
}