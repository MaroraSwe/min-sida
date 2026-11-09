// En rad i todo-listan. Raden vet inte HUR man tar bort – den kör bara
// funktionen onRemove som den fick från Todo.jsx. Som en ringklocka.
function TodoItem({ text, onRemove }) {
  return (
    <li className="todo-item">
      <span>{text}</span>
      <button onClick={onRemove} aria-label={`Ta bort ${text}`}>
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
