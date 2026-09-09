import type { CaptainPick, PlayerBrief } from '../api/types'
import { PLACEHOLDER_PLAYER_EXPLANATION } from '../lib/placeholders'
import Player from './Player'

interface FormationProps {
  starters: PlayerBrief[]
  bench: { goalkeeper: PlayerBrief; outfield: PlayerBrief[] }
  seasonCaptain: CaptainPick
}

const badgeFor = (playerId: number, captains: CaptainPick): 'C' | 'V' | undefined => {
  if (playerId === captains.captain.id) return 'C'
  if (playerId === captains.vice_captain.id) return 'V'
  return undefined
}

const Formation = ({ starters, bench, seasonCaptain }: FormationProps) => {
  const rows = [1, 2, 3, 4]
    .map((positionCode) => starters.filter((p) => p.position_code === positionCode))
    .filter((row) => row.length > 0)
  const benchPlayers = [bench.goalkeeper, ...bench.outfield]

  return (
    <div className="pitch rounded-2xl bg-white/3 px-10 pt-8 pb-4">
      <div className="grid grid-cols-1 items-center gap-9">
        {rows.map((row, index) => (
          <div key={index} className="flex items-center justify-center gap-3 md:gap-10">
            {row.map((player) => (
              <Player
                key={player.id}
                player={player}
                badge={badgeFor(player.id, seasonCaptain)}
                explanation={PLACEHOLDER_PLAYER_EXPLANATION}
              />
            ))}
          </div>
        ))}

        <div className="mt-16 flex items-center justify-center gap-3 rounded-3xl border border-white/10 pt-1 pb-3.5 md:gap-9.5">
          {benchPlayers.map((player) => (
            <Player key={player.id} player={player} explanation={PLACEHOLDER_PLAYER_EXPLANATION} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Formation
