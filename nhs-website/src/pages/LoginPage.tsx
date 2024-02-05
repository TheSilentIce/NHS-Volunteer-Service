import ShortAnswerInput from "../components/forms/ShortAnswerInput";

export function LoginPage() {
	return (
		<>
			<div className="bg-image-full" id="bg" />

			<div className="container bg-light w-50 py-4 position-absolute top-50 start-50 translate-middle rounded-4">
				<h2 className="text-center">Login</h2>

				<form>
					<ShortAnswerInput name="Email" id="email" type="email" placeholder="Type your email"/>
					<ShortAnswerInput name="Password" id="password" type="password" placeholder="Type your password" />
					
					<button type="submit" className="btn btn-primary rounded-pill">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
