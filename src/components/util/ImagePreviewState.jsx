import { useEffect, useState } from "react";
import { useModalState } from "./ModalState";

export const useImagePreviewState = (image) => {
	const [showPreview, setShowPreview] = useModalState("#preview");
	const [imagePreview, setImage] = useState(null);

	useEffect(() => {
		setImagePreview(image);
	}, [image]);

	const setImagePreview = (image) => {
		setShowPreview(image !== null);
		setImage(image);
	};

	return [showPreview, imagePreview, setImagePreview];
};
