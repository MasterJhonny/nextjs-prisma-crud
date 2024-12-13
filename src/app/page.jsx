import TaskCard from "@/components/TaskCard";

const loadTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const data = res.json();
  return data;
};

const HomePage = async () => {
  const tasks = await loadTasks();
  return (
    <div className="mt-14 z-0">
      <h2 className="text-center font-semibold text-lg py-4 w-full">Tasks</h2>
      <div className="flex flex-wrap justify-center">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
