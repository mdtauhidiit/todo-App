
import styles from './item.module.css'
const Item = ({data,todos,setTodos}) => {

  const handleDelete = (data) =>{
    console.log('delete was clicked',data)
    setTodos(todos.filter((i)=>i!==data))
  }

  const handleClick = (name) =>{
    const newArray= todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo)
    setTodos(newArray)
    console.log(newArray)
  }

  const completed=data.done?styles.completed:""

  return (
    <div className={styles.item}>
      <div className={styles.itemName}><span className={completed} onClick={()=>handleClick(data.name)}>{data.name}</span>
      <span><button className={styles.deleteButton} onClick={()=>handleDelete(data)}>X</button></span>
      </div>
      <hr className={styles.line}/>
    </div>
  )
}

export default Item
