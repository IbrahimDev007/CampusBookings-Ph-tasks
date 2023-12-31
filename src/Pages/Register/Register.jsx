import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthHook from "../../Hooks/useAuthHook";
import { ImGoogle } from "react-icons/im";
import { motion } from "framer-motion";
const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const { updateUserProfile, createUser, googleSignIn } = useAuthHook();
	const handle_google = () => {
		googleSignIn().then((result) => {
			const loggedInUser = result.user;
			console.log(loggedInUser, "Google");
			// eslint-disable-next-line no-unused-vars
			const saveUser = {
				name: loggedInUser.displayName,
				email: loggedInUser.email,
				image: loggedInUser?.photoURL,
				university: null,
				adress: null,
			};
			fetch("https://localhost:3000/users", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(saveUser),
			})
				.then((res) => res.json())
				.then(() => {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "User created successfully.",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate("/");
					navigate(from, { replace: true });
				});
		});
	};

	const onSubmit = (data) => {
		createUser(data.email, data.password).then((result) => {
			const regUser = result.user;
			console.log(regUser);

			updateUserProfile(data.name, data.photoURL, data.email)
				.then(() => {
					axios
						.post("https://localhost:3000/users", {
							name: data.name,
							email: data.email,
							image: data?.photoURL,
							// university: null,
							// adress: null,
						})
						.then((data) => {
							console.log(data);
							if (data.data.insertedId) {
								reset();
								Swal.fire({
									position: "top-end",
									icon: "success",
									title: "User created successfully.",
									showConfirmButton: false,
									timer: 1500,
								});
								navigate("/");
							}
						});
					const update = {
						name: data.name,
						email: data.email,
						image: data?.photoURL,
					};
					console.log(update);
				})
				.catch((error) => console.log(error));
		});
	};
	return (
		<div>
			<div>
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div className="text-center lg:text-left">
							<div className="grid grid-cols-2">
								<div className="flex items-center flex-col justify-center">
									<h1 className="text-5xl font-bold my-1">Register now!</h1>
								</div>
								<motion.div
									animate={{ x: 20 }}
									transition={{
										ease: "easeIn",
										duration: 2,
										x: { duration: 2 },
									}}
								>
									<img
										src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4847.jpg?size=626&ext=jpg"
										alt="Register"
										className="object-cover"
									/>
								</motion.div>
							</div>
						</div>
						<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
							<form className="card-body" onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input
										type="text"
										placeholder="name"
										className="input input-bordered"
										{...register("name", { required: true })}
									/>
									{errors.name && (
										<p className="text-red-500 text-xs italic">
											Name is required
										</p>
									)}
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Image URL</span>
									</label>
									<input
										type="text"
										placeholder="Image URL"
										className="input input-bordered"
										{...register("photoURL", { required: true })}
									/>
									{errors.photoURL && (
										<p className="text-red-500 text-xs italic">
											photoURL is required
										</p>
									)}
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										type="text"
										placeholder="email"
										className="input input-bordered"
										{...register("email", { required: true })}
									/>
									{errors.email && (
										<p className="text-red-500 text-xs italic">
											Email is required
										</p>
									)}
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input
										type="text"
										placeholder="password"
										className="input input-bordered"
										{...register("password", {
											required: true,
											minLength: 6,
											maxLength: 20,
											pattern:
												/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
										})}
									/>
									{errors.password?.type === "required" && (
										<p className="text-red-600">Password is required</p>
									)}
									{errors.password?.type === "minLength" && (
										<p className="text-red-600">
											Password must be 6 characters
										</p>
									)}
									{errors.password?.type === "maxLength" && (
										<p className="text-red-600">
											Password must be less than 20 characters
										</p>
									)}
									{errors.password?.type === "pattern" && (
										<p className="text-red-600">
											Password must have one Uppercase one lower case, one
											number and one special character.
										</p>
									)}
								</div>
								<div className="form-control mt-6 mx-auto">
									<button className="btn btn-primary">Registration</button>
								</div>
							</form>
							<div className="flex justify-between items-center ml-2">
								<Link
									to="/login"
									className=" font-bold text-sm text-indigo-600 hover:text-indigo-800"
									href="#"
								>
									Already have a acount?
									<span className="text-blue-900">Click here to login.</span>
								</Link>
								<div className="mx-auto my-4 px-2">
									<button
										className="btn btn-circle btn-outline  btn-warning"
										onClick={handle_google}
									>
										<ImGoogle />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
