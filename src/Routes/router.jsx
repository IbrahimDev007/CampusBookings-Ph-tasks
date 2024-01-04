import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Collages from "../Pages/Collages/Collages";
import Admission from "../Pages/Admission/Admission";
import MyCollages from "../Pages/MyCollege/MyCollages";
import CollageDet from "../Pages/Collage Details/CollageDet";
import axios from "axios";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import About from "../Pages/About/About";
//router added
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <h1>This is ---- error</h1>,

		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/collages",
				element: <Collages />,
			},
			{
				path: "/collage/:id",
				element: <CollageDet />,
				loader: async ({ params }) => {
					const res = await axios.get(
						`https://campus-two.vercel.app/collage/${params.id}`
					);
					return res.data;
				},
			},
			{
				path: "/admission/:id",
				element: <AdmissionForm />,
				loader: async ({ params }) => {
					const res = await axios.get(
						`https://campus-two.vercel.app/collage/${params.id}`
					);
					return res.data;
				},
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
