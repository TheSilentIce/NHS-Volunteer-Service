interface SelectMenuProps {
	name: string;
	id: string;
	options: number[];
}

function SelectMenu(properties: SelectMenuProps) {
	return (
		<div className="form-group pt-2">
			<label htmlFor={properties.id}>{properties.name}</label>
			<select className="form-control" id={properties.id}>
				{properties.options.map((optionValue, index) => (
					<option key={index}>{optionValue}</option>
				))}
			</select>
		</div>
	);
}

export default SelectMenu;
