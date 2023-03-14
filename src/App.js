import React, { useState } from 'react';



function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };


  const styles_div = {
    color: 'rgb(148, 21, 120)',
    marginLeft: '40em',
    paddingTop: '8em'
  };

  const styles_list = {
    color: 'rgb(21, 108, 148)',
    fontSize: '2em',
    fontFamily: 'Times New Roman, Times, serif'
  };

  const styles_btn = {
    marginLeft: '2em',
    fontSize: '0.6em',
    color: 'rgb(148, 21, 120)',
    fontFamily: 'Times New Roman, Times, serif'
  }

  const styles_btn1 = {
    marginLeft: '2em',
    fontSize: '1em',
    fontFamily: 'Times New Roman, Times, serif'
  }

  return (

    <div style={styles_div}>

      <ul style={styles_list}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button style={styles_btn} onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button style={styles_btn1} type="submit">Add To Do</button>
      </form>
    </div>
  );
}

export default App;

