import React, { useState } from "react";

export default function TextForm(props) {

   const [textArea,setTextArea] = useState("");

   const handleUpClick=()=>{
        // console.log("uppercase was clicked...")
        setTextArea(textArea.toUpperCase())
        props.showAlert("Converted to uppercase..","success")
    }
    const handleLowClick=()=>{
      // console.log("uppercase was clicked...")
      setTextArea(textArea.toLowerCase())
      props.showAlert("Converted to lowercase..","success")
  }

  const handleClearClick=()=>{
    // console.log("uppercase was clicked...")
    setTextArea("");
    props.showAlert("your textbox is clear...","success")
}

const handleReverseClick=()=>{
  // console.log("uppercase was clicked...")
  let reverse = [...textArea].reverse().join("")
  setTextArea(reverse);
  props.showAlert("your text is reversed","success")
}

const handleCopy = () =>{
  let text = document.getElementById("txtArea")
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges()
  props.showAlert("Copied to clipboard","dark")
  
}

const handleExtraSpace= ()=>{

  // const extraspace = textArea.split("  ").join(" ");
  const extraspace = textArea.replace(/\s+/g, ' ').trim()
  setTextArea(extraspace)

}

   const handleOnchange = (event) =>{
   
            setTextArea(event.target.value);

    }

   


  return (
    <>
    <div className="container mt-3 col-xl-10 col-lg-6 " style={{color:props.mode=='dark'? 'grey' :'light'}} >



      <h3 className="text-center mb-4 " style={{color:props.mode=='dark'? 'white':'black'}}  >{props.heading} </h3>
      <div className="mb-3 mt-3 my-3">
        <textarea className="form-control" id="txtArea" rows="9" value={textArea} onChange={handleOnchange} 
        
        style={{backgroundColor:props.mode=='dark'? 'rgb(36 74 104)' :'white',color:props.mode=='dark'?'white':'black'}}  >
         
        </textarea>
      </div>

     
      </div>
      <div className="container  d-flex flex-column mb-5 ">
      <button  disabled={textArea.length===0}   className="btn md-ms-3 mt-3   "  style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}  onClick={handleUpClick} >Convert to Uppercase </button>
      <button  disabled={textArea.length===0}   className="btn md-ms-3 mt-3    " style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}   onClick={handleLowClick} >Convert to Lowercase </button>
      <button   disabled={textArea.length===0}   className="btn md-ms-3 mt-3   " style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}  onClick={handleReverseClick} >Reverse</button>
      <button   disabled={textArea.length===0}   className="btn md-ms-3 mt-3  " style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}  onClick={handleExtraSpace} >Remove Extraspace</button>
      <button   disabled={textArea.length===0}   className="btn md-ms-3 mt-3  " style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}  onClick={handleCopy} >Copy</button>
      <button  disabled={textArea.length===0}   className="btn  md-ms-3 mt-3  " style={{backgroundColor:props.mode=='dark'? '#6C62CA' :'#1D127E',color:props.mode=='dark'?'white':'white'}}  onClick={handleClearClick} >Clear</button>

      </div>

      <div className="container  mt-4"  >
        <h2 style={{color:props.mode=='dark'? 'white':'black'}}  >Your Text Summary</h2>
        {/* <p> <b>Total words:</b> {textArea.split(" ").length}  </p> */}
        {/* <p style={{color:props.mode=='dark'? 'white':'black'}} > <b> Total Words :</b>   {textArea.length>=1? textArea.split(" ").length : 0} </p> */}
        <p style={{color:props.mode=='dark'? 'white':'black'}} > <b> Total Words : </b>{textArea.split(" ").filter((element)=>{return element.length!==0}).length} </p>
     
        <p style={{color:props.mode=='dark'? 'white':'black'}} > <b >Total characters : </b> {textArea.length}</p>

        <p style={{color:props.mode=='dark'? 'white':'black'}} >{  0.008 * textArea.split(" ").filter((element)=>{return element.length!==0}).length} <b>Minutes read.</b>  </p>
     
        <h2 style={{color:props.mode=='dark'? 'white':'black'}} >Preview</h2>
        <p style={{color:props.mode=='dark'? 'white':'black'}}  >{textArea.length>0?textArea:"Nothing to preview......."  }</p>
        
      </div>
    </>
  );
}
