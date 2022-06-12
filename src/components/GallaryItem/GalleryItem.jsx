
function GalleryItem({image}){
    return (
        <div className="gallery-item">
            <div className="img-card">
            <img src={image.path}></img>
            </div>
            <button className="like-btn">Like</button>
            <p>{image.likes} people like this!</p>
        </div>
    )
}






export default GalleryItem