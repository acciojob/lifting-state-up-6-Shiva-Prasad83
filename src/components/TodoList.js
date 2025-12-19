import React from 'react';

function TodoList({todos,handleComplete}){

    return(
        <ul>
          {
            todos.map((todo)=>{
                return (
                    <li key={todo.id}>{todo.todo}
                     {!todo.isComplete&&<button onClick={()=>handleComplete(todo.id)}>Complete</button>}
                    </li>
                )
            })
          }
        </ul>
    )
}

export default TodoList;