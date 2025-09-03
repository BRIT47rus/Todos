import { useTodosCTX } from '../../App/hooks';
import { Button } from '../components/Button/Button';
import { InfoFilter } from '../components/InfoFilter/InfoFilter';
import './Info.css';
export const Info = () => {
    const { todos, deleteTodoS } = useTodosCTX();

    const countItems = todos.filter((item) => item.checked).length;

    return (
        <div className="info-container">
            <div>{countItems} items left</div>
            <InfoFilter />
            <Button onClick={deleteTodoS} element="Удалить завершенные" />
        </div>
    );
};
