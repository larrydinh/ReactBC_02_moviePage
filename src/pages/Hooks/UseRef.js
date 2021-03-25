import React, { useState, useRef } from 'react'

export default function UseRef(props) {
    let [number, setNumber] =useState(1);
    let messRef =useRef('');
    console.log({messRef});
    return (
        <div>
            {number}<br/>
            <button className="btn btn-success" onClick={()=>{
                setNumber(number+1);
                messRef.current = 'Data changed';
            }}>+</button>
        </div>
    )
}
