export interface PlayerBrief {
  id: number
  web_name: string
  team: string
  position: string
  position_code: number
  price_tenths: number
  shirt_url: string
}

export interface PlayerScoreEntry extends PlayerBrief {
  total_score: number
  next_gw_score: number
  expected_component: number
  realized_component: number
  regression_signal: number
  fixture_component: number
  setpiece_component: number
  ownership_component: number
  rotation_component: number
  has_history: boolean
}

export interface PlayerScoresResponse {
  available: boolean
  strategy?: string
  run_id?: number
  generated_at?: string
  players?: PlayerScoreEntry[]
  message?: string
}

export interface ShortlistEntry extends PlayerBrief {
  total_score: number
}

export interface ShortlistResponse {
  available: boolean
  strategy?: string
  run_id?: number
  shortlist?: Record<string, ShortlistEntry[]>
  message?: string
}

export interface CaptainPick {
  captain: PlayerBrief
  vice_captain: PlayerBrief
}

export interface SuggestedSquad {
  id: number
  strategy: string
  for_event: number
  projected_points: number
  generated_at: string
  formation: string
  total_price_tenths: number
  starters: PlayerBrief[]
  bench: {
    goalkeeper: PlayerBrief
    outfield: PlayerBrief[]
  }
  captains: {
    season: CaptainPick
    next_gw: CaptainPick
    differential: CaptainPick | null
  }
}

export interface SquadsResponse {
  available: boolean
  gw?: number
  squads?: SuggestedSquad[]
  message?: string
}
