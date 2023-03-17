import React, {useState} from "react";


export default function Navbar(props) {
      const [text, setText] = useState('Enter text here') ;
      function handleClick(){
            // setText('Fuck you') ;
            let changedText = text.toLowerCase()
      //     console.log(text) ;
           setText(changedText) ;
           props.showAlert("converted to Lower Case", "success") ;
      } ;
      function handleChange(event){
            setText(event.target.value) ;

      //     console.log('clicked the button bro ') ;
      } ;
      function handleClickUpper(){
           setText(text.toUpperCase()) ;
           props.showAlert("converted to upperCase", "success") ;
      };
      function handleClickClear(){
            setText("");
            props.showAlert("text cleared", "success") ;
      }
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea
          className="form-control "
          placeholder="Leave a comment here"
          value={text}
          id="floatingTextarea"
          rows="8"
          onChange={handleChange}
          style={{backgroundColor:props.mode==='light'?'#393633':'white', color:props.mode==='light'?'white':'black'}}
        ></textarea>
    </div>
        <button className="btn btn-primary" onClick={handleClick} >LowerCase</button>
        <button className="btn btn-primary mx-4" onClick={handleClickUpper} >UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClickClear} >Clear Text</button>
    </div>

    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>your text have {text.length} character and {text.split(" ").length} words </p> 
    </div>

    <div className="container">
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    
    </>
  );
}
