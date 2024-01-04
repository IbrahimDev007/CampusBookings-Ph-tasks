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
				`https://campus-two.vercel.app/users/about/${user?.email}`
			);

			return res.data;
		},
	});
	return [profile, proloading, refetch];
};

export default useUserProfileHook;
