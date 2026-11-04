import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15')

    console.log(response.data)
  }
  return (
    <div className='bg-black h-screen text-white'>
        <button 
          onClick={getData}
          className='bg-green-500 text-shadow-indigo-200 h-10 w-32 rounded-2xl m-5 active:scale-95'>
          Get data
        </button>
    </div>
  )
}

export default App