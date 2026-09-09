import { useMemo, useState } from 'react'
import { useShortlist } from '../api/hooks'
import ShortlistTable from '../components/ShortlistTable'
import StrategySelect from '../components/StrategySelect'

const ShortlistPage = () => {
  const [strategy, setStrategy] = useState('balanced')
  const state = useShortlist(strategy)

  const players = useMemo(() => {
    if (state.status !== 'success') return []
    return Object.values(state.data.shortlist ?? {}).flat()
  }, [state])

  return (
    <main className="pg-container mt-8 h-full p-4 text-white">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[2rem] leading-10 font-medium text-white/90">Shortlist</h1>
          <p className="mt-2 max-w-[56ch] text-sm font-light text-white/60">
            Top-ranked players per position for the selected strategy. Click a row for the
            reasoning behind the pick.
          </p>
        </div>
        <StrategySelect value={strategy} onChange={setStrategy} />
      </div>

      <div className="mt-8">
        {state.status === 'loading' && (
          <p className="text-sm font-light text-white/60">Loading shortlist…</p>
        )}
        {state.status === 'error' && <p className="text-sm font-light text-red-400">{state.error}</p>}
        {state.status === 'unavailable' && (
          <p className="text-sm font-light text-white/60">{state.message}</p>
        )}
        {state.status === 'success' && <ShortlistTable players={players} />}
      </div>
    </main>
  )
}

export default ShortlistPage
