import React, { useState } from "react";




export default function TextForm(props) {

   const [textArea,setTextArea] = useState("");

   const handleUpClick=()=>{
        // console.log("uppercase was clicked...")
        setTextArea(textArea.toUpperCase())
    }
   const handleOnchange = (event) =>{
   
            setTextArea(event.target.value);

    }



  return (
    <>
      <h3 className="text-center text-dark">{props.heading} </h3>
      <div className="mb-3 mt-3 my-3">
        <textarea className="form-control" id="myBox" rows="9" value={textArea} onChange={handleOnchange}  >
         
        </textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>

    </>
  );
}
