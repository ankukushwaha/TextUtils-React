import React, {useState} from 'react'

export default function TextForm(props) {

    // const SentenceClick = ()=>{
    //     let newText = text.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1))
    //     .join(' ');
    //     setText(newText); 
    // };
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to Upper Case", "Success");
    };
    const handleLowClick = ()=>{
        let new1Text = text.toLowerCase();
        setText(new1Text);
        props.showAlert("Converted to Lower Case", "Success");
    };
    // const TitleClick = ()=>{
    //     let new1Text = text.toLowerCase().split(' ').map(function(word) {
    //         return (word.charAt(0).toUpperCase() + word.slice(1));
    //       }).join(' ');
    //     setText(new1Text);
    //     props.showAlert("Converted to Title Case", "Success");
    // };
    const InverseClick = ()=>{
        let new1Text =  [...text].map(text => text === text.toUpperCase() ? text.toLowerCase() : text.toUpperCase()).join('');

        setText(new1Text);
        props.showAlert("Converted to Inverse of Previous Case", "Success");
    };
    const AlternatingClick = ()=>{
        let new1Text =  text.split('').map((text,i) => 
        i % 2 === 0 ? text.toLowerCase() : text.toUpperCase()
    ).join('');
        setText(new1Text);
        props.showAlert("Converted to Alternate Case", "Success");
    };
    const copyToClipboard = () => {
        var text = document.getElementById("myBox");
        text.select();
        props.showAlert("Copied Successfully to the Clipboard", "Success");
        navigator.clipboard.writeText(text.value);
        
     }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed ", "Success");
     }
    const handleClearClick = ()=>{
        let new1Text = '';
        setText(new1Text);
        props.showAlert("Cleared Text Successfully", "Success");
    };
    const handleonChange = (event)=>{
        setText(event.target.value);
    };
    const [text, setText] = useState('Enter Your Text Here!');
    // text = "new text";  wrong way to change the state 
    // setText("new text"); //correct way to change the state


  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark'? '#021f2c': 'white', color:props.mode === 'dark'? 'white': 'black'}} id="myBox" rows="12"></textarea>
      </div>
      {/* <button className="btn btn-Primary" onClick={SentenceClick}>Sentence Case</button> */}
      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Upper Case</button>
      <button className="btn btn-success mx-2"  onClick={handleLowClick}>Lower Case</button>
      {/* <button className="btn btn-danger mx-2"  onClick={TitleClick}>Title Case</button> */}
      <button className="btn btn-warning mx-2"  onClick={InverseClick}>InVeRsE cAsE</button>
      <button className="btn btn-danger mx-2"  onClick={AlternatingClick}>aLtErNaTiNg CaSe</button>
      <button className="btn btn-info mx-2"  onClick={copyToClipboard}>Copy Text</button>
      <button className="btn btn-light mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      <button className="btn btn-dark mx-2"  onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textBox above to Preview it here"}</p>
    </div>
    </>
)       
}
