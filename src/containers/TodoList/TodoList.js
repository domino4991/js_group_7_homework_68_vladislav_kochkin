import React, {useEffect} from 'react';
import './TodoList.css';
import {useDispatch, useSelector} from "react-redux";
import {addNewTask, changedTaskForm, deleteTask, fetchTasks, saveDoneTask} from "../../store/actions";
import TodoItems from "../../components/TodoItems/TodoItems";
import Form from "../../components/UI/Form/Form";
import TodoItem from "../../components/TodoItems/TodoItem/TodoItem";

const TodoList = () => {
    const todo = useSelector(state => state.todo);
    const newTask = useSelector(state => state.newTask);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <section className="Todo-list">
            <h2>Todo-list</h2>
            <Form
                task={newTask}
                changed={e => dispatch(changedTaskForm(e))}
                submit={e => dispatch(addNewTask(newTask, e))}
            />
            {todo !== null ?
            <TodoItems>
                {todo.map(item => <TodoItem
                    key={item.id}
                    id={item.id}
                    task={item.task}
                    checked={item.done}
                    checkedSwitch={() => dispatch(saveDoneTask(item.id, todo))}
                    clicked={() => dispatch(deleteTask(item.id))}
                />)}
            </TodoItems> : <p>Нет задач</p>
            }
        </section>
    );
};

export default TodoList;