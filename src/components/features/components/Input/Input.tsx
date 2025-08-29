import { useState, type FC, type HTMLAttributes } from 'react';
import './Input.css';
import cls from 'classnames';
import { IconCompleate } from '../IconCompleate/IconCompleate';
interface Props extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'checkbox';
}

export const Input: FC<Props> = ({ type = 'checkbox', ...rest }) => {
    const [checked, setCheked] = useState(true);

    return (
        <div className={cls('input-container')} {...rest}>
            {type === 'text' ? (
                <input className={cls('input-text')} type={'text'} />
            ) : (
                <div>
                    <input
                        checked={checked}
                        className={cls('input-checkbox')}
                        type={'checkbox'}
                    />
                    <IconCompleate
                        checked={checked}
                        className="input-checkbox__icon"
                    />
                </div>
            )}
        </div>
    );
};
