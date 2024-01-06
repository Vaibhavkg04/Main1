import React, { useState, useEffect } from "react";
import Nav_p from "../nav_p/nav_p";
import "./profile_p.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
var Main4;
const tag = "prof";
let department;
function Profile_p() {
	const [userMain, setuserMain] = useState("");
	const [userEmail, setuserEmail] = useState("");
	const [Incharge, setuserIncharge] = useState("");
	const [userBranch, setuserBranch] = useState("");
	const [userSkill, setuserSkill] = useState("");

	useEffect(() => {
		const savedUserName = localStorage.getItem("userMain");
		const savedUserEmail = localStorage.getItem("userEmail");
		const savedUserIncharge = localStorage.getItem("Incharge");
		const savedUserBranch = localStorage.getItem("userBranch");
		const savedUserSkill = localStorage.getItem("userSkill");

		if (savedUserName) {
			setuserMain(savedUserName);
		}
		if (savedUserEmail) {
			setuserEmail(savedUserEmail);
		}
		if (savedUserIncharge) {
			setuserIncharge(savedUserIncharge);
		}
		if (savedUserBranch) {
			setuserBranch(savedUserBranch);
		}

		if (savedUserSkill) {
			setuserSkill(savedUserSkill);
		}
	}, []);

	const handleSave = () => {
		localStorage.setItem("userMain", userMain);
		localStorage.setItem("userEmail", userEmail);
		localStorage.setItem("Incharge", Incharge);
		localStorage.setItem("userBranch", userBranch);
		department = userBranch;
		Main4 = userMain;
		localStorage.setItem("userSkill", userSkill);
	};
	const navigate = useNavigate();
	useEffect(() => {}, [userMain]);
	if (userBranch === "CS") {
		Main4 = userMain;
		department = userBranch;
	}
	return (
		<div>
			<Nav_p />
			<div className="sidenav mt-4 hidden md:block">
				<div className="profile">
					<img
						className="ml-20 mt-12"
						src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
						alt=""
						width="100"
						height="100"
					/>

					<div className="name">USER</div>
					<div className="job">🔥BITIAN🔥</div>
				</div>

				<div className="sidenav-url">
					<div className="url">
						<a href="#profile" className="active">
							Profile
						</a>
						<hr align="center" />
					</div>
					<div className="url">
						<a href="#settings">Settings</a>
						<hr align="center" />
					</div>
				</div>
			</div>

			<div className="main">
				<h2>IDENTITY</h2>
				<div className="card">
					<form action="">
						<div className="card-body">
							<i className="fa fa-pen fa-xs edit"></i>
							<table>
								<tbody>
									<tr>
										<td>Name</td>
										<td>:</td>
										<td>
											<input
												value={userMain}
												type="text"
												placeholder="USER"
												onChange={(e) => setuserMain(e.target.value)}
												required
											/>
										</td>
									</tr>
									<tr>
										<td>Email</td>
										<td>:</td>
										<td>
											<input
												value={userEmail}
												type="email"
												onChange={(e) => setuserEmail(e.target.value)}
												placeholder="abc@gmail.com"
												required
											/>
										</td>
									</tr>
									<tr>
										<td>Hostel Incharge</td>
										<td>:</td>
										<td>
											<select
												value={Incharge}
												type="Hostel Incharge"
												onChange={(e) => setuserIncharge(e.target.value)}
												placeholder="abc@gmail.com"
												required
											>
												<option value="H1">H1</option>
												<option value="H2">H2</option>
												<option value="H3">H3</option>
												<option value="H4">H4</option>
												<option value="H5">H5</option>
												<option value="H6">H6</option>
												<option value="H7">H7</option>
												<option value="H8">H8</option>
												<option value="H9">H9</option>
												<option value="H10">H10</option>
												<option value="H11">H11</option>
												<option value="H12">H12</option>
												<option value="H13">H13</option>
												<option value="NA">Not Applicable</option>
											</select>
										</td>
									</tr>

									<tr>
										<td>Department</td>
										<td>:</td>
										<td>
											<select
												value={userBranch}
												type="text"
												onChange={(e) => setuserBranch(e.target.value)}
												placeholder="Branch"
												required
											>
												<option value="CS">CS</option>
												<option value="ECE">ECE</option>
												<option value="EE">EE</option>
												<option value="Mech">Mech</option>
											</select>
										</td>
									</tr>
									{/* <tr>
										<td>Skill</td>
										<td>:</td>
										<td>
											<input
												value={userSkill}
												type="text"
												onChange={(e) => setuserSkill(e.target.value)}
												placeholder="Skills"
												required
											/>
										</td>
									</tr> */}
								</tbody>
							</table>
							<button
								className="text-xl bg-blue-600 mt-3 hover:bg-blue-900 text-white  py-2 px-3  rounded border-2 border-white"
								type="submit"
								onClick={handleSave}
							>
								save
							</button>
							{/* */}
						</div>
					</form>
				</div>

				<h2>SOCIAL MEDIA</h2>
				<div className="card">
					<div className="card-body">
						<i className="fa fa-pen fa-xs edit"></i>
						<div className="social-media">
							<span className="fa-stack fa-sm">
								<i className="fas fa-circle fa-stack-2x"></i>
								<i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
							</span>
							<span className="fa-stack fa-sm">
								<i className="fas fa-circle fa-stack-2x"></i>
								<i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
							</span>
							<span className="fa-stack fa-sm">
								<i className="fas fa-circle fa-stack-2x"></i>
								<i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
							</span>
							<span className="fa-stack fa-sm">
								<i className="fas fa-circle fa-stack-2x"></i>
								<i className="fab fa-invision fa-stack-1x fa-inverse"></i>
							</span>
							<span className="fa-stack fa-sm">
								<i className="fas fa-circle fa-stack-2x"></i>
								<i className="fab fa-github fa-stack-1x fa-inverse"></i>
							</span>
							<span className="fa-stack fa-sm">
								<i className="fas fa-circle fa-stack-2x"></i>
								<i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
							</span>
							<span className="fa-stack fa-sm">
								<i className="fas fa-circle fa-stack-2x"></i>
								<i className="fab fa-snapchat fa-stack-1x fa-inverse"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export { Main4, department, tag };
export default Profile_p;
