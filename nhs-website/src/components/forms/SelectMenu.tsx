interface SelectMenuProps {
	name: string;
	id: string;
	options: number[];
}

function SelectMenu(properties: SelectMenuProps) {
	return (
		<div className="form-group">
			<label htmlFor={properties.id}>{properties.name}</label>
			<select className="form-control">
				{properties.options.map((optionValue, index) => (
					<option key={index}>{optionValue}</option>
				))}
			</select>
		</div>
	);
}

export default SelectMenu;
