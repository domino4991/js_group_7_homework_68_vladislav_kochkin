import React from 'react';
import './TodoItems.css';

const TodoItems = props => {
    return (
        <div className="Todo-items">
            {props.children}
        </div>
    );
};

export default TodoItems;