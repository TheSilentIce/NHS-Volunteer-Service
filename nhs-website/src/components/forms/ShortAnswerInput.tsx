interface InputProps {
	name: string;
	id: string;
	type: string;
	placeholder?: string;
	autocomplete?: string;
}

function ShortAnswerInput(properties: InputProps) {
	return (
		<div className="mb-3 pt-2">
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
			/>
		</div>
	);
}

export default ShortAnswerInput;
