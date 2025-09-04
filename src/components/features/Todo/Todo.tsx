import cls from 'classnames';
import { forwardRef } from 'react';
import { formatText } from '../../App/helpers';
import { useTodosCTX } from '../../App/hooks';
import type { ITodo } from '../../App/types';
import { Button } from '../components/Button/Button';
import { IconDelete } from '../components/IconDelete/IconDelete';
import { Input } from '../components/Input/Input';
import './Todo.css';

export const Todo = forwardRef<HTMLDivElement, ITodo>(
    ({ title, checked, id }, ref) => {
        const { deleteTodo } = useTodosCTX();

        return (
            <div className={'todo'} ref={ref}>
                <Input checkedProps={checked} todoId={id} onAdd={() => null} />
                <span className={cls({ 'todo__text-compleate': !checked })}>
                    {formatText(title)}
                </span>

                <div className="todo__button">
                    <Button
                        element={<IconDelete />}
                        onClick={() => deleteTodo(id)}
                    />
                </div>
            </div>
        );
    }
);
