import style from "./style.module.scss";
import fb from "../../assets/facebook.png";
import x from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";

export const Contact = () => {
	return (
		<div className={style.container} id="contact">
			<h2 className={style.section_label}>Get in touch</h2>
			<div className={style.socials_wrapper}>
				<img src={fb} alt="Facebook Social" />
				<img src={insta} alt="Insta Social" />
				<img src={x} alt="X Social" />
			</div>
			<p>pingauravsaini@gmail.com</p>
		</div>
	);
};
