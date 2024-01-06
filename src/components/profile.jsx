import React, { useState, useEffect } from "react";
import Nav2 from "./nav";
import "./profile.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { u } from "../login";
let Main3;
function Profile() {
	const [user_Name, setuserName] = useState("");
	const [userMain, setuserMain] = useState("");
	const [userEmail, setuserEmail] = useState("");
	const [userRoll, setuserRoll] = useState("");
	const [userBranch, setuserBranch] = useState("");
	const [userSkill, setuserSkill] = useState("");

	useEffect(() => {
		const saveduser_Name = localStorage.getItem("user_Name");
		const savedUserName = localStorage.getItem("userMain");
		const savedUserEmail = localStorage.getItem("userEmail");
		const savedUserRoll = localStorage.getItem("userRoll");
		const savedUserBranch = localStorage.getItem("userBranch");
		const savedUserSkill = localStorage.getItem("userSkill");

		if (saveduser_Name) {
			setuserName(saveduser_Name);
		}
		if (savedUserName) {
			setuserMain(savedUserName);
		}
		if (savedUserEmail) {
			setuserEmail(savedUserEmail);
		}
		if (savedUserRoll) {
			setuserRoll(savedUserRoll);
		}
		if (savedUserBranch) {
			setuserBranch(savedUserBranch);
		}

		if (savedUserSkill) {
			setuserSkill(savedUserSkill);
		}
	}, []);

	const handleSave = () => {
		localStorage.setItem("user_Name", user_Name);
		localStorage.setItem("userMain", userMain);
		localStorage.setItem("userEmail", userEmail);
		localStorage.setItem("userRoll", userRoll);
		localStorage.setItem("userBranch", userBranch);
		localStorage.setItem("userSkill", userSkill);
	};
	const navigate = useNavigate();
	useEffect(() => {
		Main3 = userMain;
	}, [userMain]);
	return (
		<div>
			<Nav2 />
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
									{/* <tr>
										<td>userName</td>
										<td>:</td>
										<td>
											<input
												value={user_Name}
												type="text"
												placeholder="USER"
												onChange={(e) => setuserName(e.target.value)}
												required
											/>
										</td>
									</tr> */}
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
										<td>Batch</td>
										<td>:</td>
										<td>
											<select
												value={userRoll}
												type="text"
												onChange={(e) => setuserRoll(e.target.value)}
												required
											>
												<option value="K23">K23</option>
												<option value="K22">K22</option>
												<option value="K21">K21</option>
												<option value="K20">K20</option>
												<option value="K19">K19</option>
											</select>
										</td>
									</tr>
									<tr>
										<td>Branch</td>
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
									<tr>
										<td>Hostel</td>
										<td>:</td>
										<td>
											<select
												value={userSkill}
												type="text"
												onChange={(e) => setuserSkill(e.target.value)}
												required
											>
												<option value="a">1</option>
												<option value="ab">2</option>
												<option value="ac">3</option>
												<option value="ad">4</option>
												<option value="af">5</option>
												<option value="ag">6</option>
												<option value="ah">7</option>
												<option value="ai">8</option>
												<option value="aj">9</option>
												<option value="ak">10</option>
												<option value="al">11</option>
												<option value="am">12</option>
												<option value="an">DayScholar</option>
											</select>
										</td>
									</tr>
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
export { Main3 };
export default Profile;
