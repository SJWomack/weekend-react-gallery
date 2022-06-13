import { useState } from 'react'


//takes in image object, onlike and on del functions
//appends gallery items to dom and handles clicks
function GalleryItem({ image, onLike, onDel }) {
    const [description, setDescription] = useState(false)
    function toggleDescription(){
        setDescription(!description);
    }
    return (
        <div className="gallery-item">
            <div className="img-card" onClick={toggleDescription}>
                {description ?
                    <p className='img-desc'>{image.description}</p> :
                    <img src={image.url}></img>
                }
            </div>
            <button className="like-btn" onClick={() => onLike(image.id, image.likes)}>Like</button>
            <button className='delete-btn' onClick={() => onDel(image.id)}>Delete</button>
            <p>{image.likes} people like this!</p>
        </div>
    )
}






export default GalleryItem