import { Button } from '../../../features/components/Button/Button';
import { IconDelete } from '../../../features/components/IconDelete/IconDelete';
import { Input } from '../../../features/components/Input/Input';
import './Todo.css';
export const Todo = () => {
    return (
        <div className="todo">
            <Input />
            <span>Тексты</span>

            <div className="todo__button">
                <Button element={<IconDelete />} />
            </div>
        </div>
    );
};
