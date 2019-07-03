import React, { Fragment, useEffect } from "react";
import TodoItem from "./TodoItem";
import {useStoreActions, useStoreState} from "easy-peasy";

const Todos = () => {
    const todos = useStoreState(state => state.todos);
    const fetchTodos = useStoreActions(actions => actions.fetchTodos);

    // add [] so it stop running everytime the component gets updates. We only do it for the first time.
    // minic componentDidMount
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <Fragment>
            <h1>Todos</h1>
            <p>Click todo item to toggle completed</p>
            <hr />
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </Fragment>
    );
};

export default Todos;
