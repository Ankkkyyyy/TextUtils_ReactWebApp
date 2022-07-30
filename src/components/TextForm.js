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
    <div className="container" style={{color:props.mode=='dark'? 'grey' :'light'}} >



      <h3 className="text-center" style={{color:props.mode=='dark'? 'white':'black'}}  >{props.heading} </h3>
      <div className="mb-3 mt-3 my-3">
        <textarea className="form-control" id="txtArea" rows="9" value={textArea} onChange={handleOnchange} 
        
        style={{backgroundColor:props.mode=='dark'? 'white' :'white',color:props.mode=='dark'?'black':'black'}}  >
         
        </textarea>
      </div>
      <button className="btn"  style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}  onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn ms-3" style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}   onClick={handleLowClick} >Convert to Lowercase</button>
      <button className="btn ms-3" style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}  onClick={handleReverseClick} >Reverse</button>
      <button className="btn ms-3" style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}  onClick={handleCopy} >Copy</button>
      <button className="btn  ms-3" style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}  onClick={handleClearClick} >Clear</button>
      </div>

      <div className="container my-3"  >
        <h2 style={{color:props.mode=='dark'? 'white':'black'}}  >Your Text Summary</h2>
        {/* <p> <b>Total words:</b> {textArea.split(" ").length}  </p> */}
        <p style={{color:props.mode=='dark'? 'white':'black'}} > <b> Total Words :</b>   {textArea.length>=1? textArea.split(" ").length : 0} </p>
        <p style={{color:props.mode=='dark'? 'white':'black'}} > <b >Total characters : </b> {textArea.length}</p>

        <p style={{color:props.mode=='dark'? 'white':'black'}} >{  0.008 * textArea.split(" ").length} Minutes read. </p>
     
        <h2 style={{color:props.mode=='dark'? 'white':'black'}} >Preview</h2>
        <p style={{color:props.mode=='dark'? 'white':'black'}}  >{textArea.length>0?textArea:"Enter something to preview it....."  }</p>
        
      </div>
    </>
  );
}
