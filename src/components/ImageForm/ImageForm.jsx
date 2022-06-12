import { useState } from 'react'
function ImageForm({ addImg }) {
    const [inputUrl, setInputUrl] = useState('')
    const [description, setDescription] = useState('')
    const newImg = {
        url: inputUrl,
        description: description
    }

    function handleSubmit(evt) {

        evt.preventDefault();
        addImg(newImg)
        evt.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Image Source</label>
                <input
                    val={inputUrl}
                    onChange={(event) => {
                        setInputUrl(event.target.value)
                        console.log(inputUrl)
                    }}
                    type='text'
                    required />
            </div>
            <div>
                <label>Image Description</label>
                <input
                    val={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                        console.log(inputUrl)
                    }}
                    type='text'
                    required />
            </div>
            <div>
                <button
                    type='submit'
                >
                    Add Image
                </button>
            </div>
        </form>
    )
}




export default ImageForm;