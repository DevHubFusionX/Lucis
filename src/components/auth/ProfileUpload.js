'use client';

import { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function ProfileUpload({ onFileChange }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      onFileChange(file);
    }
  };

  const removeFile = () => {
    setPreview(null);
    onFileChange(null);
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>
        Profile Photo (Optional)
      </label>
      
      {!preview ? (
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
          style={{ borderColor: theme.colors.border }}>
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-2" style={{ color: theme.colors.text.muted }} />
            <p className="text-sm" style={{ color: theme.colors.text.muted }}>
              Click to upload photo
            </p>
          </div>
          <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
        </label>
      ) : (
        <div className="relative">
          <img src={preview} alt="Preview" className="w-full h-32 object-cover rounded-xl" />
          <button
            type="button"
            onClick={removeFile}
            className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}