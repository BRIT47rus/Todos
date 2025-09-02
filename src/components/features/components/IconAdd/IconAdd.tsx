import classNames from 'classnames';
import type { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
    isValue: boolean;
}

export const IconAdd = ({ isValue }: Props) => {
    return (
        <div
            className={classNames('todos__icon-add', {
                'todos__icon-add-active': isValue,
            })}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path fill="green" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" />
            </svg>
        </div>
    );
};
