import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //state variable
    const [text, setText] = useState("");
    
    let trimText = text.trim();

    //jsx
    return (
        <>
            <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Write below</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="15" 
                              style={{backgroundColor: props.mode==='dark'?'gray':'white', 
                                      color: props.mode === 'dark'?'white':'#042743'}}
                    >
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra spaces</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{trimText.split(' ').length} words, {trimText.length} words</p>
                <p>{0.008 * trimText.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Something to preview it here'}</p>
            </div>
        </>
    )
}
