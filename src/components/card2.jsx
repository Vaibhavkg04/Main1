import React from "react";
import "./card.css";
function Card2({ chatMessage, user }) {
	return (
		<div className={`Card2 text-sm `}>
			{user} <br /> {chatMessage}
		</div>
	);
}
export default Card2;
