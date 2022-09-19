import React from 'react'
import { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'



export default function FormText(props) {
  const [text, getText] = useState("")
  const { speak } = useSpeechSynthesis();
 

  const hendelup = () => {
    let newText = text.toLocaleUpperCase();
    getText(newText)
  }
  const Lowest = () => {
    let newL = text.toLocaleLowerCase();
    getText(newL)

  }
  const Clear = () => {
    let text2 = text.replace(text, "");
    getText(text2)
  }
  const hendelChange = (event) => {
    getText(event.target.value)


  }
  const ChangeTheme = () => {
    document.querySelector('.body').style.backgroundColor = "black"
  }
  const backToNormal = () => {
    document.querySelector('.body').style.backgroundColor = "white"
  }
  return (
    <>

      <div className="container">

        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={hendelChange} id="my-Box" rows="8" placeholder='Enter Yor text'></textarea>
        </div>
        <button className='btn btn-info ' onClick={() => speak({ text: text })} >Text-listen</button>
        <button className='btn btn-primary mx-2' onClick={hendelup}  >Change Uppercase</button>
        <button className='btn btn-success mx-2' onClick={Lowest}  >Change Lowercase</button>
        <button className='btn btn-success mx-2' onClick={Clear}  >Clear Text</button>
        <button className='btn btn-warning mx-2' onClick={ChangeTheme} onDoubleClick={backToNormal}>Theme Change</button>
      </div>
      <div className="contanier my-3 "  >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length}:- words Your charcter :-{text.length}</p>
        <p>{.0008 * text.split(" ").length} Time To Taken In Read</p>
        <h2>Preview Your Text Field </h2>

        <p><b><em>{text}</em></b></p>

        <h3>
          {text === "" ? text.trim().split(".").filter((text) => text !== "").length : text.split(".").length - 1}:- no. of sentences
        </h3>

      </div>


    </>
  )
}
