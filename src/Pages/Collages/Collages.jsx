import useCollageHook from "../../Hooks/useCollageHook";
import Popular from "../Home/Components/PopularCollage/Popular";

const Collages = () => {
	const [collageData, loading] = useCollageHook();

	return (
		<div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-center items-center ">
			{!loading &&
				collageData &&
				collageData.map((clg) => <Popular key={clg._id} clgData={clg} />)}
		</div>
	);
};

export default Collages;
