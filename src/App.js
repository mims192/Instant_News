import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress]=useState(0);
  const apiKey=process.env.REACT_APP_NEWS_API

  const [mode,setMode]=useState("light")
  const toggleMode =()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black ";  
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Switch>
          <Route exact path="/">
            <News  mode={mode}setProgress={setProgress} key="general" apiKey={apiKey} category="general" country="in" />
          </Route>
          <Route exact path="/business">
            <News mode={mode} setProgress={setProgress} key="business"apiKey={apiKey} category="business" country="in" />
          </Route>
          <Route exact path="/health">
            <News mode={mode} setProgress={setProgress} key="health"apiKey={apiKey} category="health" country="in" />
          </Route>
          <Route exact path="/science">
            <News mode={mode} setProgress={setProgress} key="science"apiKey={apiKey} category="science" country="in" />
          </Route>
          <Route exact path="/technology">
            <News mode={mode} setProgress={setProgress} key="technology"apiKey={apiKey} category="technology" country="in" />
          </Route>
          <Route exact path="/sports">
            <News mode={mode} setProgress={setProgress}key="sports" apiKey={apiKey} category="sports" country="in" />
          </Route>
          <Route exact path="/entertainment">
            <News mode={mode} setProgress={setProgress}key="entertainment" apiKey={apiKey}category="entertainment" country="in" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


{/* pageSize={5}  */}