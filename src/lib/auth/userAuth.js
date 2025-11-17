const API_BASE_URL = 'https://lucis-api.onrender.com/api/v1';

class UserAuthService {
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
    }

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  }

  async login(email, password) {
    return this.request('/auth/users/login', {
      method: 'POST',
      body: { email, password },
    });
  }

  async register(formData) {
    const url = `${API_BASE_URL}/auth/users/sign-up`;
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

  async getProfile() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('lucis_token') : null;
    return this.request('/auth/users/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  logout() {
    // Clear local storage (no API endpoint available)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('lucis_token');
      localStorage.removeItem('lucis_user');
    }
    return Promise.resolve({ success: true });
  }

  async updateProfile(profileData) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('lucis_token') : null;
    return this.request('/users/profile', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: profileData,
    });
  }

  async forgotPassword(email) {
    return this.request('/auth/users/forgot-password', {
      method: 'POST',
      body: { email },
    });
  }

  async resetPassword(token, password) {
    return this.request('/auth/users/reset-password', {
      method: 'POST',
      body: { token, password },
    });
  }
}

export const userAuthService = new UserAuthService();