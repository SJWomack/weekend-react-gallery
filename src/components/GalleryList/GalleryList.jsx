import GalleryItem from "../GallaryItem/GalleryItem";

function GalleryList({images, handleLike}){
    function onLike(img){
        handleLike(img)
    }
    return(
        images.map(image =>
            <GalleryItem key={image.id} image={image} onLike={onLike}/>)
    )
}

export default GalleryList