import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handleClClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext = '';
        setText(newtext)
    }

    const handleOnChange = (event)=>{
        // console.log("On Click")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode === '#042743'? 'white': 'black'}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === '#042743'? 'grey': 'white', color:props.mode === '#042743'? 'white': 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className=" btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className=" btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className=" btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === '#042743'? 'white': 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Read in {0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the box above to preview"}</p>
    </div>
    </>
  )
}
