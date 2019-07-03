import React, { Fragment } from "react";
import TodoItem from "./TodoItem";
import {useStoreState} from "easy-peasy";

const Todos = () => {
    const todos = useStoreState(state => state.todos);
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
