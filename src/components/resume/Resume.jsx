import bg from "../../assets/bg.jpg";
import resume from "../../assets/resume.jpg";
import style from "./style.module.scss";
import { useModalState } from "../util/ModalState";

export const Resume = ({ showImagePreview }) => {
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
			className={style.container}
			style={{ backgroundImage: `url(${bg})` }}
			id="resume"
		>
			<div
				className={style.resume_container}
				onClick={() => showImagePreview(resume)}
			>
				<img className={style.resume} src={resume} alt="Resume Image" />
				<p>Click to enlarge</p>
			</div>
			<div className={style.resume_overview_container}>
				<h2>Overview</h2>
				<ul>
					<li>
						<p>
							Detail-oriented Front-End Developer with more than 5 years
							experience working with HTML, CSS, Javascript, JQuery, and
							TypeScript
						</p>
					</li>
					<li>
						<p>
							Highly adept at both independent and collaborative projects, with
							an emphasis on landing page and website development
						</p>
					</li>
					<li>
						<p>
							Assisted in A/B testing of different UX components that resulted
							in a 25% increase in customer conversion rates.
						</p>
					</li>
					<li>
						<p>
							Optimized images and code to increase Time on Page by 30 seconds
							on 60+ websites.
						</p>
					</li>
					<li>
						<p>
							Built a unit testing infrastructure using Selenium that reduced
							reports of bugs by 10%.
						</p>
					</li>
				</ul>
				<button onClick={onResumeClick}>View/Download Resume</button>
			</div>
		</div>
	);
};
