import { useLoaderData } from "react-router-dom";
import DetailCard from "../../Components/Gallery/DetailCard";
import GalleryCard from "../../Components/Gallery/GalleryCard";
import useUserHook from "../../Hooks/useUserHooks";

const CollageDet = () => {
	const [user] = useUserHook();
	const data = useLoaderData();
	console.log(data);
	const { admission_process, events, Resarch, sports, reviews } = data;
	console.log(admission_process);
	return (
		<div className="card  flex flex-col justify-center items-center">
			<div className="grid grid-cols-6">
				<div className="col-span-5 flex flex-col">
					<>
						<GalleryCard photos={data?.Photos} />

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
							<textarea
								type="text"
								placeholder="Review here"
								className="textarea-accent textarea-lg"
							></textarea>
						)}

						<div className="chat chat-start">
							{reviews.map((review, idx) => (
								<div className="chat-bubble" key={idx}>
									{review?.msg}
								</div>
							))}
						</div>
					</>
				</div>
				<div className="col-span-1">
					<GalleryCard photos={[]} />
					photo
				</div>
			</div>
		</div>
	);
};

export default CollageDet;
