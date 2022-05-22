import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Textform from "./components/textform";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState({
    background: "white",
    color: "#351765",
  });
  const [alert, setAlert] = useState("");

  function showAlert(message)
  {
    setAlert(message);

    setTimeout(() => {
      setAlert("");
    }, 1000);
  }

  function togglemode() {
    if (mode === "light") {
      setMode("dark");
      setTheme({
        background: "#351765",
        color: "white",
      });
      document.body.style.backgroundColor = "#351765";
    } else {
      setMode("light");
      setTheme({
        background: "white",
        color: "#351765",
      });
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Header mode={mode} togglemode={togglemode} theme = {theme}></Header>
      <Alert alert = {alert}/>
      <Textform mode={mode} theme = {theme} showalert = {showAlert}></Textform>
    </>
  );
}

export default App;
