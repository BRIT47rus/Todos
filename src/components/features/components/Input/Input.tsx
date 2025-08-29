import type { FC, HTMLAttributes } from 'react';
import './Input.css';
import cls from 'classnames';
interface Props extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'checkbox';
}

export const Input: FC<Props> = ({ type = 'checkbox', ...rest }) => {
    const style = type === 'checkbox' ? 'input-checkbox' : 'input-text';
    return (
        <div className={cls('input-container')} {...rest}>
            <input className={cls(style)} type={type} />
        </div>
    );
};
