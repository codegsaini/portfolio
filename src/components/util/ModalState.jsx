import { useEffect, useState } from "react";

export const useModalState = (hash) => {
	const [isOpen, setIsOpen] = useState(false);

	const showModal = (show) => {
		if (show) {
			window.location.assign(hash);
		} else {
			if (window.location.hash === hash) window.history.go(-1);
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
