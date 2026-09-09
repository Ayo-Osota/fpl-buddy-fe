import { createColumnHelper, useTable } from '@tanstack/react-table'
import { Fragment, useMemo, useState } from 'react'
import type { ShortlistEntry } from '../api/types'
import { PLACEHOLDER_PLAYER_EXPLANATION } from '../lib/placeholders'
import { PAGE_SIZE, playerTableFeatures } from '../lib/tableFeatures'

const POSITIONS = [
  { code: 0, label: 'All positions' },
  { code: 1, label: 'Goalkeeper' },
  { code: 2, label: 'Defender' },
  { code: 3, label: 'Midfielder' },
  { code: 4, label: 'Forward' },
]

const helper = createColumnHelper<typeof playerTableFeatures, ShortlistEntry>()

const columns = helper.columns([
  helper.accessor('web_name', {
    header: 'Player',
    sortFn: 'alphanumeric',
    cell: (info) => (
      <span className="flex items-center gap-2">
        <img src={info.row.original.shirt_url} alt="" className="h-6 w-6" />
        {info.getValue()}
      </span>
    ),
  }),
  helper.accessor('team', { header: 'Team', sortFn: 'alphanumeric' }),
  helper.accessor('position', { header: 'Pos', sortFn: 'alphanumeric' }),
  helper.accessor('price_tenths', {
    header: 'Price',
    sortFn: 'basic',
    cell: (info) => `£${(info.getValue() / 10).toFixed(1)}m`,
  }),
  helper.accessor('total_score', {
    header: 'Score',
    sortFn: 'basic',
    cell: (info) => info.getValue().toFixed(1),
  }),
])

const EMPTY_DATA: ShortlistEntry[] = []

const ShortlistTable = ({ players }: { players: ShortlistEntry[] }) => {
  const [search, setSearch] = useState('')
  const [positionCode, setPositionCode] = useState(0)
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  const data = useMemo(() => {
    const term = search.trim().toLowerCase()
    return players.filter((player) => {
      const matchesPosition = positionCode === 0 || player.position_code === positionCode
      const matchesSearch =
        term.length === 0 ||
        player.web_name.toLowerCase().includes(term) ||
        player.team.toLowerCase().includes(term)
      return matchesPosition && matchesSearch
    })
  }, [players, search, positionCode])

  const table = useTable({
    features: playerTableFeatures,
    columns,
    data: data.length > 0 ? data : EMPTY_DATA,
    initialState: { pagination: { pageIndex: 0, pageSize: PAGE_SIZE } },
  })

  const toggleExpanded = (playerId: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(playerId)) next.delete(playerId)
      else next.add(playerId)
      return next
    })
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)
            table.setPageIndex(0)
          }}
          placeholder="Search player or team…"
          className="rounded-lg border-[0.5px] border-white/70 bg-transparent p-2 text-sm text-white placeholder:text-white/40"
        />
        <select
          value={positionCode}
          onChange={(event) => {
            setPositionCode(Number(event.target.value))
            table.setPageIndex(0)
          }}
          className="rounded-lg border-[0.5px] border-white/70 bg-transparent p-2 text-sm text-white"
        >
          {POSITIONS.map((position) => (
            <option key={position.code} value={position.code} className="bg-black">
              {position.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            {table.getHeaderGroups().map((group) => (
              <tr key={group.id} className="border-b border-white/10 text-white/50">
                {group.headers.map((header) => (
                  <th key={header.id} className="px-3 py-2 font-medium">
                    {header.isPlaceholder ? null : (
                      <button
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                        disabled={!header.column.getCanSort()}
                        className="flex cursor-pointer items-center gap-1"
                      >
                        <table.FlexRender header={header} />
                        {header.column.getIsSorted() === 'asc' && '▲'}
                        {header.column.getIsSorted() === 'desc' && '▼'}
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              const isExpanded = expandedIds.has(row.original.id)
              return (
                <Fragment key={row.id}>
                  <tr
                    onClick={() => toggleExpanded(row.original.id)}
                    className="cursor-pointer border-b border-white/5 text-white/80 hover:bg-white/5"
                  >
                    {row.getAllCells().map((cell) => (
                      <td key={cell.id} className="px-3 py-2">
                        <table.FlexRender cell={cell} />
                      </td>
                    ))}
                  </tr>
                  {isExpanded && (
                    <tr className="border-b border-white/5 bg-white/5">
                      <td colSpan={columns.length} className="px-3 py-3 text-xs text-white/70">
                        {PLACEHOLDER_PLAYER_EXPLANATION}
                      </td>
                    </tr>
                  )}
                </Fragment>
              )
            })}
            {table.getRowModel().rows.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-3 py-6 text-center text-white/50">
                  No players match this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-white/60">
        <span>
          Page {table.state.pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)} ·{' '}
          {data.length} players
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="cursor-pointer rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="cursor-pointer rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShortlistTable
