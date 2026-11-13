import React, { useState } from 'react'
import ChildComponents from './components/ChildComponents'

const App = () => {

  const [count, setCount] = useState(0)
  return (
    <div>

      <div>
        <h3>Count : {count}</h3>
        <button onClick={() => {
          setCount(count + 1)
        }}>Increment</button>
      </div>

      <br></br>
    
      <div>
        <ChildComponents buttonName="ClickMe" />
      </div>

    </div>
  )
}

export default App