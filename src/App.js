import "./App.css";
import img from "./assets/img.jpg";
import { useState } from "react";
import Button from "./button";

function App() {
  const [nam, setNam] = useState("Basit");
  const [num, newNum] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>{num}</h1>
        <h2>{email}</h2>
        <input onChange={(a) => setEmail(a.target.value)} />
        <button onClick={() => newNum(num + 1)}>+</button>
      </header>
    </div>
  );
}

export default App;
