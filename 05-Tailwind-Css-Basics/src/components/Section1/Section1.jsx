
import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = ({ users = [] }) => {
  return (
    <section className="min-h-screen w-full bg-cyan-950 px-4 py-5 text-white sm:px-6 sm:py-7 lg:px-10 lg:py-8">
      <Navbar />
      <Page1Content users={users} />
    </section>
  )
}

export default Section1
