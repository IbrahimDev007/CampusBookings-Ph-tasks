import { FaBuilding, FaEvernote, FaStar } from "react-icons/fa";
import { Si4Chan, SiGooglecalendar, SiK3S, SiSearxng } from "react-icons/si";
import { Link } from "react-router-dom";

const Popular = ({ clgData }) => {
	const { _id, img, name, admission, events, Resarch, sports, ratting } =
		clgData;

	return (
		<div className="my-6">
			{
				<div className="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img src={img} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							<FaBuilding /> {name}
						</h2>
						<p className="flex">
							<SiGooglecalendar />
							<span className="font-bold text-md mx-2">Admission:</span>
							{admission}
						</p>
						<p className="flex">
							<FaEvernote />
							<span className="font-bold text-md mx-2">Event:</span>{" "}
							<span className="flex mx-2">
								{events.map((ev) => (
									<span key={ev?._id}>{ev?.title}</span>
								))}
							</span>
						</p>
						<p className="flex">
							<SiSearxng />
							<span className="font-bold text-md mx-2"> Resarch:</span>
							<span className="flex mx-2">
								{Resarch.map((Rs) => (
									<span key={Rs?._id}>{Rs?.title}</span>
								))}
							</span>
						</p>
						<p className="flex">
							<Si4Chan />
							<span className="font-bold text-md mx-2">Sports:</span>
							{sports.map((Rs) => (
								<span key={Rs?._id}>{Rs?.title}</span>
							))}
						</p>
						<p>
							<div className="flex">
								{[...Array(5)].map((_, index) => {
									return (
										<button key={index}>
											<FaStar
												size={20}
												style={{
													color: "#ffe101",
												}}
												value={ratting}
											/>
										</button>
									);
								})}
							</div>
						</p>

						<div className="card-actions justify-end">
							<Link to={`/collage/${_id}`}>
								<button className="btn btn-primary">
									<SiK3S /> Details
								</button>
							</Link>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default Popular;
