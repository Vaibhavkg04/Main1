import React, { useState } from "react";
import "./card.css";
//console.log({ chatMessage, user });
function Card({ chatMessage, user }) {
	return (
		<div className={`Card text-sm `}>
			{user} <br /> {chatMessage}
		</div>
	);
}
export default Card;
