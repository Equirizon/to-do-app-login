import Task from './Task';
export default function TaskList({ tasks, deleteTask }) {
  return (
    <>
      <div className="tasklist">
        {tasks.map((task, i) => (
          <Task label={task} key={i} deleteTask={deleteTask} />
        ))}
      </div>
    </>
  );
}
