import React from "react";
import { useState, useEffect} from "react";

export default function Converter(){

   const [initialState, setInitialState] = useState({
     input: "",
     output: "",
   });

   const{input, output} = initialState
 
    
     function alphabetToDigits(text){                        
       let result = "";
       for(let i = 0; i < text.length; i++){
         var code = text.charCodeAt(i)
         if(code > 64 && code < 91){
           result += (code-64) + ""
         }else if(code > 96 && code < 123){
           result += (code - 96) + ""
           }else{
            result += ""
          }
       }
       setInitialState((prev) => ({
        ...prev,
        output: result.trim(),
      }))
      }
   

   const handleChange = (e) => {
    let newInput = e.target.value;    
    setInitialState((prev) => ({
      ...prev,
      input: newInput
    }))
   }

  const handleButtonClick = () =>{
    alphabetToDigits(input)
  }

    return(
        <main>
        <div className="note">
          This is a program that converts alphabets to their respective positions 
        </div>

        <div className="container">
           
            <input 
              // ref={inputRef}
              className="input-field"
              placeholder="Enter an alphabet letter"
              autoComplete="off"
              type="text"
              value={input}
              onChange={handleChange}
              ></input>

            <button 
              className="button" 
             onClick={handleButtonClick}
              >Convert</button>

            <div className="screen">
             {output && <p className="screen-text">{output}</p>}
            </div>

        </div>
        </main>
    );
}