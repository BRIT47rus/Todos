import { type FC, type HTMLAttributes, type ReactNode } from 'react';
import './Button.css';

import type { ActionFilter } from '../../../App/types';
import classNames from 'classnames';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    element: ReactNode;
    active?: ActionFilter;
    onClick: () => void;
}
export const Button: FC<Props> = ({
    element,
    onClick,

    className,
    ...rest
}) => {
    return (
        <div className={classNames('button', className)} onClick={onClick}>
            <button {...rest}></button>
            {element}
        </div>
    );
};
