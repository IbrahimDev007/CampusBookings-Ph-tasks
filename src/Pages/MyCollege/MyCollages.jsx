import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useUserProfileHook from "../../Hooks/useUserVerify";

const MyCollages = () => {
	const [profile] = useUserProfileHook();
	const { data: userData = [], isLoading } = useQuery({
		queryKey: ["userData"],
		enabled: !!profile?._id,
		queryFn: async () => {
			const res = await axios.get(
				`https://campus-two.vercel.app/candidate/${profile?._id}`
			);
			console.log(res.data, "my --->collage");
			return res.data;
		},
	});

	const { register, handleSubmit } = useForm();
	const [ratings, setRatings] = useState([]);

	const handleRatingClick = (index, ratingValue) => {
		setRatings((prevRatings) => {
			const newRatings = [...prevRatings];
			newRatings[index] = ratingValue;
			return newRatings;
		});
	};

	const handleReviewSubmit = (data, index, id) => {
		const rating = ratings[index];
		axios
			.post(
				`https://campus-two.vercel.app/user/${id}?rating=${rating}&review=${data.review}`
			)
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

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	return (
		<div className="grid grid-cols-2">
			{userData.map((user, index) => (
				<div
					key={user?.colagedata?._id}
					className="card w-96 bg-base-100 shadow-xl"
				>
					<figure>
						<img
							src={
								user?.colagedata?.img ||
								"https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?size=626&ext=jpg"
							}
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							Collage Name: {user?.colagedata?.name}
						</h2>
						<p>Collage Details: {user?.colagedata?.detail}</p>
						<div className="card-actions flex flex-col">
							<div className="flex">
								{[...Array(5)].map((_, starIndex) => (
									<button
										key={starIndex}
										onClick={() => handleRatingClick(index, starIndex + 1)}
									>
										<FaStar
											size={20}
											style={{
												color: starIndex < ratings[index] ? "#ffe101" : "#ccc",
											}}
										/>
									</button>
								))}
							</div>
							<form
								onSubmit={handleSubmit((data) =>
									handleReviewSubmit(data, index, user?.colagedata?._id)
								)}
							>
								<textarea
									{...register("review")}
									type="text"
									placeholder="Review"
									className="textarea-primary textarea-lg textarea"
								/>
								<input className="btn btn-primary" type="submit" />
							</form>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default MyCollages;
