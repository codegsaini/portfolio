import style from "./style.module.scss";
import resume from "../../assets/resume.jpg";
import { useEffect, useState } from "react";

export const Skills = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const data = [
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

	useEffect(() => {
		console.log(currentIndex);
	}, [currentIndex]);

	const onPrevClick = () => {
		if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
	};

	const onNextClick = () => {
		if (currentIndex < data.length - 1) setCurrentIndex(currentIndex + 1);
	};

	return (
		<div className={style.container}>
			<div className={style.skill_container}>
				<h2>Skills</h2>
				<div className={style.skills_wrapper}>
					<Skill title={"HTML"} desc={""} />
					<Skill title={"CSS"} desc={""} />
					<Skill title={"React"} desc={""} />
					<Skill title={"Javascript"} desc={""} />
					<Skill title={"HTML"} desc={""} />
					<Skill title={"CSS"} desc={""} />
					<Skill title={"React"} desc={""} />
					<Skill title={"Javascript"} desc={""} />
				</div>
			</div>
			<div className={style.certificate_container}>
				{currentIndex > 0 && (
					<button className={style.prev_button} onClick={onPrevClick}>
						Prev
					</button>
				)}
				{currentIndex < data.length - 1 && (
					<button className={style.next_button} onClick={onNextClick}>
						Next
					</button>
				)}
				<div className={style.certificate_slide_container}>
					<div style={{ opacity: currentIndex <= 0 ? 0 : 1 }}>
						{currentIndex > 0 && (
							<img src={data[currentIndex - 1].image} alt="" />
						)}
					</div>
					<div>
						<img src={data[currentIndex].image} alt="" />
						<p>{data[currentIndex].title}</p>
					</div>
					<div style={{ opacity: currentIndex >= data.length - 1 ? 0 : 1 }}>
						{currentIndex < data.length - 1 && (
							<img src={data[currentIndex + 1].image} alt="" />
						)}
					</div>
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
			<p>Intermediate</p>
		</div>
	);
};
