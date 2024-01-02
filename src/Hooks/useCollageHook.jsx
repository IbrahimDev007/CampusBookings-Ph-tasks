import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCollageHook = () => {
	const {
		data: collageData = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ["collages"],
		// enabled: !!!loading,
		queryFn: async () => {
			const res = await axios.get("http://localhost:3000/collages");
			return res.data;
		},
	});

	return [collageData, loading, refetch];
};

export default useCollageHook;
