import useCollageHook from "../../Hooks/useCollageHook";
// import CollageDet from "../Collage Details/CollageDet";
import Hero from "./Components/Hero";
import Popular from "./Components/PopularCollage/Popular";
import PopularGraduted from "./Components/PopularGraduted/PopularGraduted";
import Review from "./Components/Review/Review";
import ResarchLink from "./ResarchLink/ResarchLink";

const Home = () => {
	const [collageData, loading] = useCollageHook();

	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<div>
			<Hero />
			{!loading && collageData && (
				<div>
					<div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
						{collageData.map((clg) => (
							<Popular key={clg?._id} clgData={clg} />
						))}
					</div>
					<div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"></div>

					{collageData.map((clg) => (
						<PopularGraduted
							key={clg?._id}
							clgData={clg?.Photos}
							name={clg?.name}
						/>
					))}

					<div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
						{collageData.map((clg) => (
							<ResarchLink key={clg?._id} clgData={clg} />
						))}
					</div>
					<div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
						{collageData.map((clg) => (
							<Review key={clg?._id} clgData={clg} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
