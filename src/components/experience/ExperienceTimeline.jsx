import style from "./style.module.scss";

const experienceList = [
	{
		title: "Software engineer",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		timespan: "21 JUL 2021 - 30 AUG 3024",
	},
	{
		title: "Software engineer",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		timespan: "21 JUL 2021 - 30 AUG 3024",
	},
	{
		title: "Software engineer",
		desc: "This is my job",
		timespan: "21 JUL 2021 - 30 AUG 3024",
	},
	{
		title: "Software engineer",
		desc: "This is my job",
		timespan: "21 JUL 2021 - 30 AUG 3024",
	},
	{
		title: "Software engineer",
		desc: "This is my job",
		timespan: "21 JUL 2021 - 30 AUG 3024",
	},
];

export const ExperienceTimeline = () => {
	return (
		<div className={style.container} id="experience">
			<h2 className={style.section_label}>Experience</h2>
			<div className={style.timeline_wrapper}>
				{experienceList.map((experience, index) => {
					return <Experience key={index} index={index} {...experience} />;
				})}
			</div>
		</div>
	);
};

const Experience = ({ index, title, desc, timespan }) => {
	return (
		<div className={style.experience}>
			<div>
				{index % 2 === 0 && (
					<div>
						<h3 className={style.experience_time}>{timespan}</h3>
						<h3 className={style.experience_title}>{title}</h3>
						<p className={style.experience_desc}>{desc}</p>
					</div>
				)}
			</div>

			<div>
				<div></div>
				<div></div>
			</div>
			<div>
				{index % 2 !== 0 && (
					<div>
						<h3 className={style.experience_time}>{timespan}</h3>
						<h3 className={style.experience_title}>{title}</h3>
						<p className={style.experience_desc}>{desc}</p>
					</div>
				)}
			</div>
		</div>
	);
};
