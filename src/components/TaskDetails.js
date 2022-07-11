import {Link} from 'react-router-dom'

export const TaskDetails = ({task}) => {
    return(
        <div>
            <p>Description: {task.text}</p>
            <p>Schedule: {task.day}</p>
            <p>Reminder: {task.reminder? 'On' : 'Off'}</p>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default TaskDetails