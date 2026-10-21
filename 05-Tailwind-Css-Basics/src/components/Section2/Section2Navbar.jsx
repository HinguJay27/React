
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Section2Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 border-b border-white/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <h4 className="w-fit rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-cyan-950 sm:text-sm">
        Our Services
      </h4>

      <a
        href="#services"
        className="flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-medium uppercase tracking-wide transition hover:bg-white hover:text-cyan-950 sm:text-sm"
      >
        Explore What We Do
        <ArrowUpRight size={16} />
      </a>
    </nav>
  )
}

export default Section2Navbar
