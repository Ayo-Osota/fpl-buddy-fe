import { STRATEGY_NAMES } from '../lib/strategies'

const label = (name: string) =>
  name
    .split('_')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ')

interface StrategySelectProps {
  value: string
  onChange: (strategy: string) => void
  includeAll?: boolean
}

const StrategySelect = ({ value, onChange, includeAll = false }: StrategySelectProps) => (
  <select
    value={value}
    onChange={(event) => onChange(event.target.value)}
    className="rounded-lg border-[0.5px] border-white/70 bg-transparent p-2 text-sm text-white"
  >
    {includeAll && (
      <option value="" className="bg-black">
        All strategies
      </option>
    )}
    {STRATEGY_NAMES.map((name) => (
      <option key={name} value={name} className="bg-black">
        {label(name)} strategy
      </option>
    ))}
  </select>
)

export default StrategySelect
