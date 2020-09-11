import React from 'react';
import './Form.css';

const Form = props => {
    return (
        <form className="Form">
            <input
                className="Form__task-txt"
                name="task"
                value={props.task}
                onChange={props.changed}
                placeholder="Add new task..."
            />
            <button className="Form__add-task-btn" type="submit">Add</button>
        </form>
    );
};

export default Form;