import { useState } from 'react'

function GalleryItem({ image, onLike }) {
    const [description, setDescription] = useState(false)
    function toggleDescription(){
        setDescription(!description);
    }
    return (
        <div className="gallery-item">
            <div className="img-card" onClick={toggleDescription}>
                {description ?
                    <p className='img-desc'>{image.description}</p> :
                    <img src={image.path}></img>
                }
            </div>
            <button className="like-btn" onClick={() => onLike(image.id)}>Like</button>
            <p>{image.likes} people like this!</p>
        </div>
    )
}






export default GalleryItem