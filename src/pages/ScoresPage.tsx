import { useState } from 'react'
import { usePlayerScores } from '../api/hooks'
import ScoresTable from '../components/ScoresTable'
import StrategySelect from '../components/StrategySelect'

const ScoresPage = () => {
  const [strategy, setStrategy] = useState('balanced')
  const state = usePlayerScores(strategy)

  return (
    <main className="pg-container mt-8 h-full p-4 text-white">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[2rem] leading-10 font-medium text-white/90">Player scores</h1>
          <p className="mt-2 max-w-[56ch] text-sm font-light text-white/60">
            Every player's score for the selected strategy. Sort, search, and filter by position.
          </p>
        </div>
        <StrategySelect value={strategy} onChange={setStrategy} />
      </div>

      <div className="mt-8">
        {state.status === 'loading' && (
          <p className="text-sm font-light text-white/60">Loading player scores…</p>
        )}
        {state.status === 'error' && <p className="text-sm font-light text-red-400">{state.error}</p>}
        {state.status === 'unavailable' && (
          <p className="text-sm font-light text-white/60">{state.message}</p>
        )}
        {state.status === 'success' && <ScoresTable players={state.data.players ?? []} />}
      </div>
    </main>
  )
}

export default ScoresPage
