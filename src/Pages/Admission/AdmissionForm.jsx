import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useUserHook from "../../Hooks/useUserHooks";

const AdmissionForm = () => {
	const { user, loading } = useUserHook();
	const colagedata = useLoaderData();
	const { register, handleSubmit } = useForm();

	if (loading) {
		return <h1>Loading</h1>;
	}

	const onSubmit = (data) => {
		const candidateData = {
			userId: user?._id,
			data,
			colagedata,
		};
		axios.post("http://localhost:3000/candidate", { candidateData }).then(() =>
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
			/>
			<input
				{...register("subject")}
				placeholder="Subject"
				className="input input-bordered"
			/>
			<input
				{...register("candidateEmail")}
				placeholder="Candidate Email"
				type="email"
				className="input input-bordered"
			/>
			<input
				{...register("candidatePhoneNumber")}
				placeholder="Candidate Phone Number"
				type="tel"
				className="input input-bordered"
			/>
			<input
				{...register("address")}
				placeholder="Address"
				className="input input-bordered"
			/>
			<input
				{...register("dateOfBirth")}
				placeholder="Date of Birth"
				type="date"
				className="input input-bordered"
			/>
			<input
				{...register("image")}
				placeholder="Image URL"
				type="url"
				className="input input-bordered"
			/>
			<input type="submit" className="btn btn-primary" />
		</form>
	);
};

export default AdmissionForm;
