import { useEffect } from 'react';
import { useTodosCTX } from '../App/hooks';
import { Input } from '../features/components/Input/Input';
import { Todo } from './components/Todo/Todo';
import './Todos.css';
import cls from 'classnames';
export const Todos = () => {
    const { todos } = useTodosCTX();

    return (
        <div className={cls('todos')}>
            <div className="todos__input-text">
                <Input type="text" />
            </div>
            {todos.map(({ title, checked, id }) => (
                <Todo key={id} title={title} checked={checked} id={id} />
            ))}
        </div>
    );
};
