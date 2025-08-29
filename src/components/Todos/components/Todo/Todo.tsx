import { Input } from '../../../features/components/Input/Input';
import './Todo.css';
export const Todo = () => {
    return (
        <div className="todo">
            <Input />
            <span>Тексты</span>
        </div>
    );
};
