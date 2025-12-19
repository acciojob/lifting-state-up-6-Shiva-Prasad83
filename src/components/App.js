
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import TodoList from "./TodoList";
const App = () => {
   const [todos,setTodos]=useState([
        {id:1,todo:"Learn React",isComplete:false},
        {id:2,todo:"Build a React App",isComplete:false},
        {id:3,todo:"Deploy the React App",isComplete:false}
    ]);
  
     function handleComplete(id){
        let updatedTodos=todos.map((todo)=>{
               
          return todo.id==id?{...todo,isComplete:true}:todo;
        });

        setTodos(updatedTodos);
     }

    return(
        <div>
            <TodoList todos={todos} handleComplete={handleComplete}/>
        </div>
  )
}

export default App
