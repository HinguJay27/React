import React from 'react'
import Header from './components/Header'
import Student1 from './components/Student1'
import Student2 from './components/Student2'
import Student3 from './components/Student3'
import Footer from './components/Footer'
import "./App.css";

const App = () => {
  return ( 
    <div className='container'>
      <Header />
      <div className='students'>
      <Student1 />
      <Student2 />
      <Student3 />
      </div>
      <Footer />
    </div>
  )
}
export default App