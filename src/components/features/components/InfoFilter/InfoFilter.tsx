import { useTodosCTX } from '../../../App/hooks';
import { Button } from '../Button/Button';

export const InfoFilter = () => {
    const { todos, filterTodos } = useTodosCTX();

    return (
        <div>
            <Button onClick={() => filterTodos('all', todos)} element="All" />
            <Button
                onClick={() => filterTodos('completed')}
                element="Completed"
            />
            <Button onClick={() => filterTodos('active')} element="Active" />
        </div>
    );
};
