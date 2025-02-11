import "./App.css";
import TaskCard from "./components/TaskCard";
import { Task, tasks } from "./utils/data-tasks";

function App() {

  
  return (
    <>
      {tasks.map((task)=> (<TaskCard task={task} />))}
    </>
  );
}

export default App;
