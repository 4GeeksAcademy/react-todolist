import React, {useState} from "react";

//create your first component
const Todo = (props) => {
	return (

		<div className="card mb-3">
			<div className="row no-gutters">

				<div className="col-9 input">
						{props.text}
				</div>
			</div>
		</div>
	)
}

export default Todo;
