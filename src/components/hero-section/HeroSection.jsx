import { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";

export const HeroSection = ({ scrollPosition }) => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		if (scrollPosition > 0) setScrolled(true);
		if (scrollPosition < 0.001) setScrolled(false);
	}, [scrollPosition]);
	return (
		<div
			className={[
				style.container,
				scrolled ? style.collapsed_container : style.expanded_container,
			].join(" ")}
		>
			<div
				className={[
					style.main_container,
					scrolled ? style.scrolled_main_container : "",
				].join(" ")}
			>
				<h2>Hi, I am Amit Sharma</h2>
				<h3>Software Engineer</h3>
			</div>
		</div>
	);
};
