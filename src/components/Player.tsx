import { useState } from 'react'
import type { PlayerBrief } from '../api/types'

interface PlayerProps {
  player: PlayerBrief
  badge?: 'C' | 'V'
  explanation?: string
}

const Player = ({ player, badge, explanation }: PlayerProps) => {
  const [expanded, setExpanded] = useState(false)
  const canExpand = Boolean(explanation)

  return (
    <div className="flex max-w-[94px] flex-col items-center">
      <div className="relative">
        {badge && (
          <span className="bg-primary absolute -top-1 -right-1 z-20 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold">
            {badge}
          </span>
        )}
        <img
          className="z-10 -mb-3.5 aspect-square max-w-16"
          src={player.shirt_url}
          alt={player.web_name}
        />
      </div>
      <button
        type="button"
        onClick={() => canExpand && setExpanded((v) => !v)}
        className={`grid h-[51px] w-full overflow-hidden rounded-md bg-white/10 text-center xl:w-[94px] ${
          canExpand ? 'cursor-pointer' : 'cursor-default'
        }`}
      >
        <div className="flex items-end justify-center">
          <h2 className="text-[9px] leading-[11.6px]">{player.web_name}</h2>
        </div>
        <div className="flex items-center justify-center bg-[#5F6F7E]">
          <p className="text-base leading-0 font-semibold">
            £{(player.price_tenths / 10).toFixed(1)}m
          </p>
        </div>
      </button>
      {canExpand && expanded && (
        <div className="mt-1 w-[94px] rounded-md bg-white/10 p-2 text-left text-[9px] leading-tight text-white/70">
          {explanation}
        </div>
      )}
    </div>
  )
}

export default Player
