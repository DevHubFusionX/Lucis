'use client';

import { useState } from 'react';
import { Upload, X, Image, Video } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function MediaUpload({ onMediaChange }) {
  const [mediaFiles, setMediaFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.slice(0, 6 - mediaFiles.length); // Max 6 files
    
    const updatedFiles = [...mediaFiles, ...newFiles];
    setMediaFiles(updatedFiles);
    onMediaChange(updatedFiles);
  };

  const removeFile = (index) => {
    const updatedFiles = mediaFiles.filter((_, i) => i !== index);
    setMediaFiles(updatedFiles);
    onMediaChange(updatedFiles);
  };

  const getFileIcon = (file) => {
    if (file.type.startsWith('image/')) return <Image className="w-4 h-4" />;
    if (file.type.startsWith('video/')) return <Video className="w-4 h-4" />;
    return <Upload className="w-4 h-4" />;
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>
        Portfolio Media (Optional)
      </label>
      <p className="text-xs mb-3" style={{ color: theme.colors.text.muted }}>
        Upload up to 6 images or videos to showcase your work
      </p>
      
      {/* File Upload Area */}
      {mediaFiles.length < 6 && (
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-50 transition-colors mb-4"
          style={{ borderColor: theme.colors.border }}>
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-2" style={{ color: theme.colors.text.muted }} />
            <p className="text-sm" style={{ color: theme.colors.text.muted }}>
              Click to upload media ({mediaFiles.length}/6)
            </p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*,video/*" 
            multiple 
            onChange={handleFileChange} 
          />
        </label>
      )}

      {/* Selected Files */}
      {mediaFiles.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {mediaFiles.map((file, index) => (
            <div
              key={index}
              className="relative p-3 border rounded-xl"
              style={{ borderColor: theme.colors.border }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: theme.colors.copper[50], color: theme.colors.copper.DEFAULT }}
                >
                  {getFileIcon(file)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: theme.colors.text.primary }}>
                    {file.name}
                  </p>
                  <p className="text-xs" style={{ color: theme.colors.text.muted }}>
                    {(file.size / 1024 / 1024).toFixed(1)} MB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}