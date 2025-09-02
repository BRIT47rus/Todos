import {
    useEffect,
    useState,
    type ChangeEvent,
    type FC,
    type HTMLAttributes,
} from 'react';
import './Input.css';
import cls from 'classnames';
import { IconCompleate } from '../IconCompleate/IconCompleate';
import { useTodosCTX } from '../../../App/hooks';
import { Button } from '../Button/Button';
import { IconAdd } from '../IconAdd/IconAdd';

interface Props extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'checkbox';
    todoId?: number;
    checkedProps?: boolean;
    onAdd: (text: string) => void;
}

export const Input: FC<Props> = ({
    type = 'checkbox',
    checkedProps,
    todoId,
    onAdd,
    ...rest
}) => {
    const [value, setValue] = useState('');
    const { todos, setTodos } = useTodosCTX();

    const switchComplete = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const onClick = () => {
        console.log('clicjk');
        const text = value.trim();
        if (text) {
            onAdd(text);
            setValue('');
        }
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        setTodos(todos);
    }, [setTodos, todos]);
    return (
        <div className={cls('input-container')} {...rest}>
            {type === 'text' ? (
                <>
                    <Button
                        className="todos__input-text-add"
                        element={<IconAdd className="" />}
                        onClick={onClick}
                    />
                    <input
                        className={cls('input-text')}
                        type={'text'}
                        value={value}
                        onChange={onChange}
                        placeholder="Add new todo"
                    />
                </>
            ) : (
                <div
                    className="input-compleate-wrap"
                    onClick={() => {
                        if (todoId !== undefined) {
                            switchComplete(todoId);
                        }
                    }}
                >
                    <IconCompleate
                        checked={checkedProps}
                        className="input-checkbox__icon"
                    />
                </div>
            )}
        </div>
    );
};
