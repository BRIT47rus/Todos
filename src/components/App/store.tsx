import { type FC, type ReactNode } from 'react';
import type { ITodo } from './types';
import { TodoContext, useLocalStorage } from './hooks';
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
    deleteTodo: (id: number) => void;
    toogleCompleate: (id: number) => void;
}

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', initialTodos);

    const addTodo = (value: string) => {
        if (!value) return;
        const random = Math.random() * performance.now();

        setTodos((prev) => [
            { id: random, title: value, checked: true },
            ...prev,
        ]);
    };
    const deleteTodo = (id: number) => {
        if (id !== undefined) {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        }
    };
    const toogleCompleate = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    return (
        <TodoContext.Provider
            value={{ todos, setTodos, addTodo, deleteTodo, toogleCompleate }}
        >
            {children}
        </TodoContext.Provider>
    );
};
