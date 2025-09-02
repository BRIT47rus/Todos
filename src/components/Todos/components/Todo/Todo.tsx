import { type FC } from 'react';
import { Button } from '../../../features/components/Button/Button';
import { IconDelete } from '../../../features/components/IconDelete/IconDelete';
import { Input } from '../../../features/components/Input/Input';
import './Todo.css';
import type { ITodo } from '../../../App/types';
import cls from 'classnames';
import { useTodosCTX } from '../../../App/hooks';

export const Todo: FC<ITodo> = ({ title, checked, id }) => {
    const { todos, setTodos } = useTodosCTX();

    const onclickDeleteTodo = (id: number) => {
        if (id !== undefined) {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        }
    };
    return (
        <div className="todo">
            <Input checkedProps={checked} todoId={id} />
            <span className={cls({ 'todo__text-compleate': !checked })}>
                {title}
            </span>

            <div className="todo__button" onClick={() => onclickDeleteTodo(id)}>
                <Button element={<IconDelete />} />
            </div>
        </div>
    );
};
