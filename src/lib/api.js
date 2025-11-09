const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

class ApiService {
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
      // Keep empty string body as is for endpoints that require it
      config.body = '';
    }

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  }

  // Auth endpoints
  async login(email, password, userType = 'user') {
    const endpoint = userType === 'professional' ? '/auth/professionals/login' : '/auth/users/login';
    return this.request(endpoint, {
      method: 'POST',
      body: { email, password },
    });
  }

  // User endpoints
  async getProfile() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('lucis_token') : null;
    return this.request('/users/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  // Professional endpoints
  async getProfessionalProfile() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('lucis_token') : null;
    return this.request('/professionals/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: '',
    });
  }

  async register(formData, userType = 'user') {
    const endpoint = userType === 'professional' ? '/auth/professionals/sign-up' : '/auth/users/sign-up';
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      body: formData, // FormData for file upload
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }
    
    return data;
  }
}

export const apiService = new ApiService();