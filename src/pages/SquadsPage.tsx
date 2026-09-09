import { useEffect, useState } from 'react'
import { useSuggestedSquads } from '../api/hooks'
import GameweekNav from '../components/GameweekNav'
import Newsletter from '../components/Newsletter'
import SquadCard from '../components/SquadCard'
import StrategySelect from '../components/StrategySelect'

const SquadsPage = () => {
  const [viewedGw, setViewedGw] = useState<number | undefined>(undefined)
  const [currentGw, setCurrentGw] = useState<number | undefined>(undefined)
  const [strategy, setStrategy] = useState('')
  const state = useSuggestedSquads(viewedGw, strategy || undefined)

  useEffect(() => {
    if (viewedGw === undefined && (state.status === 'success' || state.status === 'unavailable')) {
      setCurrentGw(state.data.gw)
    }
  }, [state, viewedGw])

  return (
    <main className="pg-container mt-8 h-full p-4 text-white">
      <section className="max-w-[70ch]">
        <h1 className="text-[2rem] leading-10 font-medium text-white/90">Your FPL Buddy</h1>
        <p className="mt-2 text-sm font-light text-white/60">
          Tired of last-minute FPL regrets? Our Fantasy Premier League Data Analysis Tool helps you
          make smarter picks, maximize points, and climb the ranks with confidence. We crunch the
          numbers so you don’t have to—analyzing xG, xA, fixture difficulty, player availability,
          set-piece duties, and even the sneaky impact of international breaks.
        </p>
        <p className="mt-2 text-sm font-light text-white/60">
          But wait, it gets even better! We’re currently training an AI-powered FPL expert that will
          chat with you in real-time using LLM and voice recognition—so soon, you can debate
          captaincy choices, wildcard strategies, and differential picks just like you would with
          your football-obsessed mate.
        </p>
        <p className="mt-2 text-sm font-light text-white/60">
          Get ready to outthink, outplay, and outscore your mini-league rivals. The future of FPL is
          here!
        </p>
        <p className="mt-10 max-w-[47ch] text-base text-white/90">
          For more analysis or if you want to know how this team was gotten, or if wish to edit this
          page.{' '}
          <a href="https://github.com/Ayo-Osota/fpl-buddy" className="text-primary font-semibold">
            Click here
          </a>
        </p>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-light text-white/90">Suggested squads</h2>
          <div className="flex flex-wrap items-center gap-4">
            <StrategySelect value={strategy} onChange={setStrategy} includeAll />
            <GameweekNav gw={viewedGw} currentGw={currentGw} onChange={setViewedGw} />
          </div>
        </div>

        {state.status === 'loading' && (
          <p className="mt-6 text-sm font-light text-white/60">Loading squads…</p>
        )}
        {state.status === 'error' && (
          <p className="mt-6 text-sm font-light text-red-400">{state.error}</p>
        )}
        {state.status === 'unavailable' && (
          <p className="mt-6 text-sm font-light text-white/60">{state.message}</p>
        )}
        {state.status === 'success' && (
          <div className="mt-6 flex flex-col gap-10">
            {state.data.squads?.map((squad) => <SquadCard key={squad.id} squad={squad} />)}
          </div>
        )}
      </section>

      <div className="mt-16 max-w-[36rem]">
        <Newsletter />
      </div>
    </main>
  )
}

export default SquadsPage
