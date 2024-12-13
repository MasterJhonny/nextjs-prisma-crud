"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const TaskCard = ({ task }) => {
  const router = useRouter();

  const [date, setDate] = useState("");

  const handlerEdit = () => {
    console.log("Editing...");
    router.push("/edit/" + task.id);
  };

  const handlerDeleted = () => {
    console.log("Deleted!..." + task.id);
    const alertValue = confirm(
      `Estas seguro de eliminar la tarea "${task.title}"`
    );
    if (alertValue) {
      fetch(`/api/tasks/${task.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.delete) {
            router.refresh();
          }
        })
        .catch((error) => {
          console.log("🚀 ~ .then ~ error:", error);
        });
    }
  };

  useEffect(() => {
    const dateStr = new Date(task.createdAt).toLocaleDateString();
    setDate(dateStr);
  }, []);

  return (
    <div className="bg-slate-400 m-2 p-4 w-44 h-52 relative rounded-md shadow-sm shadow-slate-100">
      <h3 className="text-black font-bold">{task.title}</h3>
      <p className="text-black">{task.description}</p>
      <p className="text-black">{date}</p>
      <div className="absolute bottom-4 left-0 flex justify-center w-full">
        <button
          className="font-semibold py-2 px-3  bg-slate-500 hover:bg-slate-600 rounded-s-lg"
          onClick={handlerEdit}
        >
          Editar
        </button>
        <button
          onClick={handlerDeleted}
          className="font-semibold py-2 px-3  bg-red-400 hover:bg-red-500 rounded-e-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
