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
        setDescription('');
        setInputUrl('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Image Source</label>
                <input
                    value={inputUrl}
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
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                        console.log(description)
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