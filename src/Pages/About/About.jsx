import { useForm } from "react-hook-form";
import useUserProfileHook from "../../Hooks/useUserVerify";

const About = () => {
	const [profile, proloading] = useUserProfileHook();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	if (proloading) {
		return <div>Loading</div>;
	}

	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<div className="card-body">
				<h2 className="card-title">{profile.name}</h2>
				<p>{profile.email}</p>
				<div className="card-actions justify-end">
					<button
						className="btn"
						onClick={() => document.getElementById("my_modal_5").showModal()}
					>
						Edit
					</button>
					<dialog
						id="my_modal_5"
						className="modal modal-bottom sm:modal-middle"
					>
						<div className="modal-box">
							<form onSubmit={handleSubmit(onSubmit)} className="card-body">
								<div className="form-control">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input
										{...register("name")}
										type="text"
										placeholder="Name"
										className="input input-bordered"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										{...register("email")}
										type="email"
										placeholder="Email"
										className="input input-bordered"
										required
									/>
								</div>
								<div className="form-control mt-6">
									<button className="btn btn-primary">Submit</button>
								</div>
							</form>
							<div className="modal-action">
								<form method="dialog">
									{/* if there is a button in form, it will close the modal */}
									<button className="btn">Close</button>
								</form>
							</div>
						</div>
					</dialog>
				</div>
			</div>
		</div>
	);
};

export default About;
