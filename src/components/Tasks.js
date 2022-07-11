import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle, onDetails}) => { 
    return (
        <>
            {tasks.map((task, index)=>(
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} onDetails={onDetails}/>
            ))}
        </>
    )
}

export default Tasks