import GalleryItem from "../GallaryItem/GalleryItem";
//takes in images array, handle Like and handle delete functions'
//loops through image array and props data to gallery item
//drills props for delete and like up to app. jsx
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