import React,{useEffect, useState} from "react"
import ReactDOM from "react-dom/client"

function PasswordGenerator(){
    const [password,setPassword]=useState(""); 
    const [length,setLength]=useState(1);
    const [number,setNumber]=useState(false);
    const [character,setCharacter]=useState(false);

    function generatePassword(){
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const nums="0123456789";
        const chars="!~()*&^%$#@*-+/";

        if(number){
            str+=nums;
        }
        if(character){
            str+=chars;
        }

        let pass="";
        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)];
        }

        setPassword(pass);
    }

    useEffect(()=>{
        generatePassword();
    },[length,number,character])

    return (
        <>
        <div id="container">
            <h1 style={{fontSize:"48px"}}>{password}</h1>

            <input 
                style={{width:"100px"}} type="range" min={1} max={50} value={length} 
onChange={(e)=>setLength(e.target.value)}
            ></input>
            <label>Length({length})</label>

            <input checked={number} type="checkbox" onChange={()=>setNumber(!number)}></input>
            <label>Numbers</label>

            <input checked={character} type="checkbox" onChange={()=>setCharacter(!character)}></input>
            <label>Characters</label>
        </div>
        </>
    )
}

const reactRoot=ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<PasswordGenerator/>)