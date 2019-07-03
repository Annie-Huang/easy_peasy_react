import React, { useState } from "react";
import {useStoreActions} from "easy-peasy";

const AddTodo = () => {
    const [title, setTitle] = useState("");

    const add = useStoreActions(actions => actions.add);

    const handleSubmit = (event) => {
        event.preventDefault();
        add({
            title,
            completed: false
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Add todo title..."
                />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    );
};

export default AddTodo;
