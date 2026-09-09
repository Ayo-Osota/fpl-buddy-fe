const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export function buildUrl(path: string, params: Record<string, string | number | undefined> = {}) {
  const url = new URL(path, API_BASE_URL)
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) url.searchParams.set(key, String(value))
  }
  return url.toString()
}
