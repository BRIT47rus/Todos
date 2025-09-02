import { createContext, useContext, useEffect, useState } from 'react';
import type { ITodoContext } from './store';

export const TodoContext = createContext<ITodoContext | undefined>(undefined);

export const useTodosCTX = (): ITodoContext => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('вызван не в своем конетксте');
    }
    return context;
};

export function useLocalStorage<T>(
    key: string,
    fallbackValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return fallbackValue;
        }
        try {
            const stickyValue = window.localStorage.getItem(key);
            return stickyValue ? JSON.parse(stickyValue) : fallbackValue;
        } catch {
            return fallbackValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // Ошибка записи в localStorage, можно логировать
            console.log(error);
        }
    }, [key, value]);

    return [value, setValue];
}
