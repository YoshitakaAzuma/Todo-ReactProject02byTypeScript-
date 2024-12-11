import React, { createContext, useContext, useState, ReactNode} from "react";
// Todoの型を定義
type Todo = {
    id: string;
    name: string;
    completed: boolean;
};
// コンテキストの型
type TodoContextType = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
// コンテキスト作成
const TodoContext = createContext<TodoContextType | undefined>(undefined);
// コンテキストプロバイダ
export const TodoProvider: React.FC<{ children: ReactNode}> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
}
// カスタムフック
export const useTodos = (): TodoContextType => {
    const context = useContext(TodoContext);
    if(!context) {
        throw new Error('useTodos must be used within a TodoProvider');
    }
    return context;
}