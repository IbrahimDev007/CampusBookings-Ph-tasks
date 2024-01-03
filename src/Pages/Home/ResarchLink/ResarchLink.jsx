const ResarchLink = ({ clgData }) => {
	const { Resarch } = clgData;
	
	return (
		<div className=" grid grid-rows-2 ">
			{Resarch &&
				Resarch.map((res) => (
					<div key={res?._id} className="card">
						{/* <div className=" text-center">
							<img
								src={{}}
								alt=""
								className="w-20 h-20 rounded-full object-cover"
							/>
						</div> */}
						<div className="card-body">
							<h1 className="card-title">Resarch Title:{res?.title}</h1>
							<p className="font-light hover:bg-amber-300  py-6 px-4 text-md ">
								Link {res?.link}
							</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default ResarchLink;
