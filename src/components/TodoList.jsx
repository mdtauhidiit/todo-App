import Item from './Item'
import styles from './todolist.module.css'

const TodoList = ({todos,setTodos}) => {
  return (
    <div className={styles.list}>
      {
        todos?todos.map((data)=> <Item data={data} setTodos={setTodos} todos={todos} key={data.name}/>
        ):""
      }
    </div>
  )
}

export default TodoList
