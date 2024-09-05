import style from "./style.module.scss";
import { Header } from "../header/Header";
import { HeroSection } from "../hero-section/HeroSection";
import { useEffect, useState } from "react";
import { Resume } from "../resume/Resume";
import { Skills } from "../skills/Skills";
import { useImagePreviewState } from "../util/ImagePreviewState";
import { ExperienceTimeline } from "../experience/ExperienceTimeline";
import { Contact } from "../contact/Contact";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [showPreview, imagePreview, setImagePreview] =
		useImagePreviewState(null);

	const [particleInit, setParticleInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setParticleInit(true);
		});

		// window.addEventListener("scroll", onScrollChange);
		// return () => {
		// 	window.removeEventListener("scroll", onScrollChange);
		// };
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
			{showPreview && (
				<ImagePreviewModal
					image={imagePreview}
					onPreviewCloseRequest={() => setImagePreview(null)}
				/>
			)}
			<div className={style.header_section_container}>
				<Header scrollPosition={scrollPosition} />
				<HeroSection scrollPosition={scrollPosition} particleInit />
			</div>
			<Skills showImagePreview={setImagePreview} />

			<Resume showImagePreview={setImagePreview} />
			<ExperienceTimeline />
			<Contact particleInit />
		</div>
	);
}

const ImagePreviewModal = ({ onPreviewCloseRequest, image }) => {
	return (
		<div className={style.image_preview}>
			<img src={image} alt="Image preview" />
			<button onClick={onPreviewCloseRequest}>✖</button>
		</div>
	);
};

export default App;
