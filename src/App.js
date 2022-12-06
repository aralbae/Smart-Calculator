import React,{useState} from "react";
import './App.css';
const App =()=>{

  const [result,setResult]=useState("");

  const pushButton=(event)=>{
   
    setResult(result.concat(event.target.value))
  }

  const clearDisplay=()=>{
    setResult("");
  }

const equal=()=>{

  setResult(eval(result).toString());
}

  return(
    <div cl>
      <div className="animation">
    <div className="window">
      <h1>Smart Calculator</h1>
    <input type="text" placeholder = "0" id="answer" value={result}/>
    <input type="button" value="1" className="button"onClick={pushButton}/>
    <input type="button" value="6" className="button"onClick={pushButton}/>
    <input type="button" value="*" className="dosjan"onClick={pushButton}/>
    <input type="button" value="2" className="button"onClick={pushButton}/>
    <input type="button" value="7" className="button"onClick={pushButton}/>
    <input type="button" value="/" className="dosjan"onClick={pushButton}/>
    <input type="button" value="3" className="button"onClick={pushButton}/>
    <input type="button" value="8" className="button"onClick={pushButton}/>
    <input type="button" value="+" className="dosjan"onClick={pushButton}/>
    <input type="button" value="4" className="button"onClick={pushButton}/>
    <input type="button" value="9" className="button"onClick={pushButton}/>
    <input type="button" value="-" className="dosjan"onClick={pushButton}/>
    <input type="button" value="5" className="button"onClick={pushButton}/>
    <input type="button" value="0" className="button"onClick={pushButton}/>
    <input type="button" value="%" className="dosjan"onClick={pushButton}/>
    <input type="button" value="Clear" className="button dosjon2"onClick={clearDisplay}/>
    <input type="button" value="." className="button dosjan5"onClick={pushButton}/>
    <input type="button" value="=" className="button dosjan3"onClick={equal}/>
    </div>
    </div>
    </div>
  )
}

export default App;
