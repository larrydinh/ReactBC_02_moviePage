import React, {useState} from 'react'

//Hook chi su dung cho rfc (react function component)
export default function UseStateHook() {
    //tuple: mang hon hop 
    let [state,setState] = useState({
        number:1
    });
let [number,setNumber] = useState(0);

    //useState la ham tra ve 1 mang gom 2 gia tri la state va phuong thuc setState
    return (
        <div className="container">
            <h1>{state.number} and {number}</h1>
            <button className="btn btn-success" onClick={()=>{
                setState({
                    number:state.number +1
                })
                setNumber(number +1)
            }}>+</button>
        </div>
    )   
}
