import React from 'react'
import "./Upload.css"
import { useState } from "react"
function Upload() {

    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const types = ["video/mp4","image/jpeg", "image/png"];


      const handleChange = (e) => {

           let selected = e.target.files[0];

           if(selected && types.includes(selected.type)){
               setFile(selected)

               
           }else {
               setFile(null);
               setError('Please Enter valid image/video format');
           }



      }


      const handleClick = () => {

      }


    return (
        <div className="upload__container">
         

         <div className="image__upload">
             <input type="file" onChange={handleChange} />
             <div>
                 {error && <div>{error}</div>}
                 {file && <div>{file.name}</div>}
             </div>
             <button onClick={handleClick}>Submit</button>
         </div>

           
        </div>
    )
}

export default Upload
