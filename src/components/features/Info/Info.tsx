import { useTodosCTX } from '../../App/hooks';
import { InfoFilter } from '../components/InfoFilter/InfoFilter';

export const Info = () => {
    const { todos } = useTodosCTX();

    const countItems = todos.filter((item) => item.checked).length;

    return (
        <div>
            <div>{countItems} items left</div>
            <InfoFilter />
        </div>
    );
};
