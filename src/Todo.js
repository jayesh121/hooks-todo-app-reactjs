import React, { useState } from 'react'
import Item from "./Item.js"
import Input from './Input.js'
import Button from '@material-ui/core/Button';

export default function Todo() {

    const intial = [
        {
            text: 'read b',
            isCompleted: true

        },
        {
            text: 'read b',
            isCompleted: true

        },
        {
            text: 'read b',
            isCompleted: true

        }
    ]

    const [todos, setTodo] = useState(intial)
   


    const addTodo = (text) => {
        const newTodos=[...todos,{text:text,isCompleted:false}];
        setTodo(newTodos)
        
    }
    const Handlechange = (index) =>{
        const newTodos=[...todos]
        newTodos.splice(index,1)
        setTodo(newTodos)
    }
const handleclick = (index) =>{
    const newTodos=[...todos]

    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setTodo(newTodos)
}

    return (
        <div className="todo-container">
            <h2 className="main-heading"> todo app </h2>
            <div>
            <Input addTodo= {addTodo} />
            
                {  todos.length ? (
                    todos.map((todo, index) =>(
                        <Item
                        key={`${ Item.text }-${ index }`}
                         todo={todo}
                         index={index}
                         Handlechange={Handlechange }
                         handleclick={handleclick}
                        />
                        
                    ))
                ): ''}
                {todos.text}
            </div>
           
      
    

        </div>
            )
}
