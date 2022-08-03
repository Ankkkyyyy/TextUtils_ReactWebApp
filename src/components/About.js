import React, { useState } from "react";

export default function About(props) {


    // const [mystyle,setmystyle]=useState({ color:'black', backgroundColor:'white' })

    const mystyle = {

      color:props.mode=="dark"?'white':'#042743',
      backgroundColor: props.mode=='dark'?'rgb(36 74 104)':'white',
      border: '2px solid'


    }



  return (
    <div className="container mt-3 " >
      <h1  style={{color:props.mode=='dark'? 'white':'black'}}  >About us</h1>
      <div className="accordion" style={mystyle}  id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong> Analyze Your Text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textutils  gives you a way to analyze your text quickly & efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={mystyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <strong>   Free to use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}> 
             Textutils is a free character counter tool that provides instant character count & word count statistics for a given text.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              style={mystyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>   Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
             This word counter software works in all web browser such as Chrome,Edge,Firefox,Brave,Safari,opera etc.
             user can use it for counting & formatting text for their social media post, essays pdf documents & blog post.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
