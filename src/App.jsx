import { useState, useRef, useEffect } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    Timer()
  },[])

  const Timer = () => {
    ref.current = setInterval(() => {
      setCounter((p) => p + 1)
    }, 1000)
  }

  return (
    <div className="App">

      <h3>Counter:{counter}</h3>
      <button onClick={() => {
        clearInterval(ref.current)
      }}>
        Stop
      </button>

      <button onClick={Timer}>Start</button>
      <button onClick={()=>{
        clearInterval(ref.current);
        setCounter(0)
      }}>Reset</button>
    </div>
  );
}

export default App;
