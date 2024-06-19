'use client'

import { useState } from "react"

export default function Counter(){
    const [counter , setCount] = useState(0);
    if(counter % 5  == 0){
        console.log("counter of  number 5");
    }
    return(
    <div className="p-5 bg-slate-300 flex justify-center ">
        <button className="p-5 bg-slate-800" onClick={()=>setCount((c)=> c+=1)}> + </button>
        <span className="p-5 bg-red-400">{counter}</span>
        <button className="p-5 bg-slate-800" onClick={()=>setCount((c)=> c-=1)}> - </button>

    </div>
    )
}