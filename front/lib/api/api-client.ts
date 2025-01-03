

class Api {
  baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL ?? ''
  }

  private async getHeaders(): Promise<HeadersInit> {
    return {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }

  private async request(url: string, options: RequestInit): Promise<Response> {
    try {
      const headers = await this.getHeaders()
      const response = await fetch(`${this.baseUrl}${url}`, { ...options, headers })
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Something went wrong')
      }
      return response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  async get(url: string, ) {
    return this.request(url, { method: 'GET' })
  }

  async post(url: string, body = {}) {
    return this.request(url, { method: 'POST', body: JSON.stringify(body) })
  }

  async put(url: string, body = {}) {
    return this.request(url, { method: 'PUT', body: JSON.stringify(body) })
  }

  async delete(url: string) {
    return this.request(url, { method: 'DELETE' })
  }
}

export const api = new Api()