import React, { useState } from "react";

export default function ListItems(){
    const [listElement, setListElement] = useState('');
    const [todoItems, setTodoItems] = useState([]);

    const handleAddTask = () => {
       const temp = [...todoItems,listElement];
        setTodoItems(temp);
    }

    const handleDeleteTask = (index) => {
        const temp = [...todoItems];
        temp.splice(index,1);
        setTodoItems(temp);
     }

    return(
    <React.Fragment>
    <div>
    <input type="text" value={listElement} onChange={(e)=> setListElement(e.target.value)}></input>
    <button onClick={handleAddTask}>Add Task</button>
    </div>
    {todoItems.map((item,index)=> (
        <div key={index}>
        <div>{item}</div>
        <button onClick={()=>handleDeleteTask(index)}>Remove Task</button>
        </div>
        ))}
    </React.Fragment>
    )
};