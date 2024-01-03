import DetailCard from "../../Components/Gallery/DetailCard";
import GalleryCard from "../../Components/Gallery/GalleryCard";
import useAuthHook from "../../Hooks/useAuthHook";
import useCollageHook from "../../Hooks/useCollageHook";

const CollageDet = () => {
	// const { user } = useAuthHook();
	const [collageData] = useCollageHook();
	const { admission_process, events, Resarch, sports, reviews } = collageData;

	console.log(events, "events", collageData);
	return (
		<div className="card  flex flex-col justify-center items-center">
			{/* <div className="grid grid-cols-6">
				<div className="col-span-5 flex flex-col">
					<>
						<GalleryCard photos={collageData?.Photos} />

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
			</div> */}
		</div>
	);
};

export default CollageDet;
