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
   const handleOnchange = (event) =>{
   
            setTextArea(event.target.value);

    }
   const  wordCount = () =>{

      if(textArea.length>1)
      {
      return textArea.split(" ").length
      }

   }



  return (
    <>
    <div className="container" >



      <h3 className="text-center text-dark">{props.heading} </h3>
      <div className="mb-3 mt-3 my-3">
        <textarea className="form-control" id="myBox" rows="9" value={textArea} onChange={handleOnchange}  >
         
        </textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary ms-3" onClick={handleLowClick} >Convert to Lowercase</button>
      </div>

      <div className="container my-3">
        <h2 className="text-dark" >Your Text Summary</h2>
        {/* <p> <b>Total words:</b> {textArea.split(" ").length}  </p> */}
        <p> <b> Total Words :</b>   {textArea.length>=1? textArea.split(" ").length : 0} </p>
        <p> <b>Total characters : </b> {textArea.length}</p>

        <p>{  0.008 * textArea.split(" ").length} Minutes read. </p>
        <p>{wordCount}</p>
        <h2>Preview</h2>
        <p>{textArea}</p>
        
      </div>
    </>
  );
}
