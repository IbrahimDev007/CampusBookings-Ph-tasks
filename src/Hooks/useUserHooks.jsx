import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useUserHook = () => {
	const {
		data: users = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ["users"],
		// enabled: !!!loading,
		queryFn: async () => {
			const res = await axios.get("http://localhost:3000/users");
			return res.data;
		},
	});
	return [users, loading, refetch];
};

export default useUserHook;
