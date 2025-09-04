import cls from 'classnames';
import { formatText } from '../../App/helpers';
import { useTodosCTX } from '../../App/hooks';
import type { ITodo } from '../../App/types';
import { Button } from '../components/Button/Button';
import { IconDelete } from '../components/IconDelete/IconDelete';
import { Input } from '../components/Input/Input';
import './Todo.css';
import { useEffect, useRef, useState, type FC } from 'react';
import type { TStyleAnimation } from '../../Widjets/Todos/Todos';

export const Todo: FC<ITodo> = ({ title, checked, id }) => {
    const { deleteTodo } = useTodosCTX();
    const ref = useRef<HTMLDivElement>(null);
    const [animation, setAnimation] = useState<TStyleAnimation>();

    useEffect(() => {
        setAnimation('in');
        const enterTime = setTimeout(() => {
            setAnimation('enter');
        }, 300);

        return () => {
            clearTimeout(enterTime);
        };
    }, []);
    const onAnimationEnd = (id: number) => {
        if (animation === 'out') {
            deleteTodo(id);
        }
    };
    const handleDelete = () => {
        setAnimation('out');
    };

    return (
        <div
            ref={ref}
            className={cls('todo', animation && `todo-animation-${animation}`)}
            onAnimationEnd={() => onAnimationEnd(id)}
        >
            <Input checkedProps={checked} todoId={id} onAdd={() => null} />
            <span className={cls({ 'todo__text-compleate': !checked })}>
                {formatText(title)}
            </span>

            <div className="todo__button">
                <Button
                    element={<IconDelete />}
                    onClick={() => {
                        handleDelete();
                    }}
                />
            </div>
        </div>
    );
};
