interface GameweekNavProps {
  gw?: number
  currentGw?: number
  onChange: (gw: number | undefined) => void
}

const GameweekNav = ({ gw, currentGw, onChange }: GameweekNavProps) => {
  const displayed = gw ?? currentGw
  if (displayed === undefined) return null

  const isCurrent = currentGw !== undefined && displayed === currentGw

  return (
    <div className="flex items-center gap-3 text-sm">
      <button
        type="button"
        onClick={() => onChange(displayed - 1)}
        disabled={displayed <= 1}
        className="cursor-pointer rounded-lg border border-white/10 px-3 py-1 text-white/70 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
      >
        Prev GW
      </button>
      <span className="text-white/80">GW {displayed}</span>
      <button
        type="button"
        onClick={() => onChange(displayed + 1)}
        disabled={currentGw !== undefined && displayed >= currentGw}
        className="cursor-pointer rounded-lg border border-white/10 px-3 py-1 text-white/70 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
      >
        Next GW
      </button>
      {!isCurrent && (
        <button
          type="button"
          onClick={() => onChange(undefined)}
          className="text-primary cursor-pointer text-xs underline"
        >
          Jump to current
        </button>
      )}
    </div>
  )
}

export default GameweekNav
