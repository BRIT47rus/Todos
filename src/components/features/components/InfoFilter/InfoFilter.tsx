import { useTodosCTX } from '../../../App/hooks';
import type { ActionFilter } from '../../../App/types';
import { Button } from '../Button/Button';
import './InfoFilter.css';
export const InfoFilter = () => {
    const { filterTodos } = useTodosCTX();
    const actions: ActionFilter[] = ['all', 'completed', 'active'];
    return (
        <div className="info-filter">
            {actions.map((item, i) => {
                return (
                    <Button
                        key={i}
                        onClick={() => filterTodos(item)}
                        element={item}
                    />
                );
            })}
        </div>
    );
};
