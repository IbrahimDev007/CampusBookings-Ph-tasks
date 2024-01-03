import { useLoaderData } from "react-router-dom";
import DetailCard from "../../Components/Gallery/DetailCard";
import GalleryCard from "../../Components/Gallery/GalleryCard";
import useUserHook from "../../Hooks/useUserHooks";

const CollageDet = () => {
	const [user] = useUserHook();
	const data = useLoaderData();
	const { admission_process, events, Resarch, sports, reviews, Photos } = data;

	return (
		<div className="card w-full flex flex-col justify-center items-center">
			<div className="grid ">
				<div className="flex flex-col items-center justify-center">
					<>
						<div className="grid grid-cols-2 md:grid-cols-2 xl:grid-col-3">
							{Photos.map((img, idx) => {
								const widths = [10, 20, 30, 40]; // Predefined widths
								const width = widths[idx % widths.length]; // Select a width based on the index

								return (
									<img
										className={`object-cover p-5 w-[${width * 16}px] h-[${
											width * 16
										}px]`}
										src={img?.src}
										alt={`img${idx + 1}`}
										key={idx}
									/>
								);
							})}
						</div>

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
			</div>
		</div>
	);
};

export default CollageDet;
