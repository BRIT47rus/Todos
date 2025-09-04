import { useTodosCTX } from '../../App/hooks';
import { Title } from '../../features/components/Title/Title';
import { Input } from '../../features/components/Input/Input';
import './Todos.css';
import { Info, Todo } from '../../features';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useRef } from 'react';

export const Todos = () => {
    const { filteredTodos, addTodo } = useTodosCTX();

    const nodeRefs = React.useRef<{
        [key: string]: React.RefObject<HTMLDivElement>;
    }>({});
    filteredTodos.forEach(({ id }) => {
        if (!nodeRefs.current[id]) {
            //@ts-ignore
            nodeRefs.current[id] = React.createRef<HTMLDivElement>(); // createRef для более строгого типа
        }
    });
    return (
        <div className={'todos'}>
            <div className={'todos__input-text'}>
                <Input type="text" onAdd={addTodo} />
            </div>
            <TransitionGroup component="div" className="todos__list">
                {filteredTodos.length ? (
                    filteredTodos.map(({ title, checked, id }) => {
                        return (
                            <CSSTransition
                                key={id}
                                nodeRef={nodeRefs.current[id]}
                                timeout={300}
                                classNames="todo"
                                onExited={() => {
                                    console.log('');
                                }}
                            >
                                <Todo
                                    ref={nodeRefs.current[id]}
                                    title={title}
                                    checked={checked}
                                    id={id}
                                />
                            </CSSTransition>
                        );
                    })
                ) : (
                    <div className="todos__empty">
                        <Title Element={'h2'} classNames="title-h2">
                            Cписок пуст
                        </Title>
                    </div>
                )}
                <Info />
            </TransitionGroup>
        </div>
    );
};
