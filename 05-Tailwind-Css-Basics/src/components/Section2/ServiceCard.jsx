
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const ServiceCard = (props) => {
  const { service } = props

  return (
    <article className="group flex min-h-[300px] flex-col rounded-3xl border border-white/15 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.09] sm:min-h-[320px] sm:p-7">

      <div className="flex items-start justify-between">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl font-medium text-cyan-950 ${service.color}`}
        >
          {service.icon}
        </span>

        <span className="text-sm font-medium text-gray-400">
          {service.number}
        </span>
      </div>

      <div className="mt-10 flex-1">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-300">
          {service.description}
        </p>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Explore service
        </span>

        <button
          type="button"
          aria-label={`Explore ${service.title}`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-cyan-950 transition duration-300 group-hover:rotate-45 group-hover:bg-cyan-300"
        >
          <ArrowUpRight size={22} />
        </button>
      </div>

    </article>
  )
}

export default ServiceCard
