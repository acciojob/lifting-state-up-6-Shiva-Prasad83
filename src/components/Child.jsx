import React from 'react';

function Child({todos,setTodos}){
  
    function completeTodo(id){
       
        for(let todo of todos){
            if(todo.id==id){
              todo.isComplete=true;
            }
        }
        let newTodos=[...todos];
        setTodos(newTodos);
    }

    return(
        <ul>
            {
                todos.map((todo)=>{
                    return <li>
                        {todo.todo}
                        {!todo.isComplete && <button onClick={()=>completeTodo(todo.id)}>Complete</button>}
                    </li>
                })
            }
        </ul>
    )
}

export default Child;