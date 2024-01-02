import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Collages from "../Pages/Collages/Collages";
import Admission from "../Pages/Admission/Admission";
import MyCollages from "../Pages/MyCollege/MyCollages";
import UniversityForm from "../Pages/Universityform/UniversityForm";
//router added
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <h1>This error</h1>,

		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/collages",
				element: <Collages />,
			},
			{
				path: "/admission",
				element: <Admission />,
			},
			{
				path: "/myCollages",
				element: <MyCollages />,
			},
			{
				path: "/university",
				element: <UniversityForm />,
			},

			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
]);

export default router;
