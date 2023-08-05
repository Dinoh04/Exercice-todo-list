import React from 'react'
import './App.css'
import { useState } from 'react';

export default function App(){
  const [newItem,setNewItem] = useState("");
  const [todos,setTodos] = useState([]);

  function handlerSubmit(e){
    e.preventDefault();
    setTodos(currentTodos =>{
      return[
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
  }

  function toggleTodo(id,completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  
  function deleTodo(id){
    setTodos(currentTodos =>{
      return  currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
    <form onSubmit={handlerSubmit}>
     <div className="form-row">
    <label htmlFor="item">New item</label>
    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="nom" name="nom"/>
    <button className="btn">Add</button>
</div>
    
    </form>
    <h1 className="header">Todo List</h1>
    
    {todos.map(todo =>{
      return <li>
         <label htmlFor="item-name">
       
        {todo.title}
    </label>
    <button onClick={()=>deleTodo(todo.id)} className="btn-2">Delete</button>
    
      </li>
        
    })}
   
    </>
  )
}