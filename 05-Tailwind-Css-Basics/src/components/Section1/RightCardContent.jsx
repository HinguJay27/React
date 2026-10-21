
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const statusStyles = {
  Satisfied: 'bg-emerald-300 text-emerald-950',
  Unsatisfied: 'bg-rose-300 text-rose-950',
  Pending: 'bg-amber-200 text-amber-950',
  'Under Review': 'bg-sky-200 text-sky-950',
}

const RightCardContent = ({
  id,
  status = 'Pending',
  intro = '',
}) => {
  const badgeStyle =
    statusStyles[status] ?? 'bg-white text-cyan-950'

  return (
    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
      <div className="flex items-start justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-cyan-950">
          {Number(id) + 1}
        </span>

        <span className="rounded-full border border-white/40 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          Profile
        </span>
      </div>

      <div>
        <p className="mb-5 text-base font-medium leading-7 text-white sm:text-lg sm:leading-7">
          {intro}
        </p>

        <div className="flex items-center justify-between gap-3 border-t border-white/30 pt-4">
          <span
            className={`max-w-[70%] rounded-full px-4 py-2 text-xs font-bold ${badgeStyle}`}
          >
            {status}
          </span>

          <button
            type="button"
            aria-label={`More about profile ${Number(id) + 1}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-cyan-950 transition hover:rotate-45 hover:bg-cyan-300"
          >
            <ArrowUpRight size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
