import Task from './Task';
export default function TaskList({ tasks }) {
  return (
    <>
      <div className="tasklist">
        {tasks.map((task) => (
          <Task label={task} />
        ))}
      </div>
    </>
  );
}
