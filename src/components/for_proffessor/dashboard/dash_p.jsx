import React from "react";
import Nav_p from "../nav_p/nav_p";
function Dash_p() {
	let id1;
	const Jaldi_batao2 = localStorage.getItem("tech_stu");
	if (Jaldi_batao2 === "true") {
		id1 = "professor";
	} else {
		id1 = "student";
	}
	alert(id1);
	return (
		<div className="z-10">
			<Nav_p />
		</div>
	);
}
export default Dash_p;
