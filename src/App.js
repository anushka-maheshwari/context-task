import TaskListContextProvider from "./context/TaskListContext";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <div className="App">
     <TaskListContextProvider>
       <Header/>
       <TaskForm/>
       <TaskList/>
     </TaskListContextProvider>
    </div>
  );
}

export default App;
