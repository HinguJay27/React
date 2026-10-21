
import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = ({ users = [] }) => {
  return (
    <div className="flex flex-col gap-8 py-8 sm:py-10 lg:flex-row lg:items-stretch lg:gap-10 lg:py-12">
      <LeftContent />
      <RightContent users={users} />
    </div>
  )
}

export default Page1Content
