import React, {useState } from 'react'
 
 
 function HookCounter() {
    const [count,setCount] = useState(0)
     return (
         <div>
             
        
            <div>
                <button onClick={() => {setCount(count + 1)}}>Click {count}Times</button>
            </div>
         </div>
     )
 }
 
 export default HookCounter
 

