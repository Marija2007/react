import React from 'react';

export const Todos = ({ listOfTodos, markTodoAsDone, deleteTodo }) => {
    return (
        <ol>
            {listOfTodos.map(todo => {
                return (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input type="checkbox"
                            checked={todo.done}
                            onChange={() => { markTodoAsDone(todo) }}
                        />
                        <button onClick={() => { deleteTodo(todo.id) }}>Delete</button>
                    </li>
                )
            })}
        </ol>
    )
}