
import React from 'react'
import { ArrowDownRight } from 'lucide-react'
import ServiceCard from './ServiceCard'

const Section2Content = (props) => {
  return (
    <div id="services" className="py-10 sm:py-14 lg:py-16">

      <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Ideas into impact
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            We make brands
            <br />
            <span className="text-cyan-300">stand out.</span>
          </h2>
        </div>

        <div className="max-w-md lg:pb-2">
          <p className="text-sm leading-7 text-gray-300 sm:text-base">
            From powerful branding to digital experiences, we help businesses
            communicate better, connect with people, and grow with confidence.
          </p>

          <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-cyan-300">
            Discover our expertise
            <ArrowDownRight size={20} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {props.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-400">
          Good ideas deserve great execution.
        </p>

        <p className="text-xs font-medium uppercase tracking-widest text-cyan-300">
          Strategy · Creativity · Growth
        </p>
      </div>
    </div>
  )
}

export default Section2Content
