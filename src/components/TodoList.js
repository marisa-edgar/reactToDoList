import React from 'react';

function TodoList({ todos, updateTodos }) {

    const removeTask = (index) => {
        const updatedList = todos.filter((task, taskIndex) => {
            return taskIndex !== index;
        });
        updateTodos(updatedList);
    }

    const markComplete = (id) => {
        return todos.map((item, index) => {
            if (id !== index) return item;
            return { ...item, complete: !(item.complete) };
        });
    }
    return (

        <div className="todo-list">
            {todos.map((todo, index) => (
                <div key={index}>
                    <div
                        className={`todo ${todo.complete ? "taskDone" : ""}`}
                        onClick={() => setTodos(markComplete(index))}>
                        Item {index + 1}: {todo.task}
                    </div>
                    <div><button className="button" onClick={() => removeTask(index)}>Delete</button>  </div>

                </div>

            ))}
        </div>
    );
};

export default TodoList;