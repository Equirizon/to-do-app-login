import './App.css';
import AddTask from './components/AddTask.tsx';
import TaskList from './components/TaskList.tsx';
import Title from './components/Title.tsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="app">
      <Title />
      {/* prop drilling */}
      <AddTask value={value} setValue={setValue} setTasks={setTasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
