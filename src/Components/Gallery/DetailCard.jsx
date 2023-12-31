import { FaEvernote } from "react-icons/fa";

const DetailCard = () => {
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
					<h2 className="card-title">
						<FaEvernote /> Event Title
					</h2>
					<p className="">Details</p>
				</div>
			</div>
		</>
	);
};

export default DetailCard;
