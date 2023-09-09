import React, { useState } from "react";
import Todo from "./todo.jsx";

//create your first component
const Home = () => {

const [newTodo, setNewTodo] = useState("");
const [list, setList] = useState([]);

function addNewTodo() {
	setList(list.concat(newTodo));
}

function deleteTodo(index){
	setList(list.filter((l, i) => {
		return i !== index
	}));
}

	return (
		<div className="container">

			<div className="Title">
				<h1>Todo List</h1>
			</div>
			<div className="input-group mb-3">
				<input type="text" className="form-control" onChange={e => setNewTodo(e.target.value)} value={newTodo} id="add-todo" placeholder="New Todo"></input>
				<div className="input-group-append">
					<button className="btn btn-outline-secondary" onClick={addNewTodo} type="button" id="add-button">Add</button>
				</div>
			</div>

			{list.map((l, index) => (
				<Todo text={l} index={index} deleteTodo={deleteTodo} />
			))}
		</div>
	);
};

export default Home;
