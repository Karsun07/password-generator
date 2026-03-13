import React,{useState} from "react"
import ReactDOM from "react-dom/client"

function PasswordGenerator(){
    const [password,setPassword]=useState("ABFG"); 
    const [length,setLength]=useState(5);
    const [number,setNumber]=useState(false);
    const [character,setCharacter]=useState(false);

    return (
        <>
        
        <div id="container">
            <h1 style={{fontSize:"48px"}}>{password}</h1>
            <input style={{width:"100px"}} type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label >Length({length})</label>
            <input defaultChecked={number} type="checkbox" onChange={()=>setNumber(!number)}></input>
            <label >Numbers</label>
            <input defaultChecked={character} type="checkbox" onChange={()=>setCharacter(!character)}></input>
            <label >Characters</label>
        </div>
        </>
    )



}

const reactRoot=ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<PasswordGenerator/>)