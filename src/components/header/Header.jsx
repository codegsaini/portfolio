import { useEffect, useState } from "react";
import style from "./style.module.scss";
export const Header = ({ scrollPosition }) => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		if (scrollPosition > 0) setScrolled(true);
		if (scrollPosition < 0.001) setScrolled(false);
	}, [scrollPosition]);

	const onNavClick = (section) => {
		window.location.href = section;
	};

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
						<a onClick={() => onNavClick("#resume")}>Resume</a>
					</li>
					<li>
						<a onClick={() => onNavClick("#skills")}>Skills</a>
					</li>
					<li>
						<a onClick={() => onNavClick("#experience")}>Experience</a>
					</li>
					<li>
						<a onClick={() => onNavClick("#contact")}>Contact</a>
					</li>
				</ul>
			</nav>
			<a>Let{"'"}s Talk</a>
		</div>
	);
};
