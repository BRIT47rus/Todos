import { useState, type FC, type ReactNode } from 'react';
import type { ITodo } from './types';
import { TodoContext } from './hooks';
const initialTodos: ITodo[] = [
    { checked: false, title: 'Я из контекста', id: 14 },
    {
        checked: true,
        title: 'Я из контекста завершенный',
        id: 145,
    },
];
export interface ITodoContext {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    addTodo: (text: string) => void;
}

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>(initialTodos);

    const addTodo = (value: string) => {
        const random = Math.random() * performance.now();
        const todo: ITodo = {
            id: random,
            title: value,
            checked: false,
        };
        setTodos((prev) => {
            prev.push(todo);
            return prev;
        });
    };

    return (
        <TodoContext.Provider value={{ todos, setTodos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
