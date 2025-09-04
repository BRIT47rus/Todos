import { useTodosCTX } from '../../App/hooks';
import { Title } from '../../features/components/Title/Title';
import { Input } from '../../features/components/Input/Input';

import './Todos.css';
import { Info, Todo } from '../../features';

export const Todos = () => {
    const { filteredTodos, addTodo } = useTodosCTX();

    return (
        <div className={'todos'}>
            <div className={'todos__input-text'}>
                <Input type="text" onAdd={addTodo} />
            </div>
            {filteredTodos.length ? (
                filteredTodos.map(({ title, checked, id }) => (
                    <Todo key={id} title={title} checked={checked} id={id} />
                ))
            ) : (
                <div className="todos__empty">
                    <Title Element={'h2'} classNames="title-h2">
                        Cписок пуст
                    </Title>
                </div>
            )}
            <Info />
        </div>
    );
};
