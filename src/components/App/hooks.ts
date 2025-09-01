import { createContext, useContext } from 'react';
import type { ITodoContext } from './store';

export const TodoContext = createContext<ITodoContext | undefined>(undefined);

export const useTodosCTX = (): ITodoContext => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('вызван не в своем конетксте');
    }
    return context;
};
