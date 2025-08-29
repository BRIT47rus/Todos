import { Input } from '../features/components/Input/Input';
import { Todo } from './components/Todo/Todo';
import './Todos.css';
import cls from 'classnames';
export const Todos = () => {
    return (
        <div className={cls('todos')}>
            <div className="todos__input-text">
                <Input type="text" />
            </div>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
        </div>
    );
};
