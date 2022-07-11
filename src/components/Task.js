import { FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Task = ({ task, onDelete, onToggle, onDetails}) => {
    return (
        <div className={`task ${task.reminder? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
            <Link onClick={() => onDetails(task.id)} to='/details'>See Details</Link>
        </div>
    )
}

export default Task
