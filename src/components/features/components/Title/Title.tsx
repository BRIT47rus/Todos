import type { FC, ReactNode } from 'react';
import type { TTitleList } from '../types';
import './Title.css';
import cls from 'classnames';
interface Props {
    children: ReactNode;
    classNames: string;
    Element?: TTitleList;
}
export const Title: FC<Props> = ({
    children,
    Element = 'h1',
    classNames,
    ...rest
}) => {
    return (
        <Element className={cls(classNames)} {...rest}>
            {children}
        </Element>
    );
};
