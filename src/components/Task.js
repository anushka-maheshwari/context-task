import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
const Task = ({ task }) => {
    const { removeTask} = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>{'  '}
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          Delete
        </button>
    </li>
  )
}

export default Task