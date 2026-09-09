import { useEffect, useState } from 'react'
import { ApiError, buildUrl } from './client'
import type { PlayerScoresResponse, ShortlistResponse, SquadsResponse } from './types'

export type FetchState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'unavailable'; message: string; data: T }
  | { status: 'success'; data: T }

function useApiResource<TResponse extends { available: boolean; message?: string }>(
  url: string,
): FetchState<TResponse> {
  const [state, setState] = useState<FetchState<TResponse>>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading' })

    fetch(url, { credentials: 'include' })
      .then(async (response) => {
        if (!response.ok) {
          throw new ApiError(`Request failed with status ${response.status}`, response.status)
        }
        return (await response.json()) as TResponse
      })
      .then((data) => {
        if (cancelled) return
        if (!data.available) {
          setState({ status: 'unavailable', message: data.message ?? 'Not available yet.', data })
        } else {
          setState({ status: 'success', data })
        }
      })
      .catch((err: unknown) => {
        if (cancelled) return
        const message = err instanceof ApiError ? err.message : 'Could not reach the API.'
        setState({ status: 'error', error: message })
      })

    return () => {
      cancelled = true
    }
  }, [url])

  return state
}

export function usePlayerScores(strategy: string) {
  return useApiResource<PlayerScoresResponse>(buildUrl('/players/scores/', { strategy }))
}

export function useShortlist(strategy: string, topN = 15) {
  return useApiResource<ShortlistResponse>(buildUrl('/players/shortlist/', { strategy, top_n: topN }))
}

export function useSuggestedSquads(gw?: number, strategy?: string) {
  return useApiResource<SquadsResponse>(buildUrl('/squads/', { gw, strategy }))
}
