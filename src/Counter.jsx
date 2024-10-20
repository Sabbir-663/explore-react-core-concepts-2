import { useState } from "react"


export default function Counter(){
    const [count,setCount] = useState(20)
    const handleAdd=()=>{
        const newCount = count + 1
        setCount(newCount)
    }
    const handleSub=()=>{
        const newCount = count - 1
        setCount(newCount)
    }
    
    return (
        <div style={{border:'2px solid red'}}>
            <h3 >Counter:{count} </h3>
           
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub} >Reduce</button>
        </div>
    )
}