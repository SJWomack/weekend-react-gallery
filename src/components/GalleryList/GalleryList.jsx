import GalleryItem from "../GallaryItem/GalleryItem";

function GalleryList({ images, handleLike }) {
    function onLike(id, likes) {
        handleLike(id,likes)
    }
    return (
        <div id="gallery">
        {images.map(image =>
            <GalleryItem key={image.id} image={image} onLike={onLike} />)
            }
        </div>
    )
}

export default GalleryList