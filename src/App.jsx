import React, {useState, useEffect, useRef} from "react"
import './style.css'
import useWordGame from "./hooks/useWordGame"

function App() {
  const TIME = 5
  const {textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame(TIME)

  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea
          ref={textBoxRef}
            onChange={handleChange}
            value={text}
            disabled={!isTimeRunning}
          />
          <h4>Time remaining: {timeRemaining}</h4>
          <button onClick={startGame} disabled={isTimeRunning}>Start</button>
          <h1>Word count: {wordCount}</h1>
          {!isTimeRunning && <h1>WPM: {wordCount*60/TIME}</h1> }
      </div>
  )
}

export default App
