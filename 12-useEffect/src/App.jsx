import { useState, useEffect } from 'react'
import './App.css'

const App = () => {

  const [message, setMessage] = useState('')

  const maxLength = 200

  // Update browser title whenever message changes
  useEffect(() => {
    document.title = `${message.length} Characters`
  }, [message])

  // Count words
  const wordCount = message.trim()
    ? message.trim().split(/\s+/).length
    : 0

  const clearMessage = () => {
    setMessage('')
  }

  return (
    <div className="container">

      <div className="card">

        <h1>Live Character Counter</h1>

        <p>Type something below</p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Start typing..."
          maxLength={maxLength}
        />

        <div className="counter">

          <p>Characters: {message.length}</p>

          <p>Words: {wordCount}</p>

          <p>Remaining: {maxLength - message.length}</p>

        </div>

        <button onClick={clearMessage}>
          Clear
        </button>

      </div>

    </div>
  )
}

export default App