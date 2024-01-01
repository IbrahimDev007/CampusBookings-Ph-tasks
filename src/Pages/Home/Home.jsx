import CollageDet from "../Collage Details/CollageDet";
import Hero from "./Components/Hero";
import Popular from "./Components/PopularCollage/Popular";
import PopularGraduted from "./Components/PopularGraduted/PopularGraduted";
import Review from "./Components/Review/Review";
import ResarchLink from "./ResarchLink/ResarchLink";

const Home = () => {
	return (
		<>
			<Hero />
			<Popular />
			<PopularGraduted />
			<ResarchLink />
			<Review />
			<CollageDet />
		</>
	);
};

export default Home;
