import React from "react";
import Nav2 from "./nav";
import img3 from "./Proff-inter2.jpg";
import "./dashboard.css";
function Dashboard() {
	const loggedInUsername = localStorage.getItem("userMain");
	const Jaldi_batao = localStorage.getItem("tech_stu");
	// alert(Jaldi_batao);
	const savedUserEmail = localStorage.getItem("userEmail");
	const savedUserRoll = localStorage.getItem("userRoll");
	const savedUserBranch = localStorage.getItem("userBranch");
	return (
		<div className="puraDash">
			<div>
				<Nav2 />
			</div>
			<div className="compo z-10">
				<div className="sidecard  ml-12 p-8 ">
					<div className="heading text-2xl text-white">
						Important <br /> Links
						<hr className="mt-2" />
					</div>
					<div className="p-2 ">
						<ul>
							<li>
								<a href="https://www.bitmesra.ac.in/Visit_Other_Department_9910?cid=1&deptid=205&pid=103">
									Notice
								</a>
							</li>
							<li>
								<a href="https://erpportal.bitmesra.ac.in/login.htm">Erp</a>
							</li>
							<li>
								<a href="https://vfd83x.csb.app/">Club Detail</a>
							</li>
							<li>
								<a href="https://bitwelfaresociety.com/login">
									Welfare Society
								</a>
							</li>
							<li>
								<a href="https://www.bitmesra.ac.in/ContactUs.aspx?cid=1&pid=CT">
									Contact BIT
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="detPro">
					<div className="detImp">
						<div className="detail ">
							<div className="text-4xl font-bold p-3 text-white">
								Hello {loggedInUsername}
							</div>
							<br />
							<div className="text-2xl text-white">
								Welcome to BIT Communinty Hub{" "}
							</div>
							<br />
							<div className="">
								A digital space designed for learning, and connection. Dive in,
								explore, and let's make every interaction count.
							</div>
						</div>

						<div className=" necheKa mt-3">
							<div className=" mt-2 ">
								<div className="imp text-lg font-bold ml-8 w-96">
									Report Hostel or Mess Issue?
									{/* <button className="text-xl bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-3 ml-4  rounded border-2 border-white">
										Report
									</button> */}
								</div>
								<div className="imp text-lg font-bold ml-8 w-96">
									Having Academic Doubts?
									{/* <button className="text-xl bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-3 ml-4  rounded border-2 border-white">
										Ask
									</button> */}
								</div>
							</div>
							<div className="dono mt-2">
								<div className="imp ml-20 text-lg font-bold">
									Anything to ask to Your Professors ?
									{/* <button className="text-xl bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-3 ml-4 rounded border-2 border-white">
										Ask
									</button> */}
								</div>
								<div className="imp ml-20   text-lg font-bold">
									Want to interact from seniors?
									{/* <button className="text-xl bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-3 ml-4  rounded border-2 border-white">
										Interact
									</button> */}
								</div>
							</div>
						</div>
					</div>
					<div className="smallProfile mr-10 ">
						<div className="picture">
							<img
								className="ml-12 mt-2"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfb4boKKaHu5x1oFASsO92hJb-78nyVcFKRT_WxvRf1O165kUOYWfa0uGn12tfdw8uRU&usqp=CAU"
								alt=""
							/>
							<br />
							<hr />
						</div>
						<div className="text-center mt-2">{loggedInUsername}</div>
						<div className="email text-center mt-2">{savedUserEmail}</div>
						<div className="batch text-center mt-2">{savedUserRoll}</div>
						<div className=" text-center mt-2">{savedUserBranch}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
