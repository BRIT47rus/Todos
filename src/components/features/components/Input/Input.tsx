import {
    useCallback,
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
    const { toogleCompleate } = useTodosCTX();

    const handleClickAdd = useCallback(() => {
        const text = value.trim();
        if (text) {
            onAdd(text);
            setValue('');
        }
    }, [onAdd, value]);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        const handleKeyDown = ({ key }: KeyboardEvent) => {
            if (key === 'Enter') {
                handleClickAdd();
                setValue('');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClickAdd]);

    return (
        <div className={cls('input-container')} {...rest}>
            {type === 'text' ? (
                <>
                    <Button
                        className="todos__input-text-add"
                        element={
                            <IconAdd
                                className="todos__icon-add"
                                isValue={value.trim() ? true : false}
                            />
                        }
                        onClick={handleClickAdd}
                    />
                    <input
                        className={cls('input-text')}
                        type={'text'}
                        value={value}
                        onChange={onChange}
                        maxLength={80}
                        placeholder="Add new todo"
                    />
                </>
            ) : (
                <div
                    className="input-compleate-wrap"
                    onClick={() => {
                        if (todoId !== undefined) {
                            toogleCompleate(todoId);
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
