import type { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
    checked?: boolean;
    className: string;
}

export const IconCompleate = ({ checked, className }: Props) => {
    return (
        <div className={className}>
            {!checked ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 2048 2048"
                >
                    <path
                        fill="green"
                        d="m1453 941l-621 621l-365-365l90-90l275 275l531-531z"
                    />
                </svg>
            ) : (
                ''
            )}
        </div>
    );
};
