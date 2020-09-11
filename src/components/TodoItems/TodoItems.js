import React from 'react';
import './TodoItems.css';
import TodoItem from "./TodoItem/TodoItem";

const TodoItems = props => {
    return (
        <div className="Todo-items">
            <div className="container">
                {props.todoItems.map(item => <TodoItem
                    key={item.id}
                    id={item.id}
                    task={item.task}
                />)}
            </div>
        </div>
    );
};

export default TodoItems;