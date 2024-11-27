import "./App.css";
import TaskCard from "./components/TaskCard";
import { Task } from "./data-tasks";

function App() {
  const task: Task = {
    title: "Do Market Research",
    id: "Bus 1",
    points: 5,
  };
  return (
    <>
      <TaskCard task={task} />
      {/* <TaskCard title="Competitor Analysis" id="Bus 2" points={5} />
      <TaskCard title="Product Researcher" id="Bus 3" points={5} />
      <TaskCard title="Do Market Research" id="Bus 4" points={5} /> */}
    </>
  );
}

export default App;
