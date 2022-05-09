import React, { useState } from 'react';


function TodoForm({ addTodo }) {
    const [userInput, setUserInput] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        if (!userInput) return;
        addTodo({ complete: false, task: userInput, });
        setUserInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                placeholder="New Task"
                type="text"
                className="input"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
            />
        </form>
    );
};
export default TodoForm;