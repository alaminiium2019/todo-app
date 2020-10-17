import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); //for set value
  const [input, setInput] = useState([]);//for input value

  const addTodo = (event) => {
    event.preventDefault();   //will stop the refresh
    console.log("I am working")
    setTodos([...todos, input]); //...name is previous data, input new data
    setInput('');  //clear up the input after clicking
  }

  return (
    <div className="App">
      <form>
        <h1>Hello Prgrammers world: {todos.length}</h1>
        <input value={input} onChange={event => setInput(event.target.value)}></input>
        <button  type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {
          todos.map(todo => <li>{todo}</li>)
        }
      </ul>

    </div >
  );
}

export default App;
