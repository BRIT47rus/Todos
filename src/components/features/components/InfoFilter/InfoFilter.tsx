import { useTodosCTX } from '../../../App/hooks';
import { Button } from '../Button/Button';
import './InfoFilter.css';
export const InfoFilter = () => {
    const { todos, filterTodos } = useTodosCTX();

    return (
        <div className="info-filter">
            <Button onClick={() => filterTodos('all', todos)} element="All" />
            <Button
                onClick={() => filterTodos('completed')}
                element="Completed"
            />
            <Button onClick={() => filterTodos('active')} element="Active" />
        </div>
    );
};
