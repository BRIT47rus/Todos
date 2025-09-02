import { useTodosCTX } from '../App/hooks';
import { Title } from '../App/Title/Title';
import { Input } from '../features/components/Input/Input';
import { Todo } from './components/Todo/Todo';
import './Todos.css';
import cls from 'classnames';
export const Todos = () => {
    const { todos, addTodo } = useTodosCTX();

    return (
        <div className={cls('todos')}>
            <div className="todos__input-text">
                <Input type="text" onAdd={addTodo} />
            </div>
            {todos.length ? (
                todos.map(({ title, checked, id }) => (
                    <Todo key={id} title={title} checked={checked} id={id} />
                ))
            ) : (
                <div className="todos__empty">
                    <Title Element={'h2'} classNames="title-h2">
                        Cписок пуст
                    </Title>
                </div>
            )}
        </div>
    );
};
