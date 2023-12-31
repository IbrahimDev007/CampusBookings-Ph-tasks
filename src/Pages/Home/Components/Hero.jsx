import { useState } from "react";

const Hero = () => {
	const [show, setShow] = useState(false);
	const handleSearch = () => {
		setShow(true);
	};

	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage:
					"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Search Collage</h1>
				</div>
				<div className="flex">
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered input-warning w-full max-w-xs border-x-0"
					/>
					<button
						className="btn btn-primary btn-md border-solid  border-primary rounded-e-3xl mx-0"
						onClick={handleSearch}
					>
						{" "}
						Search{" "}
					</button>
				</div>
			</div>
			{show && (
				<div className="bg-slate-950 text-white absolute bottom-0">
					here is show component
					<button className="btn btn-error" onClick={() => setShow(false)}>
						X
					</button>
				</div>
			)}
		</div>
	);
};

export default Hero;
