import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, toggleReminder }) => {

  const getDate = (task) => {
    const d = new Date(task.dayTime)
    if (d.toString() !== 'Invalid Date') {
      let time = d.toLocaleTimeString('en', { hour12: false, hour: '2-digit', minute: '2-digit' });
      let date = d.toLocaleDateString('en', { day: 'numeric', month: 'long' })
      return `${date}, ${time}`
    }
    else {
      return task.dayTime;
    }
  }

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
      <h3>
        {task.text}
        <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer' }} />
      </h3>
      <p>{getDate(task)}</p>
    </div>
  )
}

export default Task