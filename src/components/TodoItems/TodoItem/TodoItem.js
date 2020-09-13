import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
    return (
        <div className={props.checked ? 'Todo-item checked' : 'Todo-item'}>
            <div className="Todo-item__task-box">
                <input
                    type="checkbox"
                    className="Todo-item__done-task"
                    name="done"
                    id={props.id}
                    checked={props.checked}
                    onChange={props.checkedSwitch}
                />
                <label htmlFor={props.id} className="Todo-item__task">{props.task}</label>
            </div>
            <button className="Todo-item__delete" onClick={props.clicked}>Delete</button>
        </div>
    );
};

export default TodoItem;