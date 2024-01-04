import { useLoaderData } from "react-router-dom";
import DetailCard from "../../Components/Gallery/DetailCard";
import GalleryCard from "../../Components/Gallery/GalleryCard";
import useUserHook from "../../Hooks/useUserHooks";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuthHook from "../../Hooks/useAuthHook";

const CollageDet = () => {
	const { user } = useAuthHook();
	const data = useLoaderData();
	const { admission_process, events, Resarch, sports, reviews, Photos, _id } =
		data;
	const { register, handleSubmit } = useForm();
	const handleReview = (data) => {
		console.log(data);
		axios
			.patch(`https://campus-two.vercel.app/review/${_id}`, {
				photo: user?.photoUrl,
				reviews: data.review,
			})
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Success!",
					text: "Your operation was successful.",
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Error!",
					text: err || "Something went wrong.",
				});
			});
	};

	return (
		<div className="card w-full flex flex-col justify-center items-center">
			<div className="grid ">
				<div className="flex flex-col items-center justify-center">
					<>
						<div className="grid grid-cols-2 md:grid-cols-2 xl:grid-col-3">
							{Photos.map((img, idx) => {
								const widths = [10, 20, 30, 40]; // Predefined widths
								const width = widths[idx % widths.length]; // Select a width based on the index

								return (
									<img
										className={`object-cover p-5 w-[${width * 16}px] h-[${
											width * 16
										}px]`}
										src={img?.src}
										alt={`img${idx + 1}`}
										key={idx}
									/>
								);
							})}
						</div>

						<h2 className="text-2xl font-semibold">Admission Process</h2>
						<p>{admission_process}</p>

						<h2 className="text-2xl font-semibold">Event</h2>
						{events &&
							events.map((event) => (
								<DetailCard
									key={event._id}
									title={event.title}
									desc={event.desc}
								/>
							))}

						<h2 className="text-2xl font-semibold">Resarch History</h2>
						{Resarch &&
							Resarch.map((research) => (
								<DetailCard
									key={research._id}
									title={research.title}
									desc={research.desc}
									link={research?.link}
								/>
							))}

						<h2 className="text-2xl font-semibold">Sports Activity</h2>
						{sports &&
							sports.map((sport) => (
								<DetailCard
									key={sport._id}
									title={sport.title}
									desc={sport.desc}
								/>
							))}

						<h2 className="text-2xl font-semibold">Review</h2>
						{user && (
							<form onSubmit={handleSubmit(handleReview)}>
								<textarea
									{...register("review")}
									type="text"
									placeholder="Review"
									className="textarea-primary textarea-lg textarea"
									required
								/>
								<input type="submit" className="btn btn-primary mx-auto" />
							</form>
						)}

						<div className="chat chat-start">
							{reviews.map((review, idx) => (
								<div className="chat-bubble" key={idx}>
									{reviews?.msg}
								</div>
							))}
						</div>
					</>
				</div>
			</div>
		</div>
	);
};

export default CollageDet;
