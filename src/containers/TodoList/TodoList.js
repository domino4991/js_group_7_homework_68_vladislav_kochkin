import React, {useEffect} from 'react';
import './TodoList.css';
import {useDispatch, useSelector} from "react-redux";
import {addNewTask, changedTaskForm, closeModal, deleteTask, fetchTasks, saveDoneTask} from "../../store/actions";
import TodoItems from "../../components/TodoItems/TodoItems";
import Form from "../../components/UI/Form/Form";
import TodoItem from "../../components/TodoItems/TodoItem/TodoItem";
import {Sugar} from "react-preloaders";
import Modal from "../../components/UI/Modal/Modal";

const TodoList = () => {
    const todo = useSelector(state => state.todo);
    const newTask = useSelector(state => state.newTask);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <section className="Todo-list">
            {error &&
            <Modal
                show={error}
                closed={() => dispatch(closeModal())}
            >
                <p>{error.message}</p>
            </Modal>}
            <Sugar customLoading={loading}/>
            <h2 className="Todo-list__title">TO DO list</h2>
            <Form
                task={newTask}
                changed={e => dispatch(changedTaskForm(e))}
                submit={e => dispatch(addNewTask(newTask, e))}
            />
            {todo !== null ?
            <TodoItems>
                {
                    loading &&
                    <div className="preloader">
                        <Sugar />
                    </div>
                }
                {todo.map(item => <TodoItem
                    key={item.id}
                    id={item.id}
                    task={item.task}
                    checked={item.done}
                    checkedSwitch={() => dispatch(saveDoneTask(item.id, todo))}
                    clicked={() => dispatch(deleteTask(item.id))}
                />).reverse()}
            </TodoItems> : <p style={{textAlign: 'center'}}>Нет задач</p>
            }
        </section>
    );
};

export default TodoList;