import useCollageHook from "../../Hooks/useCollageHook";
import Popular from "../Home/Components/PopularCollage/Popular";

const Collages = () => {
	const [collageData, loading] = useCollageHook();

	return (
		<>
			{!loading &&
				collageData &&
				collageData.map((clg) => <Popular key={clg._id} clgData={clg} />)}
		</>
	);
};

export default Collages;
