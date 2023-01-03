import {useState,useDeferredValue,useMemo} from "react"
import DeferredValueExampleList from "./DeferredValueExampleList"

function DeferredValueExample(){
    const[input,setInput] = useState("")
    function handelChange(e)
    {

        setInput(e.target.value)
    }  

    

return(
    <> 
    <input  type="text" value={input} onChange={handelChange}/>
    <DeferredValueExampleList input={input}/>
    </>
)
    
}
export default DeferredValueExample