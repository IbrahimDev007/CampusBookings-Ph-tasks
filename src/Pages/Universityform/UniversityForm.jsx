import { useState } from "react";
import axios from "axios";

const UniversityForm = () => {
	const [university, setUniversity] = useState({
		_id: "",
		name: "",
		admission: "",
		events: [{ title: "", desc: "" }],
		research: [{ title: "", desc: "", link: "" }],
		sports: [{ title: "", desc: "" }],
		photos: [""],
	});

	const handleChange = (e, index, field, arrayName) => {
		let newArray = [...university[arrayName]];
		newArray[index][field] = e.target.value;
		setUniversity({ ...university, [arrayName]: newArray });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			axios
				.post("/api/university", university)
				.then((res) => console.log(res.data))
				.catch((err) => console.error(err));
		} catch (err) {
			console.log(university);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="_id"
				onChange={(e) => setUniversity({ ...university, _id: e.target.value })}
				placeholder="Enter university ID"
				required
			/>
			<input
				type="text"
				name="name"
				onChange={(e) => setUniversity({ ...university, name: e.target.value })}
				placeholder="Enter university name"
				required
			/>
			<input
				type="date"
				name="admission"
				onChange={(e) =>
					setUniversity({ ...university, admission: e.target.value })
				}
				placeholder="Enter admission date"
				required
			/>

			{university.events.map((event, index) => (
				<div key={index}>
					<input
						type="text"
						name="title"
						onChange={(e) => handleChange(e, index, "title", "events")}
						placeholder="Enter event title"
						required
					/>
					<input
						type="text"
						name="desc"
						onChange={(e) => handleChange(e, index, "desc", "events")}
						placeholder="Enter event description"
						required
					/>
				</div>
			))}

			{university.research.map((research, index) => (
				<div key={index}>
					<input
						type="text"
						name="title"
						onChange={(e) => handleChange(e, index, "title", "research")}
						placeholder="Enter research title"
						required
					/>
					<input
						type="text"
						name="desc"
						onChange={(e) => handleChange(e, index, "desc", "research")}
						placeholder="Enter research description"
						required
					/>
					<input
						type="text"
						name="link"
						onChange={(e) => handleChange(e, index, "link", "research")}
						placeholder="Enter research link"
						required
					/>
				</div>
			))}

			{university.sports.map((sport, index) => (
				<div key={index}>
					<input
						type="text"
						name="title"
						onChange={(e) => handleChange(e, index, "title", "sports")}
						placeholder="Enter sports title"
						required
					/>
					<input
						type="text"
						name="desc"
						onChange={(e) => handleChange(e, index, "desc", "sports")}
						placeholder="Enter sports description"
						required
					/>
				</div>
			))}

			{university.photos.map((photo, index) => (
				<div key={index}>
					<input
						type="text"
						name="photo"
						onChange={(e) => handleChange(e, index, "photo", "photos")}
						placeholder="Enter photo URL"
						required
					/>
				</div>
			))}

			<button type="submit">Submit</button>
		</form>
	);
};

export default UniversityForm;
