
import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = ({ id, image, status, intro }) => {
  return (
    <article className="group relative h-[360px] w-[min(78vw,300px)] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-slate-800 sm:h-[410px] sm:w-[300px]">
      <img
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        src={image}
        alt={`Audience profile ${Number(id) + 1}`}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-cyan-950/35 to-black/10" />

      <RightCardContent
        id={id}
        status={status}
        intro={intro}
      />
    </article>
  )
}

export default RightCard
