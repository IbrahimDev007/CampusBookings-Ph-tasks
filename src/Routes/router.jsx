import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
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
