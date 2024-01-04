import { FaEvernote } from "react-icons/fa";

const DetailCard = ({ title, desc, link, img }) => {
	return (
		<>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src={
							(img && img) ||
							"https://img.freepik.com/free-photo/glowing-stage-light-illuminates-cheering-rock-fans-generated-by-ai_188544-37983.jpg?size=626&ext=jpg"
						}
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
