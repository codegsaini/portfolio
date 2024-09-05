import { useEffect, useRef, useState } from "react";
import pic from "../../assets/pic.png";
import style from "./style.module.scss";
import Particle from "../util/Particles";
import arrow from "../../assets/arrow.png";

export const HeroSection = ({ scrollPosition, particleInit }) => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		if (scrollPosition > 0) setScrolled(true);
		if (scrollPosition < 0.001) setScrolled(false);
	}, [scrollPosition]);

	const onResumeClick = () => {
		const pdfUrl =
			"https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf";
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "Amit_Resume.pdf";
		link.target = "_blank";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
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
				{particleInit && <Particle className={style.particle_container} />}

				<div className={style.picture_container}>
					<img src={pic} alt="Amit Sharma" />
				</div>
				<div className={style.about_container}>
					<p style={{ textTransform: "uppercase", fontWeight: "700" }}>
						About me
					</p>
					{/* <p className={style.greeting}>Hi, I{"'"}m</p> */}
					<h4>
						Hi, I{"'"}m <br />
						Amit Sharma
						<br /> Frontend Engineer
					</h4>
					<div className={style.about_item}>
						<img src={arrow} alt="s" />
						<div>
							<h5>5+ Years experience</h5>
							<p>
								Have working experience as a software engineer in tech industry
								.
							</p>
						</div>
					</div>
					<div className={style.about_item}>
						<img src={arrow} alt="s" />
						<div>
							<h5>20+ Projects served</h5>
							<p>
								Been part of several teams and served more than 20 projects
								successfully.
							</p>
						</div>
					</div>
					<button onClick={onResumeClick}>Resume</button>
				</div>
			</div>
		</div>
	);
};
