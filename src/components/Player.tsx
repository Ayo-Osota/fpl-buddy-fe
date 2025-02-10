import { PlayerProps } from '../data'

const Player = ({
  playerName,
  playerScore
  // isCaptain = false,
  // isVice = false,
  // playerTeam,
  // featured = true
}: PlayerProps) => {
  return (
    <div className="flex max-w-[94px] flex-col items-center">
      <img
        className="z-10 -mb-3.5 aspect-square max-w-16"
        src="https://fantasy.premierleague.com/dist/img/shirts/standard/shirt_43-66.webp"
        alt={playerName}
      />
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
