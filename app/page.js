"use client";
import React, { useState } from "react";

const page = () => {
	const [title, setTitle] = useState("");
	const [desc, SetDesc] = useState("");
  const [task, setTask] = useState([]);
  let deletehandler = (i) => {
    let copytask = [...task]
    copytask.splice(i, 1)
    setTask(copytask)
  }
	const submit = (e) => {
		e.preventDefault();
		setTask([...task, { title, desc }]);
		setTitle("");
		SetDesc("");
	};
	let renderTask = "No Task Available for today";
	renderTask = task.map((tasks,i) => {
		return (
			<div className="flex justify-between w-1/2">
				<h2>{tasks.title}</h2>
        <h2>{tasks.desc}</h2>
        <button className="px-4 py-2 bg-red-400" onClick={()=>deletehandler(i)}>delete</button>
			</div>
		);
	});
	return (
		<>
			<h1 className="text-4xl font-bold bg-black text-white text-center p-5">
				My Todo List
			</h1>
			<form
				className=""
				onSubmit={submit}
			>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="text-2xl border-zinc-500 border-2 m-8 px-4 py-2"
					placeholder="start the day"
				/>
				<input
					type="text"
					value={desc}
					onChange={(e) => SetDesc(e.target.value)}
					className="text-2xl border-zinc-500 border-2 m-8 px-4 py-2"
					placeholder="Task"
				/>
				<button className="py-2 px-4 rounded-lg font-bold text-2xl bg-black text-white">
					Add Task
				</button>
			</form>
			<hr />
			<div className="bg-slate-300 p-8">
				<ul>{renderTask}</ul>
			</div>
		</>
	);
};

export default page;
