// import React from "react";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const  App = () => {
  
  const [showAddTask , setShowAddTasak] = useState(false)
  
  const [tasks , setTasks] = useState([])

  useEffect(() => {
    const fetchTasksFromServer = async() => {
      const res = await fetch('http://127.0.0.1:5000/tasks')
      const data = await res.json()

      console.log(data)
    }

    fetchTasksFromServer()
  },[])

  // Adding task to task list
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleRemainder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? {...task, remainder:!task.remainder} : task))
  }
  
  return (
    <div className="container">
      {/* <pre>{JSON.stringify(tasks)}</pre> */}
      <Header onAdd = {() => setShowAddTasak(!showAddTask)} change = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleRemainder} onDelete = {deleteTask}/> : <h3 style={{color:'red'}}>No Tasks</h3> } 
    </div>
  );
}

//BY using class
// class App extends React.Component{
//   render(){
//     return <h1>This is from class</h1>
//   }
// }

export default App;


