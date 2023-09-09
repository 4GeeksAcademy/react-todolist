import React, {useState} from "react";

//create your first component
const Todo = (props) => {
	return (

		<div className="card mb-3">
			<div className="row no-gutters">

				<div className="col-9 input">
						{props.text}
				</div>
				<div className="col-1">
					<button type="button" className="btn btn-danger m-2" onClick={() => {props.deleteTodo(props.index) }}><i class="fas fa-trash-alt"></i></button>
				</div>
			</div>
		</div>
	)
}

export default Todo;
