import type { FC, HTMLAttributes, ReactNode } from 'react';
import './Button.css';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    element: ReactNode;
}
export const Button: FC<Props> = ({ element, ...rest }) => {
    return (
        <div className="button">
            <button {...rest}></button>
            {element}
        </div>
    );
};
