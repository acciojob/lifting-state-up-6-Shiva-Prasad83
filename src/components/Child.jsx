import React from 'react';

function Child({todos,setTodos}){
  
    function completeTodo(id){
       
        for(let todo of todos){
            
              todo.isComplete=true;
            
        }
        let newTodos=[...todos];
        setTodos(newTodos);
    }

    return(
        <ul>
            {
                todos.map((todo)=>{
                    return <li key={todo.id}>
                        {todo.todo}
                        {!todo.isComplete && <button onClick={()=>completeTodo(todo.id)}>Complete</button>}
                    </li>
                })
            }
        </ul>
    )
}

export default Child;