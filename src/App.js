import React, { useEffect, useState } from 'react';

const App = () =>{
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
      if(running == false) return;

      const timerId = setTimeout(() => {
        setCount(count+1);
      }, 1000)

      return() => {
        clearTimeout(timerId)
      }

    }, [count, running])

    const handleStart = () => {
        setRunning(true)
    }
    const handlePause = () => {
        setRunning(false)
    }
    const handleReset = () => {
        setCount(0)
        setRunning(false)
    }

    return(
        <>
          <h1>Count: {count}</h1>
          <button onClick={handleReset}>Reset</button>
          {!running? <button onClick={handleStart}>Start</button>
          : <button onClick={handlePause}>Pause</button>}

        </>
    )
}

export default App
