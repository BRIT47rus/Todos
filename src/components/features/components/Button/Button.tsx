import type { FC, HTMLAttributes, ReactNode } from 'react';
import './Button.css';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    element: ReactNode;
    onClick: () => void;
}
export const Button: FC<Props> = ({ element, onClick, ...rest }) => {
    return (
        <div className="button" onClick={onClick}>
            <button {...rest}></button>
            {element}
        </div>
    );
};
