import './TodoItem.css';
import CompleteIcon from '../TodoIcon/CompleteIcon.jsx'
import DeleteIcon from '../TodoIcon/DeleteIcon.jsx'



function TodoItem(props) {
    
    return (
        <li className={`TodoItem ${props.completed && `TodoItem-complete`}`}>
            <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>

            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <DeleteIcon onDelete={props.onDelete}/>
            
        </li>
    );
}

export default TodoItem;