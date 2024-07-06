import React,{useState} from 'react'

export default function TextForm(props) {
    const capitalizeFirstLetter = () => {
        let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setText(newText);
      };
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text ,setText] =useState('');
    return (
    <><div style={{color: props.mode==='dark'?'white':'#061d3f'}}>

   
        <div className="mb-3 container">
            <h1>{props.heading}</h1>
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#061d3f':'white',color: props.mode==='dark'?'white':'#061d3f'}} id="mybox" rows="10" value={text} onChange={handleOnChange} placeholder='Enter text here'></textarea>
        </div>
        <div className="container">
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
         <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
         <button className="btn btn-primary mx-1" onClick={capitalizeFirstLetter}>Convert to camelcase</button>
        </div>
         <div className="container">
            <h2>Your text summary </h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>Estimated time to read it = {0.005 * text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{text}</p>
         </div>
         </div>
    </>
    )
}
