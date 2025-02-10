import { players } from '../data'
import Player from './Player'

const Formation = () => {
  return (
    <div className="pitch rounded-2xl bg-white/3 px-10 pt-8 pb-4">
      <div className="grid grid-cols-1 items-center gap-9">
        {[1, 2, 3, 4].map((position) => {
          return (
            <div key={position} className="flex items-center justify-center gap-3 md:gap-10">
              {players.map((player) => {
                const { playerId, playerName, playerPosition, playerScore, playerTeam, bench } =
                  player
                return (
                  playerPosition === position &&
                  !bench && (
                    <Player
                      key={playerId}
                      playerName={playerName}
                      playerPosition={playerPosition}
                      playerScore={playerScore}
                      playerTeam={playerTeam}
                    />
                  )
                )
              })}
            </div>
          )
        })}

        <div className="mt-16 flex items-center justify-center gap-3 rounded-3xl border border-white/10 pt-1 pb-3.5 md:gap-9.5">
          {players.map((player) => {
            const {
              playerId,
              playerName,
              playerPosition,
              playerScore,
              playerTeam,
              bench = 0
            } = player
            return (
              bench > 0 && (
                <Player
                  key={playerId}
                  playerName={playerName}
                  playerPosition={playerPosition}
                  playerScore={playerScore}
                  playerTeam={playerTeam}
                />
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Formation
