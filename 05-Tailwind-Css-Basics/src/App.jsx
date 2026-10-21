import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const users = [
  {
   
    image: "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    intro: "A dedicated professional who values teamwork, builds meaningful relationships, and consistently delivers excellent results through creativity and commitment.",
    status: "Satisfied"
  },
  {
   
    image: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    intro: "An experienced team leader who inspires colleagues, solves complex challenges, and creates a positive environment for professional growth.",
    status: "Unsatisfied"
  },
  {
   
    image: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    intro: "A creative designer passionate about innovative ideas, thoughtful solutions, and creating memorable experiences that exceed customer expectations.",
    status: "Satisfied"
  },
  {
    
    image: "https://images.unsplash.com/photo-1562894363-43b6c762ca5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    intro: "A customer success specialist focused on understanding client needs, resolving concerns quickly, and building lasting professional partnerships.",
    status: "Pending"
  },
  {
    
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    intro: "A skilled business consultant who combines analytical thinking, strategic planning, and clear communication to help organizations achieve sustainable growth.",
    status: "Under Review"
  }
];


const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App