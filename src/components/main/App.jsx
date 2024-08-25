import style from "./style.module.scss";
import { Header } from "../header/Header";
import { HeroSection } from "../hero-section/HeroSection";
import { useEffect, useState } from "react";
import { Resume } from "../resume/Resume";

function App() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", onScrollChange);
		return () => {
			window.removeEventListener("scroll", onScrollChange);
		};
	}, []);

	const onScrollChange = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const currentScrollPosition = winScroll / height;

		setScrollPosition(currentScrollPosition);
	};

	return (
		<div className={style.container}>
			<div className={style.header_section_container}>
				<Header scrollPosition={scrollPosition} />
				<HeroSection scrollPosition={scrollPosition} />
			</div>
			<Resume />
		</div>
	);
}

export default App;
