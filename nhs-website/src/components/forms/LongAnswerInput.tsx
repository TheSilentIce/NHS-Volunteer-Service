interface InputProps {
	name: string;
	id: string;
	placeholder: string;
}

function LongAnswerInput(properties: InputProps) {
	return (
		<div className="form-group">
			<label htmlFor={properties.id} className="form-label">
				{properties.name}
			</label>
			<textarea
				id={properties.id}
				className="form-control"
				placeholder={properties.placeholder}
			/>
		</div>
	);
}

export default LongAnswerInput;
