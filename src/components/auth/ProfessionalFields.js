'use client';

import { useState } from 'react';
import { MapPin, Plus, X } from 'lucide-react';
import { theme } from '../../lib/theme';

const SKILL_OPTIONS = ['Events', 'Weddings', 'Portrait', 'Corporate', 'Fashion', 'Commercial', 'Product', 'Real Estate'];

export default function ProfessionalFields({ formData, errors, touched, onChange, onBlur, getFieldStyles, onSkillsChange }) {
  const [skillInput, setSkillInput] = useState('');

  const addSkill = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      onSkillsChange([...formData.skills, skill]);
    }
    setSkillInput('');
  };

  const removeSkill = (skillToRemove) => {
    onSkillsChange(formData.skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <>
      {/* Bio */}
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>
          Bio
        </label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={onChange}
          onBlur={onBlur}
          rows={3}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 resize-none"
          style={{
            ...getFieldStyles('bio'),
            focusRingColor: theme.colors.copper.DEFAULT + '40'
          }}
          placeholder="Tell clients about your experience and style..."
        />
      </div>

      {/* Base City */}
      <div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: theme.colors.text.muted }} />
          <input
            name="baseCity"
            type="text"
            required
            value={formData.baseCity}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
            style={{
              ...getFieldStyles('baseCity'),
              focusRingColor: theme.colors.copper.DEFAULT + '40'
            }}
            placeholder="Base city (e.g., Lagos, Abuja)"
          />
        </div>
        {errors.baseCity && touched.baseCity && (
          <p className="mt-2 text-sm" style={{ color: theme.colors.error[500] }}>{errors.baseCity}</p>
        )}
      </div>

      {/* Skills */}
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>
          Skills & Specialties
        </label>
        
        {/* Selected Skills */}
        {formData.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: theme.colors.copper[50], color: theme.colors.copper[700] }}
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="hover:opacity-70"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Skill Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(skillInput))}
            className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
            style={{
              borderColor: theme.colors.border,
              focusRingColor: theme.colors.copper.DEFAULT + '40'
            }}
            placeholder="Add a skill..."
          />
          <button
            type="button"
            onClick={() => addSkill(skillInput)}
            className="px-4 py-2 rounded-xl font-medium transition-colors"
            style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Add Skills */}
        <div className="mt-3">
          <p className="text-xs mb-2" style={{ color: theme.colors.text.muted }}>Quick add:</p>
          <div className="flex flex-wrap gap-2">
            {SKILL_OPTIONS.filter(skill => !formData.skills.includes(skill)).map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => addSkill(skill)}
                className="px-3 py-1 text-sm border rounded-full hover:border-opacity-80 transition-colors"
                style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}