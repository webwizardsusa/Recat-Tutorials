import { useState,useEffect, useRef,usePrevious } from "react";
import './App.css';
import ReducerExample from './ReducerExample'

function App() {

  const [count, setCount] = useState(0);
 
  const prevCount = usePrevious(count);
  console.log(count);
  

  function usePrevious(value) {
    const ref = useRef();
    console.log(ref);
    useEffect(() => {
      ref.current = value;
    }, [value]);
    
    console.log(ref.current);
    return ref.current;
  }
  return (
    <div>
      <h1>
        Now: {count} ----- before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <ReducerExample />
    </div>
  );
}

export default App;
