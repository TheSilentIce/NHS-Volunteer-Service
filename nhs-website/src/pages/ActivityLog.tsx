import FileUpload from "../components/forms/FileUpload";
import LongAnswerInput from "../components/forms/LongAnswerInput";
import SelectMenu from "../components/forms/SelectMenu";
import ShortAnswerInput from "../components/forms/ShortAnswerInput";

export function ActivityLog() {
	return (
		<>
			<div className="header-container container">
				<h1>Activity Log</h1>
			</div>

			<div className="container">
				<form>
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<ShortAnswerInput
									name="First Name"
									id="firstName"
									type="name"
									placeholder=""
								/>
							</div>
							<div className="col">
								<ShortAnswerInput
									name="Last Name"
									id="lastName"
									type="name"
									placeholder=""
								/>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<ShortAnswerInput
									name="Personal Email"
									id="email"
									type="email"
									placeholder="example@mail.com"
								/>
								<SelectMenu
									name="Grade"
									id="grade"
									options={[9, 10, 11, 12]}
								></SelectMenu>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<FileUpload name="Evidence" />
							</div>
						</div>
						<div className="row">
							<LongAnswerInput
								name={"Description"}
								id={"description"}
								placeholder={""}
							/>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
