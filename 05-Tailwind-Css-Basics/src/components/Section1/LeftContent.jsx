
import React from 'react'
import { MoveUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className="flex w-full flex-col justify-between gap-8 lg:w-[38%] lg:shrink-0 lg:gap-10">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
          Know your audience
        </p>

        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
          Prospective
          <br />
          Customer
          <br />
          <span className="text-cyan-300">
            Segmentation.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
          Understand the people behind every click. Explore customer
          profiles, discover different needs, and build more meaningful
          brand experiences through thoughtful audience segmentation.
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-5 lg:mt-8">
        <div>
          <p className="text-2xl font-bold sm:text-3xl">
            01 / 02
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
            Audience insights
          </p>
        </div>

        <MoveUpRight
          className="text-cyan-300"
          size={48}
          strokeWidth={1.3}
        />
      </div>
    </div>
  )
}

export default LeftContent
