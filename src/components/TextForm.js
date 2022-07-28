import React, { useState } from "react";




export default function TextForm(props) {

   const [textArea,setTextArea] = useState("");

   const handleUpClick=()=>{
        // console.log("uppercase was clicked...")
        setTextArea(textArea.toUpperCase())
    }
    const handleLowClick=()=>{
      // console.log("uppercase was clicked...")
      setTextArea(textArea.toLowerCase())
  }

  const handleClearClick=()=>{
    // console.log("uppercase was clicked...")
    setTextArea("");
}

const handleReverseClick=()=>{
  // console.log("uppercase was clicked...")
  let reverse = [...textArea].reverse().join("")
  setTextArea(reverse);
}

const handleCopy = () =>{
  let text = document.getElementById("txtArea")
  text.select();
  navigator.clipboard.writeText(text.value);
  
}

   const handleOnchange = (event) =>{
   
            setTextArea(event.target.value);

    }

   


  return (
    <>
    <div className="container" >



      <h3 className="text-center text-dark">{props.heading} </h3>
      <div className="mb-3 mt-3 my-3">
        <textarea className="form-control" id="txtArea" rows="9" value={textArea} onChange={handleOnchange}  >
         
        </textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary ms-3" onClick={handleLowClick} >Convert to Lowercase</button>
      <button className="btn btn-primary ms-3" onClick={handleReverseClick} >Reverse</button>
      <button className="btn btn-primary ms-3"  onClick={handleCopy} >Copy</button>
      <button className="btn btn-primary ms-3" onClick={handleClearClick} >Clear</button>
      </div>

      <div className="container my-3">
        <h2 className="text-dark" >Your Text Summary</h2>
        {/* <p> <b>Total words:</b> {textArea.split(" ").length}  </p> */}
        <p className="text-dark" > <b> Total Words :</b>   {textArea.length>=1? textArea.split(" ").length : 0} </p>
        <p className="text-dark"> <b >Total characters : </b> {textArea.length}</p>

        <p className="text-dark" >{  0.008 * textArea.split(" ").length} Minutes read. </p>
     
        <h2 className="text-dark">Preview</h2>
        <p className="text-dark" >{textArea}</p>
        
      </div>
    </>
  );
}
