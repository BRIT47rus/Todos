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
    const [animation, setAnimation] = useState<TStyleAnimation>('in');
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (animation === 'in') {
            timerRef.current = setTimeout(() => {
                setAnimation('enter');
            }, 500);
        } else if (animation === 'out') {
            // При анимации выхода запускаем таймер, и после 500 мс вызываем deleteTodo
            timerRef.current = setTimeout(() => {
                deleteTodo(id);
            }, 300);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [animation, deleteTodo, id]);

    useEffect(() => {
        const handleWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowWidth);
        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        };
    }, []);

    const handleDelete = () => {
        setAnimation('out');
    };

    return (
        <div
            ref={ref}
            className={cls('todo', animation && `todo-animation-${animation}`)}
        >
            <Input checkedProps={checked} todoId={id} onAdd={() => null} />
            <span
                className={cls('todo-text', {
                    'todo__text-compleate': !checked,
                })}
            >
                {formatText(title, windowWidth)}
            </span>

            <div className="todo__button">
                <Button element={<IconDelete />} onClick={handleDelete} />
            </div>
        </div>
    );
};
