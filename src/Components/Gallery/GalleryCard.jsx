import Gallery from "react-photo-gallery";
const GalleryCard = ({ photos }) => {
	return <>{photos && <Gallery photos={photos} />}</>;
};

export default GalleryCard;
