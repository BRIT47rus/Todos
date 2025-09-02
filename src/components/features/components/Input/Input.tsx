import { type FC, type HTMLAttributes } from 'react';
import './Input.css';
import cls from 'classnames';
import { IconCompleate } from '../IconCompleate/IconCompleate';
import { useTodosCTX } from '../../../App/hooks';
interface Props extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'checkbox';
    todoId?: number;
    checkedProps?: boolean;
}

export const Input: FC<Props> = ({
    type = 'checkbox',
    checkedProps,
    todoId,
    ...rest
}) => {
    const { setTodos } = useTodosCTX();

    const swicthCopleate = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };
    return (
        <div className={cls('input-container')} {...rest}>
            {type === 'text' ? (
                <input className={cls('input-text')} type={'text'} />
            ) : (
                <div
                    className="input-compleate-wrap"
                    onClick={() => {
                        if (todoId !== undefined) {
                            swicthCopleate(todoId);
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
