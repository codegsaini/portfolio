import { useEffect, useState } from "react";
import style from "./style.module.scss";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
export const Header = ({ scrollPosition }) => {
	const [scrolled, setScrolled] = useState(false);
	const [showMobileNav, setShowMobileNav] = useState(false);
	useEffect(() => {
		if (scrollPosition > 0) setScrolled(true);
		if (scrollPosition < 0.001) setScrolled(false);
	}, [scrollPosition]);

	const onNavClick = (section) => {
		setShowMobileNav(false);
		window.location.href = section;
	};
	const onNavOpen = () => {
		setShowMobileNav(true);
	};
	const onNavClose = () => {
		setShowMobileNav(false);
	};
	return (
		<div
			className={[style.container, scrolled ? style.collapsed_header : ""].join(
				" "
			)}
		>
			{showMobileNav && (
				<div className={style.mobile_nav_container}>
					<img
						onClick={onNavClose}
						className={style.mobile_menu_button}
						src={close}
						alt="Menu"
					/>
					<nav className={style.mobile_nav}>
						<ul>
							<li>
								<a onClick={() => onNavClick("#resume")}>Resume</a>
							</li>
							<li>
								<a onClick={() => onNavClick("#skills")}>Skills</a>
							</li>
							<li>
								<a onClick={() => onNavClick("#experience")}>Experience</a>
							</li>
							<li>
								<a onClick={() => onNavClick("#contact")}>Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			)}
			<h1 className={style.heading}>Amit</h1>
			<nav className={style.nav_container}>
				<ul>
					<li>
						<a onClick={() => onNavClick("#resume")}>Resume</a>
					</li>
					<li>
						<a onClick={() => onNavClick("#skills")}>Skills</a>
					</li>
					<li>
						<a onClick={() => onNavClick("#experience")}>Experience</a>
					</li>
					<li>
						<a onClick={() => onNavClick("#contact")}>Contact</a>
					</li>
				</ul>
				<img
					onClick={onNavOpen}
					className={style.mobile_menu_button}
					src={menu}
					alt="Menu"
				/>
			</nav>
			<a className={style.talk_button} href="tel:9876543210">
				Let{"'"}s Talk
			</a>
		</div>
	);
};
