interface InputProps {
	name: string;
	id: string;
	type: string;
	placeholder: string;
}

function ShortAnswerInput(properties: InputProps) {
	return (
		<div className="form-group pt-2">
			<label htmlFor={properties.id} className="form-label">
				{" "}
				{properties.name}{" "}
			</label>
			<input
				type={properties.type}
				className="form-control"
				placeholder={properties.placeholder}
			/>
		</div>
	);
}

export default ShortAnswerInput;
