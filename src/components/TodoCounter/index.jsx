import { useContext } from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'


function TodoCounter() {

    const {
        totalTodos,
        completedTodos,
    } = useContext(TodoContext);
    return (
        <>
        <h2 className="TodoCounter">
        <h1 className='title'>TASK MANAGER</h1>
            Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </h2>
        </>

    )
}

export default TodoCounter