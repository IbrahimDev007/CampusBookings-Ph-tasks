import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCollageHook = () => {
	const {
		data: collageData = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ["collageData"],
		queryFn: async () => {
			const res = await axios.get("https://campus-two.vercel.app/collages");

			return res.data;
		},
		// retry: 3, // Set the number of retries (adjust as needed)
	});

	return [collageData, loading, refetch];
};

export default useCollageHook;
