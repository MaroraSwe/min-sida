// En todo-lista som sparas i webbläsaren (localStorage),
// så att uppgifterna finns kvar när man laddar om sidan.
import "./Todo.css";
import { useState } from "react";
import TodoItem from "./TodoItem";

// Läs det som är sparat – finns inget börjar vi med en tom lista
function loadTodos() {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
}

function Todo() {
  const [todos, setTodos] = useState(loadTodos());
  const [text, setText] = useState("");

  // Uppdatera state OCH spara – används i stället för setTodos()
  function saveTodos(newTodos) {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function addTodo(e) {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    // [...todos, ny] = en NY lista: allt gammalt + det nya
    saveTodos([...todos, { id: Date.now(), text: text.trim() }]);
    setText("");
  }

  function removeTodo(id) {
    // Behåll alla UTOM den med det här id:t
    saveTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <section className="todo">
      <h2>Att göra</h2>

      <form className="todo-form" onSubmit={addTodo}>
        <label htmlFor="todo-text" className="todo-dold">Ny uppgift</label>
        <input
          id="todo-text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="t.ex. Pusha till GitHub"
        />
        <button type="submit">Lägg till</button>
      </form>

      {todos.length === 0 ? (
        <p className="todo-tom">Inget att göra än.</p>
      ) : (
        <>
          <p className="todo-antal">
            {todos.length} {todos.length === 1 ? "sak" : "saker"} att göra
          </p>
          <ul className="todo-lista">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                onRemove={() => removeTodo(todo.id)}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default Todo;
