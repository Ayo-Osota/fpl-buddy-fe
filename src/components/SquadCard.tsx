import type { SuggestedSquad } from '../api/types'
import { PLACEHOLDER_SQUAD_EXPLANATION } from '../lib/placeholders'
import Formation from './Formation'

const strategyLabel = (name: string) =>
  name
    .split('_')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ')

const SquadCard = ({ squad }: { squad: SuggestedSquad }) => {
  return (
    <div className="rounded-3xl bg-white/5 p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-medium text-white/90">{strategyLabel(squad.strategy)} strategy</h3>
        <span className="text-sm font-light text-white/60">{squad.formation}</span>
      </div>

      <p className="mt-1 text-sm font-light text-white/60">
        Projected score for the starting XI next gameweek, captain's score doubled:{' '}
        <span className="font-medium text-white/80">{squad.projected_points.toFixed(1)} pts</span>. A
        model estimate from current scoring inputs, not a guaranteed outcome.
      </p>

      <div className="mt-6">
        <Formation starters={squad.starters} bench={squad.bench} seasonCaptain={squad.captains.season} />
      </div>

      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-white/50">Season captain</dt>
          <dd className="text-white/90">
            {squad.captains.season.captain.web_name} (V: {squad.captains.season.vice_captain.web_name})
          </dd>
        </div>
        <div>
          <dt className="text-white/50">Next GW captain</dt>
          <dd className="text-white/90">
            {squad.captains.next_gw.captain.web_name} (V: {squad.captains.next_gw.vice_captain.web_name})
          </dd>
        </div>
        {squad.captains.differential && (
          <div>
            <dt className="text-white/50">Differential captain</dt>
            <dd className="text-white/90">
              {squad.captains.differential.captain.web_name} (V:{' '}
              {squad.captains.differential.vice_captain.web_name})
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-6 rounded-xl bg-white/5 p-4 text-sm font-light text-white/70">
        <h4 className="mb-1 text-xs font-semibold tracking-wide text-white/50 uppercase">
          Overall rationale
        </h4>
        <p>{PLACEHOLDER_SQUAD_EXPLANATION}</p>
      </div>

      <p className="mt-4 text-xs text-white/40">
        Total squad price: £{(squad.total_price_tenths / 10).toFixed(1)}m
      </p>
    </div>
  )
}

export default SquadCard
