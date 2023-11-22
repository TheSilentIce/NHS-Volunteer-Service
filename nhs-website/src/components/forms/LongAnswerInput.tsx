interface InputProps {
	name: string;
	id: string;
	placeholder: string;
}

function LongAnswerInput(properties: InputProps) {
	return (
		<div className="form-group pt-2">
			<label htmlFor={properties.id} className="form-label">
				{properties.name}
			</label>
			<textarea
				className="form-control"
				placeholder={properties.placeholder}
			/>
		</div>
	);
}

export default LongAnswerInput;
