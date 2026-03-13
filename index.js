import React,{useCallback, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"

function PasswordGenerator(){
    const [password,setPassword]=useState(""); 
    const [length,setLength]=useState(1);
    const [number,setNumber]=useState(false);
    const [character,setCharacter]=useState(false);
    // M-2
    const generatePassword=useCallback(()=>{
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
    },[length,number,character])
    //M-1
    // the below fn should not be called when setPassword is called =>it should only change when length,number and chaaracter change
    // function generatePassword(){
    //     let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //     const nums="0123456789";
    //     const chars="!~()*&^%$#@*-+/";

    //     if(number){
    //         str+=nums;
    //     }
    //     if(character){
    //         str+=chars;
    //     }

    //     let pass="";
    //     for(let i=0;i<length;i++){
    //         pass+=str[Math.floor(Math.random()*str.length)];
    //     }

    //     setPassword(pass);
    // }

    // useEffect(()=>{
    //     generatePassword();
    // },[length,number,character])

    // below is optional (useCallback and useEffect together)for M-2 in place of lenth,number , character we can put GeneatePassword as dependency
    useEffect(()=>{
        generatePassword();
    },[generatePassword])

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
reactRoot.render(<PasswordGenerator/>);