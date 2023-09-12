import React, { useState } from 'react';
import TodoList from '../../Components/TodoList';
import TodoForm from '../../Components/TodoForm';


ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Study',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, index) => {
        console.log(todo, index);
        const newTodoList = [...todoList];
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        newTodoList[index] = newTodo;
        setTodoList(newTodoList);
    }

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit', values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new'
        }
        const newTodoList = [...todoList, newTodo]
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>TodoList</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default ListPage;