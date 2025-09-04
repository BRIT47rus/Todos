import { type FC, type HTMLAttributes, type ReactNode } from 'react';
import './Button.css';
import classNames from 'classnames';
import type { ActionFilter } from '../../../App/types';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    element: ReactNode;
    active?: ActionFilter;
    onClick: () => void;
}
export const Button: FC<Props> = ({ element, onClick, active, ...rest }) => {
    return (
        <div
            className={classNames('button', {
                'info-filter__button-active': active === element,
            })}
            onClick={onClick}
        >
            <button {...rest}></button>
            {element}
        </div>
    );
};
