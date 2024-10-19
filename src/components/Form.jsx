import { useState } from "react";
import styles from './form.module.css'

const Form = ({todos,setTodos}) => {

    const [todo,setTodo]=useState({name:"",done:false});
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:"",done:false})
    }

  return (
    <div>
       <form className={styles.todoform} onSubmit={handleSubmit}>
        <input className={styles.modernInput} onChange={(e)=>setTodo({name:e.target.value,done:false})} type="text" value={todo.name} placeholder="Enter todo item"/>
        <button className={styles.modernButton} type="submit">Add</button>
      </form>
    </div>
  )
}

export default Form
