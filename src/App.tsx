import { useRef} from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid'
import { useTodos } from './TodoContext'

function App() {
  const { todos, setTodos } = useTodos();

  const todoNameRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    const name = todoNameRef.current?.value;
    if (!name) return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false}];
    });

    if (todoNameRef.current) {
      todoNameRef.current.value = "";
    }
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed} : todo
      );
    })
  };

  const handleClear = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  )
};

export default App
