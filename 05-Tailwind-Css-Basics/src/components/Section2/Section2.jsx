
import React from 'react'
import Section2Navbar from './Section2Navbar'
import Section2Content from './Section2Content'

const services = [
  {
    id: 1,
    number: '01',
    title: 'Brand Strategy',
    description:
      'Build a strong brand identity with clear positioning, meaningful messaging, and a strategy that connects with your audience.',
    icon: '◈',
    color: 'bg-orange-300',
  },
  {
    id: 2,
    number: '02',
    title: 'Digital Marketing',
    description:
      'Reach the right audience through creative campaigns, digital channels, and data-driven marketing strategies.',
    icon: '↗',
    color: 'bg-lime-300',
  },
  {
    id: 3,
    number: '03',
    title: 'Web Experience',
    description:
      'Create modern, responsive digital experiences that combine clean design, smooth navigation, and usability.',
    icon: '⌘',
    color: 'bg-sky-300',
  },
]

const Section2 = () => {
  return (
    <section className="min-h-screen w-full bg-cyan-950 px-4 py-8 text-white sm:px-8 sm:py-12 lg:px-14 lg:py-14">
      <Section2Navbar />

      <Section2Content services={services} />
    </section>
  )
}

export default Section2
