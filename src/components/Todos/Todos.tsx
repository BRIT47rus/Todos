import { useTodosCTX } from '../App/hooks';
import { Button } from '../features/components/Button/Button';
import { IconAdd } from '../features/components/IconAdd/IconAdd';
import { Input } from '../features/components/Input/Input';
import { Todo } from './components/Todo/Todo';
import './Todos.css';
import cls from 'classnames';
export const Todos = () => {
    const { todos } = useTodosCTX();

    return (
        <div className={cls('todos')}>
            <div className="todos__input-text">
                <Button
                    className="todos__input-text-add"
                    element={<IconAdd />}
                />
                <Input type="text" />
            </div>
            {todos.map(({ title, checked, id }) => (
                <Todo key={id} title={title} checked={checked} id={id} />
            ))}
        </div>
    );
};
