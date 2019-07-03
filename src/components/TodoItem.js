import React from "react";
import {useStoreActions} from "easy-peasy";

const TodoItem = ({ todo }) => {
    const toggle = useStoreActions(actions => actions.toggle);

    return (
        <div
            className="todo"
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
            <span onClick={() => toggle(todo.id)} style={{ cursor: "pointer" }}>{todo.title}</span>
            <button>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
    );
};

export default TodoItem;
