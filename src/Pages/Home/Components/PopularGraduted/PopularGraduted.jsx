import Gallery from "react-photo-gallery";

const PopularGraduted = ({ clgData, name }) => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-2xl font-extrabold tracking-tight my-2 text-gray-900 sm:text-3xl">
				{name}
			</h2>
			{clgData && <Gallery photos={clgData} direction={"column"} />}
		</div>
	);
};

export default PopularGraduted;
