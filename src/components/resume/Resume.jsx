import bg from "../../assets/bg.jpg";
import resume from "../../assets/resume.jpg";
import style from "./style.module.scss";
import { useModalState } from "../util/ModalState";

export const Resume = ({ showImagePreview }) => {
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
