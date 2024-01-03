import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import useAuthHook from "../../Hooks/useAuthHook";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
// import { Rating } from "react-simple-star-rating";
const MyCollages = () => {
	const [rating, setRating] = useState(null);
	const [hoverFill, setHoverFill] = useState(null);
	const handleRatting = () => {
		setRating(rating);
	};
	const { user } = useAuthHook();

	const useUser = () => {
		const {
			data: usersData = [],
			isLoading: loading,
			refetch,
		} = useQuery({
			queryKey: ["userData"],
			// enabled: !!!loading,
			queryFn: async () => {
				const res = await axios.get(
					`http://localhost:3000/user/${user?.email}`
				);
				return res.data;
			},
		});
		return [userData, loading, refetch];
	};
	const { img, name, detail } = userData;
	const { register, handleSubmit } = useForm();
	const handleReview = (data) => {
		console.log(data);
		axios
			.post(
				`https://localhost:3000/user/${user?.email}?ratting=${rating}?review=${data}`
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

	return (
		<>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">Collage Name</h2>
					<p>collage Details</p>
					<div
						className="card-actions flex flex-col
					"
					>
						<div className="flex">
							{[...Array(5)].map((_, index) => {
								const ratingValue = index + 1;

								return (
									<button
										key={index}
										onMouseEnter={() => setHoverFill(ratingValue)}
										onMouseLeave={() => setHoverFill(null)}
										onClick={handleRatting}
									>
										<FaStar
											size={20}
											style={{
												color:
													ratingValue <= (hoverFill || rating)
														? "#ffe101"
														: "#ccc",
											}}
											onChange={() => setRating(ratingValue)}
											value={ratingValue}
										/>
									</button>
								);
							})}
						</div>
						<form onSubmit={handleSubmit(handleReview)}>
							<textarea
								{...register("review")}
								type="text"
								placeholder="Review"
								className="textarea-primary textarea-lg textarea"
							/>
							<input type="submit" />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyCollages;
