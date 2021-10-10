import React from "react"
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "f12ccff5";
  const APP_KEY = "60a4fd34b82a4aac936a705eee1713dd";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return(
    <div className="App">
      <h1>Hello Ayush</h1>
    </div>
  )
}

export default App;
