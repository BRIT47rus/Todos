import { useState } from 'react';
import { useTodosCTX } from '../../../App/hooks';
import type { ActionFilter } from '../../../App/types';
import { Button } from '../Button/Button';
import './InfoFilter.css';

import classNames from 'classnames';
export const InfoFilter = () => {
    const { filterTodos } = useTodosCTX();
    const actions: ActionFilter[] = ['all', 'completed', 'active'];
    const [selected, setSelected] = useState<ActionFilter>('all');

    const onClickBTNFilter = (item: ActionFilter) => {
        setSelected(item);
        filterTodos(item);
    };

    return (
        <div className="info-filter">
            {actions.map((item, i) => {
                return (
                    <Button
                        key={i}
                        onClick={() => onClickBTNFilter(item)}
                        element={item}
                        active={selected}
                        className={classNames('info-filter__button', {
                            'info-filter__button-active': selected === item,
                        })}
                    />
                );
            })}
        </div>
    );
};
