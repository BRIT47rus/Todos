import { useTodosCTX } from '../../App/hooks';
import { Title } from '../../features/components/Title/Title';
import { Input } from '../../features/components/Input/Input';
import './Todos.css';
import { Info, Todo } from '../../features';

export type TStyleAnimation = 'in' | 'out' | 'enter';

export const Todos = () => {
    const { filteredTodos, addTodo } = useTodosCTX();

    return (
        <div className={'todos'}>
            <div className={'todos__input-text'}>
                <Input type="text" onAdd={addTodo} />
            </div>
            {filteredTodos.length ? (
                filteredTodos.map(({ id, title, checked }) => {
                    return (
                        <div key={id}>
                            <Todo title={title} checked={checked} id={id} />
                        </div>
                    );
                })
            ) : (
                <div className="todos__empty">
                    <Title Element={'h2'} classNames="title-h2">
                        The list is empty.
                    </Title>
                </div>
            )}
            <Info />
        </div>
    );
};
