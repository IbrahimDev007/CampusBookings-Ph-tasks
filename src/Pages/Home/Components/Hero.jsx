import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Popular from "./PopularCollage/Popular";
import { motion } from "framer-motion";

const Hero = () => {
	const { register, handleSubmit } = useForm();
	const [show, setShow] = useState(false);
	const [clageDat, setClagedata] = useState([]);

	const handleSearch = (data) => {
		axios
			.get(`https://campus-two.vercel.app/hero`, { params: data })
			.then((res) => {
				setShow(true);
				setClagedata(res.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<motion.div
			className="hero min-h-screen"
			style={{
				backgroundImage:
					"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="flex flex-col justify-center items-center  text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Search Collage</h1>
				</div>
				<form onSubmit={handleSubmit(handleSearch)} className="flex">
					<input
						{...register("clg")}
						type="text"
						placeholder="Type here"
						className="input input-bordered text-black input-warning w-full max-w-xs border-x-0"
					/>
					<button
						type="submit"
						className="btn btn-primary btn-md border-solid   border-primary rounded-e-3xl mx-0"
					>
						{" "}
						Search{" "}
					</button>
				</form>
				{show && (
					<motion.div
						className="bg-transparent flex justify-center items-center text-white flex-col my-0 py-o"
						initial={{ y: 100 }}
						animate={{ y: 0 }}
						transition={{ duration: 1 }}
					>
						<div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-black my-0 py-o">
							{clageDat &&
								clageDat.map((clg) => <Popular key={clg?._id} clgData={clg} />)}
						</div>
						<button
							className="btn btn-error flex justify-start "
							onClick={() => setShow(false)}
						>
							close
						</button>
					</motion.div>
				)}
			</div>
		</motion.div>
	);
};

export default Hero;
