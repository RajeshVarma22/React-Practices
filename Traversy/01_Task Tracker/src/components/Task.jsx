
const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.remainder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.text} <span onClick={ () => onDelete(task.id)} className='fa fa-times-circle fa-lg' style={{color : 'red',backgroundColor:'white' , cursor : 'pointer'}}></span>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task