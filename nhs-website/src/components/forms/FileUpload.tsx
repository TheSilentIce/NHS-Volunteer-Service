interface FileUploadProps {
	name: string;
}

function FileUpload(properties: FileUploadProps) {
	return (
		<div className="pt-2">
			<label htmlFor="formFileMultiple" className="form-label">
				{properties.name}
			</label>
			<input
				className="form-control"
				type="file"
				id="formFileMultiple"
				multiple
			/>
		</div>
	);
}

export default FileUpload;
