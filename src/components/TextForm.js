import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converetd to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converetd to Lowercase!", "success");
    }

    const handleClClick = ()=>{
        let newtext = '';
        setText(newtext)
        props.showAlert("Text cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'? 'white': 'black'}}>
        <div className="mb-3">
            <h1 className='mb-4'>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? '#13466e': 'white', color:props.mode === 'dark'? 'white': 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'? 'white': 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
        <p>Read in {0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
