import { useEffect, useState } from "react";
import style from "./style.module.scss";
export const Header = ({ scrollPosition }) => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		if (scrollPosition > 0) setScrolled(true);
		if (scrollPosition < 0.001) setScrolled(false);
	}, [scrollPosition]);
	return (
		<div
			className={[style.container, scrolled ? style.collapsed_header : ""].join(
				" "
			)}
		>
			<h1 className={style.heading}>{scrolled ? "Amit" : "Portfolio."}</h1>
			<nav className={style.nav_container}>
				<ul>
					<li>
						<a>About me</a>
					</li>
					<li>
						<a>Resume</a>
					</li>
					<li>
						<a>Skills</a>
					</li>
					<li>
						<a>Experience</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</nav>
			<a>Let{"'"}s Talk</a>
		</div>
	);
};
