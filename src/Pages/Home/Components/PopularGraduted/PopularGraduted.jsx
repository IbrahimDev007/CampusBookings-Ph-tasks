import Gallery from "react-photo-gallery";

const PopularGraduted = ({ clgData }) => {
	console.log(clgData);
	return (
		<div className="mx-auto">
			<h2 className="font-bold text-2xl">Popular graduted group</h2>
			{clgData && <Gallery photos={clgData} />}
		</div>
	);
};

export default PopularGraduted;
