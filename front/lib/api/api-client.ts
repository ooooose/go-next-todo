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

  private async request<T>(url: string, options: RequestInit): Promise<T> {
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

  async get<T>(url: string): Promise<T> {
    return this.request<T>(url, { method: 'GET' })
  }

  async post<T>(url: string, body = {}): Promise<T> {
    return this.request<T>(url, { method: 'POST', body: JSON.stringify(body) })
  }

  async put<T>(url: string, body = {}): Promise<T> {
    return this.request<T>(url, { method: 'PUT', body: JSON.stringify(body) })
  }

  async delete<T>(url: string): Promise<T> {
    return this.request<T>(url, { method: 'DELETE' })
  }
}

export const api = new Api()
