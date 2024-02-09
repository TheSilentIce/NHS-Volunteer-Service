import { ChangeEventHandler } from "react";

interface InputProps {
	name: string;
	id: string;
	type: string;
	placeholder?: string;
	autocomplete?: string;
	onChange?: ChangeEventHandler;
}

function ShortAnswerInput(properties: InputProps) {
	return (
		<div className="mb-3">
			<label htmlFor={properties.id} className="form-label">
				{" "}
				{properties.name}{" "}
			</label>
			<input
				type={properties.type}
				id={properties.id}
				className="form-control"
				placeholder={properties.placeholder}
				autoComplete={properties.autocomplete}
				onChange={properties.onChange}
			/>
		</div>
	);
}

export default ShortAnswerInput;
