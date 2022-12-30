import React from "react";
// import {useRef, useState, useEffect} from "react";

export default function Converter(){

  // const [initialState, setInitialState] = useState({
  //   input: "",
  //   output: "",
  // });

  // const{input, output} = initialState
 
  
  // useEffect(() => {  
    
  //   function alphabetToDigits(input){                        

  //     for(let i = 0; i < input.length; i++){
  //       var code = input.charcodeAt(i)
  //       if(code > 64 && code < 91){
  //         output += (code-64) + ""
  //       }else if(code > 96 && code < 123){
  //         output += (code - 96) + ""
  //         }else{output += ""}
  //     }
  //     return output.slice(0, output.length - 1)
  //    }
  // }, [])



    return(
        <main>
        <div className="note">
          This is a program that converts alphabets to their respective positions 
        </div>

        <div className="container">
           
            <input 
              // ref={inputRef}
              className="input-field"
              placeholder="Enter a letter, word or sentence"
              autoComplete="off"
              type="text"
              // value={text}
              // onChange={alphabetToDigits()}
              ></input>

            <button 
              className="button" 
             // onClick={alphabetToDigits()}
              >Convert</button>

            <div className="screen">
             
            </div>

        </div>
        </main>
    );
}