import React, { useState } from "react";
import "./Navbar.css";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { sidebarData } from "./sidebarData";
import { Link } from "react-router-dom";

function Navbar() {
	const [active, setActive] = useState(false);

	const showSidebar = () => setActive(!active);

	return (
		<nav>
			<div className="nav-header">
				<AiIcons.AiOutlineMenu onClick={showSidebar} />
			</div>
			<div className={active ? "nav-item-group active" : "nav-item-group"}>
				<ul>
					<li className="nav-close">
						<FaIcons.FaTimes onClick={showSidebar} />
					</li>
					{sidebarData.map((element, index) => (
						<li className={element.cName} key={index}>
							<Link to="#">
								{element.icon}
								<span className="left">{element.title}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
