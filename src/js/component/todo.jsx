import React, {useState} from "react";

//create your first component
const Todo = (props) => {
	return (
		<div class="alert alert-dark" role="alert">
			{props.text}
		</div>
	)
};

export default Todo;
