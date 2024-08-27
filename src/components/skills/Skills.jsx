import style from "./style.module.scss";
import resume from "../../assets/resume.jpg";
import { useEffect, useState } from "react";

const certificates = [
	{
		image: resume,
		title: "Certificate",
	},
	{
		image: resume,
		title: "Certificate",
	},
	{
		image: resume,
		title: "Certificate",
	},
	{
		image: resume,
		title: "Certificate",
	},
];

const skills = [
	{
		title: "HTML",
		desc: "5 year experience",
	},
	{
		title: "ReactJs",
		desc: "5 year experience",
	},
	{
		title: "CSS",
		desc: "5 year experience",
	},
	{
		title: "NodeJS",
		desc: "5 year experience",
	},
	{
		title: "Redux",
		desc: "5 year experience",
	},
	{
		title: "SQL",
		desc: "5 year experience",
	},
];

export const Skills = ({ showImagePreview }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		console.log(currentIndex);
	}, [currentIndex]);

	const onPrevClick = () => {
		if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
	};

	const onNextClick = () => {
		if (currentIndex < certificates.length - 1)
			setCurrentIndex(currentIndex + 1);
	};

	return (
		<div className={style.container} id="skills">
			<div className={style.skill_container}>
				<h2>Skills</h2>
				<div className={style.skills_wrapper}>
					{skills.map((skill, index) => {
						return <Skill key={index} title={skill.title} desc={skill.desc} />;
					})}
				</div>
			</div>
			<div className={style.certificate_container}>
				<div className={style.certificate_slide_container}>
					<div style={{ opacity: currentIndex <= 0 ? 0 : 1 }}>
						{currentIndex > 0 && (
							<img
								src={certificates[currentIndex - 1].image}
								alt=""
								onClick={onPrevClick}
							/>
						)}
					</div>
					<div>
						<img
							src={certificates[currentIndex].image}
							alt=""
							onClick={() => showImagePreview(certificates[currentIndex].image)}
						/>
						<label>Click to enlarge</label>
						<p>{certificates[currentIndex].title}</p>
					</div>
					<div
						style={{ opacity: currentIndex >= certificates.length - 1 ? 0 : 1 }}
					>
						{currentIndex < certificates.length - 1 && (
							<img
								src={certificates[currentIndex + 1].image}
								alt=""
								onClick={onNextClick}
							/>
						)}
					</div>
				</div>
				<div className={style.indicator_container}>
					{currentIndex > 0 && (
						<button className={style.prev_button} onClick={onPrevClick}>
							Prev
						</button>
					)}

					{[...Array(certificates.length)].map((_, index) => {
						return (
							<div
								key={index}
								className={style.indicator}
								style={{
									background: index === currentIndex ? "#000000" : "#ffcd03",
									width: index === currentIndex ? "50px" : "25px",
								}}
							></div>
						);
					})}
					{currentIndex < certificates.length - 1 && (
						<button className={style.next_button} onClick={onNextClick}>
							Next
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

const Skill = ({ title, desc }) => {
	return (
		<div className={style.skill}>
			<p>{title}</p>
			<p>{desc}</p>
		</div>
	);
};
