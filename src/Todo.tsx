import React from "react";

type Todo = {
    id: string;
    name: string;
    completed: boolean;
};

type TodoProps = {
    todo: Todo;
    toggleTodo: (id: string) => void;
};

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    };

    return (
        <div>
            <label>
                <input 
                    type="checkbox"
                    checked={todo.completed} 
                    readOnly
                    onChange={handleTodoClick}
                    />
                    {todo.name}
            </label>
        </div>
    );
};

export default Todo;