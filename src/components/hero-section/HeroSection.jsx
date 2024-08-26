import { useEffect, useRef, useState } from "react";
import pic from "../../assets/pic.png";
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
				<div className={style.picture_container}>
					<img src={pic} alt="Amit Sharma" />
				</div>
				<div className={style.about_container}>
					<p style={{ textTransform: "uppercase", fontWeight: "700" }}>
						About me
					</p>
					<h4>
						Hi, I{"'"}m <br /> Amit Sharma
						<br /> Frontend Engineer
					</h4>
					<div className={style.about_item}>
						<img src="#" alt="s" />
						<div>
							<h5>5k+ projects</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Voluptas, libero!
							</p>
						</div>
					</div>
					<div className={style.about_item}>
						<img src="#" alt="s" />
						<div>
							<h5>5k+ projects</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Voluptas, libero!
							</p>
						</div>
					</div>
					<button>Resume</button>
				</div>
			</div>
		</div>
	);
};
