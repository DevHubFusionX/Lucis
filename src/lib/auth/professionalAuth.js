const API_BASE_URL = 'https://lucis-api.onrender.com/api/v1';

class ProfessionalAuthService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    } else if (config.body === '') {
      config.body = '';
    }

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  }

  async login(email, password) {
    return this.request('/auth/professionals/login', {
      method: 'POST',
      body: { email, password },
    });
  }

  async register(formData) {
    const url = `${API_BASE_URL}/auth/professionals/sign-up`;
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }
    
    return data;
  }

  logout() {
    // Clear local storage (no API endpoint available)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('lucis_token');
      localStorage.removeItem('lucis_user');
    }
    return Promise.resolve({ success: true });
  }

  async getProfile() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('lucis_token') : null;
    return this.request('/auth/professionals/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  async updateProfile(profileData) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('lucis_token') : null;
    return this.request('/professionals/me', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: profileData,
    });
  }

  async updatePortfolio(mediaFiles) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('lucis_token') : null;
    const formData = new FormData();
    mediaFiles.forEach(file => formData.append('media', file));
    
    const url = `${API_BASE_URL}/professionals/portfolio`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Portfolio update failed');
    }
    
    return data;
  }

  async getBookings() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('lucis_token') : null;
    return this.request('/professionals/bookings', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  async updateAvailability(availability) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('lucis_token') : null;
    return this.request('/professionals/availability', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: availability,
    });
  }

  async forgotPassword(email) {
    return this.request('/auth/professionals/forgot-password', {
      method: 'POST',
      body: { email },
    });
  }

  async resetPassword(token, password) {
    return this.request('/auth/professionals/reset-password', {
      method: 'POST',
      body: { token, password },
    });
  }
}

export const professionalAuthService = new ProfessionalAuthService();