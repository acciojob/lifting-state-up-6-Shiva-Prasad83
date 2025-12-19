
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Child from "./Child";
const App = () => {
   const [todos,setTodos]=useState([
        {id:1,todo:"Learn React",isComplete:false},
        {id:2,todo:"Build a React App",isComplete:false},
        {id:3,todo:"Deploy the React App",isComplete:false}
    ]);
  
     function handleComplete(id){
        let updatedTodos=todos.map((todo)=>{

          return {...todo,isComplete:true};
        });

        setTodos(updatedTodos);
     }

    return(
        <div>
            <Child todos={todos} handleComplete={handleComplete}/>
        </div>
  )
}

export default App
