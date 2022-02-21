import React, { createContext, useState } from 'react'
export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  // const initialState = JSON.parse(localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState([{title:"read a book",id:0},{title:"wash a car",id:1}])
  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }, [tasks])

  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title,id:tasks.length}])
  }

  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Clear tasks
  const clearList = () => {
    setTasks([])
  }

  return (
    <TaskListContext.Provider value={{tasks,addTask,clearList,removeTask}}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider;
