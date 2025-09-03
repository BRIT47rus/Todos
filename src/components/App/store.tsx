import {
    useEffect,
    useState,
    type FC,
    type ReactNode,
    type SetStateAction,
} from 'react';
import type { ActionFilter, ITodo } from './types';
import { TodoContext, useLocalStorage } from './hooks';
const initialTodos: ITodo[] = [];
export interface ITodoContext {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
    toogleCompleate: (id: number) => void;
    filterTodos: (type: ActionFilter, state?: ITodo[]) => ITodo[];
    filteredTodos: ITodo[];
    setFilteredTodos: React.Dispatch<SetStateAction<ITodo[]>>;
}

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', initialTodos);
    const [filteredTodos, setFilteredTodos] = useState(todos);
    useEffect(() => {
        setFilteredTodos(todos);
    }, [todos]);

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

    const filterTodos = (type: string, state: ITodo[] = todos): ITodo[] => {
        switch (type) {
            case 'all':
                setFilteredTodos(todos);
                return state;
            case 'completed': {
                const arr = state.filter((item) => !item.checked);
                setFilteredTodos(arr);
                return arr;
            }
            case 'active': {
                const arr = state.filter((item) => item.checked);
                setFilteredTodos(arr);
                return arr;
            }

            default:
                return state;
        }
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                setTodos,
                addTodo,
                deleteTodo,
                toogleCompleate,
                filterTodos,
                filteredTodos,
                setFilteredTodos,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
