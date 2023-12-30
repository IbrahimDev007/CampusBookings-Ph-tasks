import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuthHook = () => {
	const auth = useContext(AuthContext);
	// console.log("auth provdeer", auth, auth?.user?.email);
	return auth;
};
export default useAuthHook;
