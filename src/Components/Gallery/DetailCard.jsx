import { FaEvernote } from "react-icons/fa";

const DetailCard = ({ title, desc, link }) => {
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
						<FaEvernote />
						Title: {title}
					</h2>
					<p className="">Details:{desc}</p>
					{link && <p>link:link</p>}
				</div>
			</div>
		</>
	);
};

export default DetailCard;
