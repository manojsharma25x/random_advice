import axios from 'axios';
import './App.css';
import { useEffect, useState } from "react";

function App() {
const [advice, setadvice] = useState("Loading...")
  useEffect(() => {
    fetchAdvice();
  }, [])
  
  const fetchAdvice = ()=>{
    axios.get("https://api.adviceslip.com/advice")
      .then((response)=>{
        // console.log(response.data.slip.advice);
        setadvice(response.data.slip.advice)
      })
      .catch((error)=>{
        console.log(error);
      });
      // console.log(adviceResult.data);
    // const {advice} = adviceResult.data
    // setadvice(advice)
  }

  return (
    <div className="App">
      <div className="card">
        <h1>{advice}</h1>
        <button onClick={fetchAdvice}>Give Advice</button>
      </div>
    </div>
  );
}

export default App;
