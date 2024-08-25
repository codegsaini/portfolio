import { useEffect, useState } from "react";
import bg from "../../assets/bg.jpg";
import resume from "../../assets/resume.jpg";
import style from "./style.module.scss";

const useModalState = (hash) => {
	const [isOpen, setIsOpen] = useState(false);

	const showModal = (show) => {
		if (show) {
			window.location.assign(hash);
		} else {
			window.history.go(-1);
		}
	};

	const onHashChange = () => {
		setIsOpen(window.location.hash === hash);
	};

	useEffect(() => {
		window.addEventListener("hashchange", onHashChange);
		return () => {
			window.removeEventListener("hashchange", onHashChange);
		};
	}, [hash]);

	return [isOpen, showModal];
};

export const Resume = () => {
	const [enlarged, enlargeResume] = useModalState("#enlarged_resume");

	return (
		<div className={style.container} style={{ backgroundImage: `url(${bg})` }}>
			{enlarged && (
				<div className={style.enlarged_resume}>
					<img src={resume} alt="Resume" />
					<button onClick={() => enlargeResume(false)}>✖</button>
				</div>
			)}
			<div
				className={style.resume_container}
				onClick={() => enlargeResume(true)}
			>
				<img className={style.resume} src={resume} alt="Resume Image" />
				<p>Click to enlarge</p>
			</div>
			<div className={style.resume_overview_container}>
				<h2>Overview</h2>
				<ul>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</li>
					<li>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</li>
				</ul>
				<button>View/Download Resume</button>
			</div>
		</div>
	);
};
