import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
    return (
        <div className="Todo-item">
            <input
                type="checkbox"
                className="Todo-item__done-task"
                name="done-task"
                id={props.id}
                checked={props.checked}
                onChange={props.checkedSwitch}
            />
            <p className="Todo-item__task">{props.task}</p>
            <button className="Todo-item__delete" onClick={props.clicked}>Delete</button>
        </div>
    );
};

export default TodoItem;