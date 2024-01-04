import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useUserProfileHook from "../../Hooks/useUserVerify";

const AdmissionForm = () => {
	const [profile, proloading] = useUserProfileHook();

	const colagedata = useLoaderData();
	const { register, handleSubmit, reset } = useForm();

	if (proloading) {
		return <h1>Loading</h1>;
	}

	const onSubmit = (data) => {
		const candidateData = {
			userId: profile?._id,
			data,
			colagedata,
		};

		axios.post("http://localhost:3000/candidate", candidateData).then(
			() => reset(),
			Swal.fire({
				icon: "success",
				title: "Success!",
				text: "Your operation was successful.",
			})
		);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="p-6 space-y-8 flex flex-col w-11/12 justify-center items-center"
		>
			<input
				{...register("candidateName")}
				placeholder="Candidate Name"
				className="input input-bordered"
				required
			/>
			<input
				{...register("subject")}
				placeholder="Subject"
				className="input input-bordered"
				required
			/>
			<input
				{...register("candidateEmail")}
				placeholder="Candidate Email"
				type="email"
				className="input input-bordered"
				required
			/>
			<input
				{...register("candidatePhoneNumber")}
				placeholder="Candidate Phone Number"
				type="tel"
				className="input input-bordered"
				required
			/>
			<input
				{...register("address")}
				placeholder="Address"
				className="input input-bordered"
				required
			/>
			<input
				{...register("dateOfBirth")}
				placeholder="Date of Birth"
				type="date"
				className="input input-bordered"
				required
			/>
			<input
				{...register("image")}
				placeholder="Image URL"
				type="url"
				className="input input-bordered"
				required
			/>
			<input type="submit" className="btn btn-primary" />
		</form>
	);
};

export default AdmissionForm;
