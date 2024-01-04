import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthHook from "./useAuthHook";
const useUserProfileHook = () => {
	const { user } = useAuthHook();

	const {
		data: profile = [],
		isLoading: proloading,
		refetch,
	} = useQuery({
		queryKey: ["profile"],
		enabled: !!user?.email,
		queryFn: async () => {
			const res = await axios.get(
				`http://localhost:3000/users/about/${user?.email}`
			);

			return res.data;
		},
	});
	return [profile, proloading, refetch];
};

export default useUserProfileHook;
