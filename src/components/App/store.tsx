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
        if (!value) return;
        const random = Math.random() * performance.now();

        setTodos((prev) => [
            ...prev,
            { id: random, title: value, checked: false },
        ]);
    };
    console.log(todos);
    return (
        <TodoContext.Provider value={{ todos, setTodos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
