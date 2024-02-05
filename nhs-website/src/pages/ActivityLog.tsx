import FileUpload from "../components/forms/FileUpload";
import LongAnswerInput from "../components/forms/LongAnswerInput";
import RadioInput from "../components/forms/RadioInput";
import SelectMenu from "../components/forms/SelectMenu";
import ShortAnswerInput from "../components/forms/ShortAnswerInput";

export function ActivityLog() {
	return (
		<>
			<div className="bg-image-partial" id="bg" />
			<div className="container py-5">
				<div className="header-container container text-center pt-5">
					<h1>Activity Log</h1>
				</div>
				<form>
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<ShortAnswerInput
									name="Hours"
									id="hours"
									type="input"
									placeholder="0.0"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<ShortAnswerInput
									name="First Name"
									id="firstName"
									type="name"
								/>
							</div>
							<div className="col">
								<ShortAnswerInput
									name="Last Name"
									id="lastName"
									type="name"
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
									autocomplete="email"
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
						<div className="row">
							<RadioInput
								name="Was this an NHS event?"
								id="isVolunteer"
								options={["Yes", "No"]}
							/>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
