import {useCallback,useEffect,useRef} from 'react'
export default function UseTimeoutExample(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    console.log("1");
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
  //  console.log(callbackRef.current);

    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    //  console.log(timeoutRef.current);

  }, [delay]);

  const   clear = useCallback(() => {
    // console.log(timeoutRef);
     console.log(clearTimeout(timeoutRef.current));

    timeoutRef.current && clearTimeout(timeoutRef.current);
    console.log(clearTimeout(timeoutRef.current));


  }, [])

  useEffect(() => {
    console.log("2");

    set();
   console.log(clear);
    return clear;
  }, [delay, set, clear]);

  const   reset = useCallback(() => {
    console.log("3");

    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
