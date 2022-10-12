import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }
  const handleLoClick = () =>{

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }

  const handleCapClick = () =>{
console.log("print");
    let arr = text.split(" ");
    console.log(arr);
    
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    console.log(arr);
    var newText = '';

    for ( let j = 0; j < arr.length; j++) {
     newText += arr[j] + ' ';
     console.log(newText);
    }
    setText(newText);
    props.showAlert("Converted to Capitalize Case!", "success");
  }

  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  const handleCopyClick = () =>{
    console.log("copy");
    let copyText = document.getElementById("myBox");
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied to clipboard!", "success");
  }

  const handleExtraSpace = () => {
    let extraText = text.split(/[ ]+/);
    setText(extraText.join(" "));
    props.showAlert("Extra spaces removed!", "success");

  }

  const handleOnChange = (event) => {
    // console.group("On change");
    setText(event.target.value);
  }
    const[text,setText] = useState('');
    // text = "sdfjkk" //Wrong way to change the state
    // setText("new text") // Right way to change the state
  return (
    
      <>
        <div className="container mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <textarea  id="myBox"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
          color: props.mode==='dark'?'white':'#042743'}} rows="8" className="form-control"></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleCapClick}>Convert to Capitalize Case</button> 
            <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
           
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h2>Your Text Summary</h2>
          <p>{`${text === ''?text.length:text.split(" ").length }`} word and {text.length} character</p>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the text box above to preview it here."}</p>
        </div>
        </>
    
  )
}
