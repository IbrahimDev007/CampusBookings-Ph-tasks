import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import { Rating } from "react-simple-star-rating";
const MyCollages = () => {
	const [rating, setRating] = useState(null);
	const [hoverFill, setHoverFill] = useState(null);
	const handleRatting = () => {
		setRating(rating);
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
						<textarea
							type="text"
							placeholder="Review"
							className="textarea-primary textarea-lg textarea "
						></textarea>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyCollages;
