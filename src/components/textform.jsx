import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("");

  function toCapital() {
    var s = text.toUpperCase();
    setText(s);
    props.showalert("Converted to Upper Case");
  }

  function toSmall() {
    var s = text.toLowerCase();
    setText(s);
    props.showalert("Converted to Lower Case");
  }

  function clearText() {
    var s = "";
    setText(s);
    props.showalert("Text Cleared");
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    props.showalert("Copied to clipboard");
  }

  function updatetext(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  function wordcount(e) {
    if (text.trim().length == 0) return 0;
    else return text.trim().split(" ").length;
  }

  return (
    <div style={props.theme}>
      <div className="container my-3">
        <h1>Enter your text here</h1>
        <textarea
          name="textform"
          id="textdalo"
          cols="25"
          rows="10"
          value={text}
          onChange={updatetext}
        ></textarea>
        <button className="btn btn-primary" onClick={toCapital}>Change to Capital Letters</button>
        <button className="mx-3 btn btn-primary" onClick={toSmall}>
          Change to Small Letters
        </button>
        <button className="btn btn-primary" onClick={clearText}>
          Clear text
        </button>
        <button className="btn btn-primary mx-3" onClick={copyText}>
          Copy text
        </button>
      </div>

      <div className="container word-counter">
        <h3>Word Counter</h3>
        <p>{"Total Words in your text are " + wordcount()}</p>
        <p>Total Charaters in your text are {text.length}</p>
      </div>
    </div>
  );
}

export default Textform;
