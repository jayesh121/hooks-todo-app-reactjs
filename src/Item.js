import React from 'react'
import './App.css';
 const Item =  ( { todo , index,Handlechange,handleclick } ) => {
    return (
        <div>
        <span 
        className={todo.isCompleted ?'hello':''}
        onClick={()=> handleclick(index)}
        >    {todo.text}  </span>
            <span onClick={ ()=> Handlechange(index)}>X</span>
        </div>
    )
}
export default Item 