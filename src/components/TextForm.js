import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text ,setText] =useState('Enter text here2');
    return (
    <>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleOnChange}></textarea>
        </div>
         <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </>
    )
}
