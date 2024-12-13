"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

const NewPage = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (title != "") {
      try {
        if (params.id) {
          const res = await fetch(`/api/tasks/${params.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
            }),
          });
          const data = await res.json();
          console.log("🚀 ~ updated ~ data:", data);
        } else {
          const res = await fetch("/api/tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
            }),
          });
          const data = await res.json();
          console.log("🚀 ~ onSubmit ~ data:", data);
        }
        router.push("/");
      } catch (error) {
        console.log("🚀 ~ onSubmit ~ error:", error);
      }
    }
  };

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
      <h2 className="text-center font-semibold text-lg mb-4 w-full">
        {params.id ? "Modificar la tarea" : "Registra la nueva tarea"}
      </h2>
      <form
        className="bg-slate-700 p-4 w-1/4 min-w-48 flex flex-col rounded-md"
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="text-xs pb-1">
          Titulo
        </label>
        <input
          type="text"
          id="title"
          placeholder="Titulo"
          autoFocus
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border-gray-400 p-2 mb-4 w-full rounded-md text-black"
        />
        <label htmlFor="title" className="text-xs pb-1">
          Descripción
        </label>
        <textarea
          rows="3"
          id="description"
          placeholder="Descripcion de la tarea."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border-gray-400 p-2 mb-4 w-full rounded-md text-black"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          {params.id ? "Modificar" : "Crear"}
        </button>
      </form>
    </div>
  );
};

export default NewPage;
