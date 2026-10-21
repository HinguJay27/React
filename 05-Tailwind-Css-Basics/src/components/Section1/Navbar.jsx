
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 border-b border-white/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <span className="w-fit rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-cyan-950 sm:text-sm">
        Target Audience
      </span>

      <a
        href="#audience-cards"
        className="flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-medium uppercase tracking-wide transition hover:bg-white hover:text-cyan-950 sm:text-sm"
      >
        Digital Branding Platform
        <ArrowUpRight size={16} />
      </a>
    </nav>
  )
}

export default Navbar
