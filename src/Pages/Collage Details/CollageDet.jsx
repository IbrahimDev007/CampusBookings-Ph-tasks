import DetailCard from "../../Components/Gallery/DetailCard";
import GalleryCard from "../../Components/Gallery/GalleryCard";
import useAuthHook from "../../Hooks/useAuthHook";

const CollageDet = () => {
	const { user } = useAuthHook();

	return (
		<div className="card  flex flex-col justify-center items-center">
			<div className="grid grid-cols-4">
				<div className="col-span-3 flex flex-col">
					<>
						<GalleryCard photos={[]} />

						<h2 className="text-2xl font-semibold">Admission Process</h2>
						<p>admission Process</p>
						<h2 className="text-2xl font-semibold">Event</h2>
						{<DetailCard />}
						<h2 className="text-2xl font-semibold">Resarch History</h2>
						{<DetailCard />}
						<h2 className="text-2xl font-semibold">Sports Activity</h2>
						{<DetailCard />}
						<h2 className="text-2xl font-semibold">Review</h2>
						{user && (
							<textarea
								type="text"
								placeholder="Review here"
								className="textarea-accent textarea-lg"
							></textarea>
						)}
						{
							<div className="chat chat-start">
								<div className="chat-bubble">
									It`&apos;`s over Anakin, <br />I have the high ground.
								</div>
							</div>
						}
					</>
				</div>
				<div>
					<GalleryCard photos={[]} />
				</div>
			</div>
		</div>
	);
};

export default CollageDet;
