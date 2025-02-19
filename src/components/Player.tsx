import { PlayerProps, teams } from '../data'

const Player = ({
  playerName,
  playerScore,
  // isCaptain = false,
  // isVice = false,
  playerTeam,
  playerPosition
  // featured = true
}: PlayerProps) => {
  const team = teams.find((t) => t.teamId === playerTeam)
  const playerImg = team ? (playerPosition !== 1 ? team.img : team.gkpImg) : ''

  return (
    <div className="flex max-w-[94px] flex-col items-center">
      <img className="z-10 -mb-3.5 aspect-square max-w-16" src={playerImg} alt={playerName} />
      <article className="grid h-[51px] w-full overflow-hidden rounded-md bg-white/10 text-center xl:w-[94px]">
        <div className="flex items-end justify-center">
          <h2 className="text-[9px] leading-[11.6px]">{playerName}</h2>
        </div>
        <div className="flex items-center justify-center bg-[#5F6F7E]">
          <p className="text-base leading-0 font-semibold">{playerScore}</p>
        </div>
      </article>
    </div>
  )
}

export default Player
