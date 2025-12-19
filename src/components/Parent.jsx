import React from 'react';
import { useState } from 'react';
import Child from './Child';
function Parent(){
 
    const [todos,setTodos]=useState([
        {id:1,todo:"Learn React",isComplete:false},
        {id:2,todo:"Build a React App",isComplete:false},
        {id:3,todo:"Deploy the React App",isComplete:false}
    ]);

    return(
        <div>
            <Child todos={todos} setTodos={setTodos}/>
        </div>
    )
}

export default Parent;