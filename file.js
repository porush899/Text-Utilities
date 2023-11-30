import React, {useState} from 'react'
export default function TextForm(props){
    const uppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clear = ()=>{
        let newText = "";
        setText(newText)
    }
    const removepunc =()=>{
        let newText = text.split("").filter(char => char.match(/[a-zA-Z0-9]/)).join("");
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return(
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8">
            </textarea>
        </div>
        <button className="btn btn-primary" onClick={uppercase}>Convert To Upper Case</button>
        <br/>
        <button className="btn btn-primary mt-2" onClick={lowercase}>Convert To Lower Case</button>
        <br/>
        <button className="btn btn-primary mt-2" onClick={removepunc}>Remove Punctuation and Spaces</button>
        <br/>
        <button className="btn btn-danger mt-2 " onClick={clear}>Clear Text</button>
        </div>

    )
}
