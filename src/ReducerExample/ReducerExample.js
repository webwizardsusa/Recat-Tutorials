import React, { useReducer, useEffect } from 'react';



export default ({ name }) => {
  const init = () => {
    console.log(`init`);
    return 10;
  }
  
  const reducer = (state, action) => {
    switch(action.type){
      case 'increment': return state + 1;
      case 'decrement': return state - 1;
      case 'reset': return 0;
      default : return state;
    }
  }
  
  const [count, dispatch] = useReducer(reducer,12,init);

  const increment = () => {
    dispatch({type: 'increment'});
  }

  const decrement = () => {
    dispatch({type: 'decrement'});
  }

  const reset = () => {
    dispatch({type: 'reset'});
  }

  useEffect(() => {
    // console.log('useEffect called');
    document.title = name + count;
    return () => {
      // console.log('useEffect on clean');
    }
  }, [count]);

  return (
    <>
      <h1>Hello {name}!!!</h1>
      Count: {count}
      <br />
      <button onClick={()=>increment()}>increment</button>
      <button onClick={()=>{dispatch({type: 'decrement'})}}>decrement</button>
      <button onClick={()=>{dispatch({type: 'reset'})}}>reset</button>
    </>
  )
}
