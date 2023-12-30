import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/router";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Providers/AuthProvider";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<div className="max-w-screen-2xl mx-auto ">
					<RouterProvider router={router} />
				</div>
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
);
