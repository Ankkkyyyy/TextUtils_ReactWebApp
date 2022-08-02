import React from 'react'

export default function Footer(props) {
  return (
    <div class="footer text-center mt-5" style={{color:props.mode=='dark'? 'white':'black'}} >
    <p>Made with 💜 by <a href="https://twitter.com/ankkkyyyy" target="_blank">Ankit Mishra</a></p>
  </div>
  )
}
