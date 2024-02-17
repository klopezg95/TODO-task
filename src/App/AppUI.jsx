import React from 'react'
import TodoCounter from '../components/TodoCounter'
import TodoSearch from '../components/TodoSearch'
import TodoList from '../components/TodoList'
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';
import TodosLoading from '../components/Todosloading'
import TodosError from '../components/TodosError'
import EmptyTodos from '../components/EmptyTodos'
import { TodoContext } from '../components/TodoContext';
import Modal from '../components/Modal'
import TodoForm from '../components/TodoForm'


function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        onDelete,
        onComplete,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    return (<>

        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {loading && (
                <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                </>)}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map((todo, i) => (
                <TodoItem
                    onComplete={() => onComplete(todo.text)}
                    onDelete={() => onDelete(todo.text)}
                    key={i}
                    text={todo.text}
                    completed={todo.completed}
                />
            ))}
        </TodoList>


        <CreateTodoButton setOpenModal={setOpenModal}/>
        {openModal && (<Modal> <TodoForm/></Modal>)}
    </>
    )

}
export default AppUI