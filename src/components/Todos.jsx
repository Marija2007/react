import React from 'react';

export const Todos = ({ listOfTodos, deleteTodo, markTodoAsDone, editTodo, startEdit, handleEditChange, saveEdit, cancelEdit }) => {

    return (
        <div>
          { listOfTodos.length > 0 ? 
          <table border={1}>
                <thead> 
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfTodos.map(todo=>{
                        const isEditing = editTodo.id === todo.id; 
                        return(
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editTodo.text}
                                            onChange={(e) => handleEditChange(e.target.value)}
                                        />
                                    ) : (
                                        todo.text
                                    )}
                                </td>
                                <td>
                                    <input
                                    type={"checkbox"}
                                    value={todo.completed}
                                    checked={todo.completed}
                                    onChange={()=>{markTodoAsDone(todo)}}
                                    >
                                    </input>
                                </td>
                                <td>
                                    {isEditing ? (
                                        <>
                                            <button onClick={saveEdit}>Save</button>
                                            <button onClick={cancelEdit}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => startEdit(todo)}>Edit</button>
                                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <h2>No items added in array yet!!!</h2>}
        </div>
    )
}