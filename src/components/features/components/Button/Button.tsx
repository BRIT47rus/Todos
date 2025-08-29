import type { FC, HTMLAttributes, ReactNode } from 'react';
import './Button.css';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    element: ReactNode;
}
export const Button: FC<Props> = ({ element }) => {
    return (
        <div className="button">
            <button></button>
            {element}
        </div>
    );
};
