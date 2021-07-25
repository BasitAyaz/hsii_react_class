import "./App.css";
import img from "./assets/img.jpg";
import { useState } from "react";
import { Button, DarkButton } from "./button";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo() {
    console.log(text);
    let arr = [...todoList, text];
    setTodoList(arr);
    setText("");
  }
  function deleteTodo(ind) {
    todoList.splice(ind, 1);
    setTodoList([...todoList]);
  }
  console.log(todoList);
  return (
    <div className="App">
      <header className="App-header">
        <input value={text} onChange={(a) => setText(a.target.value)} />
        <button onClick={() => addTodo()}>+</button>
        <ul>
          {todoList.map((e, i) => {
            return (
              <li key={i}>
                {e} <button onClick={() => deleteTodo(i)}>Delete</button>
              </li>
            );
          })}
        </ul>
        <DarkButton btnValue="Log" />
        <Button btnValue="norman button" />
      </header>
    </div>
  );
}

export default App;
