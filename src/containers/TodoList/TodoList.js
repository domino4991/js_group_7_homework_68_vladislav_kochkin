import React, {useEffect} from 'react';
import './TodoList.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks} from "../../store/actions";
import TodoItems from "../../components/TodoItems/TodoItems";
import Form from "../../components/UI/Form/Form";

const TodoList = () => {
    const todo = useSelector(state => state.todo);
    const newTodo = useSelector(state => state.newTodo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    return (
        <section className="Todo-list">
            <h2>Todo-list</h2>
            <Form
                task={newTodo.task}
            />
            {todo && <TodoItems
                todoItems={todo}
            />
            }
        </section>
    );
};

export default TodoList;