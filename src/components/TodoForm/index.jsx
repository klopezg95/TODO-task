import React, {useState} from 'react'
import { TodoContext } from '../TodoContext/index';
import './TodoForm.css'

function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue,setNewTodoValue] = useState('');

    const onSubmit = (e) => { 
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onCancel = () => { 

        setOpenModal(false);
    }
    const onChange = (e) => { 
        setNewTodoValue(e.target.value)
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder='Lavar los platos'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>

                <button type='submit' className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>Cancel</button>
                <button type='submit' className='TodoForm-button TodoForm-button--add'>Add</button>
            </div>

        </form>

    )
}

export default TodoForm