import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+ text); 
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("converted to uppercase!","success");
    }
    const handleLoClick=()=>{
      //console.log("Uppercase was clicked"+ text); 
      let newText = text.toLowerCase();
      setText(newText)
      props.showalert("converted to lowercase!","success");
  }
  const handleClearClick=()=>{
    //console.log("Uppercase was clicked"+ text); 
    let newText = ' ';
    setText(newText)
    props.showalert("text cleard!","success");
  }
    const handleOnChange=(event)=>{
      //console.log("On Change");
      setText(event.target.value)  
  }
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);   
      props.showalert("copied to clipboard!","success");  
   }
    const handleExtraSpaces=()=>{
      let newText = text.split(/[]+/);
      setText(newText.join(" "))
      props.showalert("removed extra spaces!","success");
   }
    const[text,setText]= useState ('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div class="mb-3">
            <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2 " onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-2 " onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-2 " onClick={handleClearClick}>clear Text</button>
            <button className="btn btn-primary mx-2 " onClick={handleCopy}>copy Text</button>
            <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>remove extra spaces</button>
    </div>
    <div className="container my-2 " style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summery</h1>
            <p>
              {text.split(" ").length} words and {text.length} characters
            </p>
            <p>
              {0.008 * text.split(" ").length } Minutes read 
            </p>
            <h2>Preview</h2>
            <p>
              {text.length>0?text:"Enter Something"}
            </p>
    </div>
    </>
  )
}
