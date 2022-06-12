import GalleryItem from "../GallaryItem/GalleryItem";

function GalleryList({ images, handleLike, handleDelete }) {
    function onLike(id, likes) {
        handleLike(id,likes);
    }
    function onDel(id){
        handleDelete(id);
    }
    return (
        <div id="gallery">
        {images.map(image =>
            <GalleryItem key={image.id} image={image} onDel={onDel} onLike={onLike} />)
            }
        </div>
    )
}

export default GalleryList