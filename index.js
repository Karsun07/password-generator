import React,{useState} from "react"
import ReactDOM from "react-dom/client"

function PasswordGenerator(){
    const [password,setPassword]=useState("ABFG"); 
    const [length,setLength]=useState(5);

    return (
        <>
        
        <div id="container">
            <h1 style={{fontSize:"48px"}}>{password}</h1>
            <input  type="range" min={5} max={50}></input>
            <label >Length({length})</label>
            <input type="checkbox"></input>
            <label >Numbers</label>
            <input type="checkbox"></input>
            <label >Characters</label>
        </div>
        </>
    )



}

const reactRoot=ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<PasswordGenerator/>)