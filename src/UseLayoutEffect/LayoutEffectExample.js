import { useState,useEffect, useRef,usePrevious } from "react";

export default function LayoutEffectExample() {
    const [show, setShow] = useState(false)
    const popup = useRef()
    const button = useRef()
    useEffect (() =>  {
    if (popup.current == null || button.current == null) return
    const { bottom }=  button.current.getBoundingClientRect()
  
    popup.current.style.top= `${bottom + 30}px`
    }, [show])
    return (
    <>
    <button ref={button} onClick={() => setShow(prev => !prev)} >
    Click Here
    </button>
  
    {show && (
    <div style={{ position: "absolute" }} ref={popup}>
    This is a popup menu from Header....
    </div>
    )
    }
</>)}

    
