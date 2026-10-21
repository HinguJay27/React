
import React from 'react'
import RightCard from './RightCard'

const RightContent = ({ users = [] }) => {
  return (
    <div className="min-w-0 w-full lg:w-[62%]">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            The people that matter
          </p>

          <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
            Audience profiles
          </h2>
        </div>

        <span className="shrink-0 rounded-full border border-white/20 px-3 py-1.5 text-xs text-gray-300">
          {users.length} profiles
        </span>
      </div>

      <div
        id="audience-cards"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:gap-5"
      >
        {users.map((user, index) => (
          <RightCard
            key={user.id ?? index}
            id={user.id ?? index}
            image={user.image}
            status={user.status}
            intro={user.intro}
          />
        ))}
      </div>

      <p className="mt-1 text-xs text-gray-400">
        Scroll horizontally to explore all profiles →
      </p>
    </div>
  )
}

export default RightContent
