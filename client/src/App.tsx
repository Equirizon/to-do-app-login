import './App.css';
import AddTask from './components/AddTask.tsx';
import TaskList from './components/TaskList.tsx';
import Title from './components/Title.tsx';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="app">
      <Title />
      <AddTask setTask={setTasks}/>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
