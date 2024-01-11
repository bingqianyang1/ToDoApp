import React from 'react'
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, changeStatus, deleteToDo, moveTop, moveDown }) => {
    return (
        <div>
            {todos.map(todo => (
                <ToDoItem key={todo.id} id={todo.id} content={todo.content} changeStatus={changeStatus}
                    isCompleted={todo.isCompleted}
                    deleteToDo={deleteToDo}
                    moveTop={moveTop}
                    moveDown={moveDown}
                />
            ))}


        </div>
    )
}

export default ToDoList
