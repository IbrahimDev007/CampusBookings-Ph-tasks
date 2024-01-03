import { Link } from "react-router-dom";
import useCollageHook from "../../Hooks/useCollageHook";

const Admission = () => {
	const [collageData, loader] = useCollageHook();

	return (
		<div>
			{!loader &&
				collageData &&
				collageData.map((clg, idx) => (
					<div className="card card-side bg-base-100 shadow-xl" key={idx}>
						<figure>
							<img src={clg?.img} alt="Movie" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">{clg?.name} </h2>
							<p>{clg?.detail}</p>
							<div className="card-actions justify-end">
								<Link to={`/admission/${clg?._id}`}>
									<button className="btn btn-primary">Admission</button>
								</Link>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Admission;
