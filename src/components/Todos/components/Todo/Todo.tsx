import { type FC } from 'react';
import { Button } from '../../../features/components/Button/Button';
import { IconDelete } from '../../../features/components/IconDelete/IconDelete';
import { Input } from '../../../features/components/Input/Input';
import './Todo.css';
import type { ITodo } from '../../../App/types';
import cls from 'classnames';

export const Todo: FC<ITodo> = ({ title, checked, id }) => {
    return (
        <div className="todo">
            <Input checkedProps={checked} todoId={id} />
            <span className={cls({ 'todo__text-compleate': checked })}>
                {title}
            </span>

            <div className="todo__button">
                <Button element={<IconDelete />} />
            </div>
        </div>
    );
};
