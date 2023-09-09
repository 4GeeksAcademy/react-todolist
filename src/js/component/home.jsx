import React, { useState } from "react";

//create your first component
const Home = () => {

const [newTodo, setNewTodo] = useState("");
const [list, setList] = useState([]);

function addNewTodo() {
	setList(list.concat(newTodo));
}

	return (
		<div className="container">
			<div className="input-group mb-3">
				<input type="text" className="form-control" onChange={e => setNewTodo(e.target.value)} value={newTodo} id="add-todo" placeholder="New Todo"></input>
				<div className="input-group-append">
					<button className="btn btn-outline-secondary" onClick={addNewTodo} type="button" id="add-button">Add</button>
				</div>
			</div>

			
		</div>
	);
};

export default Home;
