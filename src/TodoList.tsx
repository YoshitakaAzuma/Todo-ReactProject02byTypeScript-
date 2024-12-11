import React from 'react';
import Todo from './Todo';

type TodoClass = {
    id: string ;
    name: string;
    completed: boolean;
};

type TodoListProps = {
    todos: TodoClass[];
    toggleTodo: (id: string) => void; // 関数型: 引数にIDを受け取り、戻り値はvoid
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo}) => {
    return (
        <>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </>
    );
};

export default TodoList;