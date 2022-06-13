import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import ImageForm from '../ImageForm/ImageForm';
import axios from 'axios';



function App() {
  //holds current gallery objects in state

  const [imageList, setImageList] = useState([])
  //fetches images on page load
  useEffect(() => {
    fetchImages();
  }, [])

  //fetches gallery images
  function fetchImages() {
    axios.get('/gallery')
      .then((results) => {
        console.log('Get', results.data);
        setImageList(results.data)
      }).catch((err) => {
        console.log('Get require failed', err)
      })
  }
  //handles put request for like
  function handleLikePut(id, likes) {
    console.log(id, likes);
    axios.put(`/gallery/like/${id}`, { likes: likes })
      .then(() => {
        console.log('like success');
        fetchImages();
      })
      .catch((err) => {
        console.log('like failed', err);
      })
  }

  //handles gallery item delete
  function handleDelGalleryItem(id) {
    console.log('in del', id);

    axios.delete('/gallery/' + id)
      .then((response) => {


        fetchImages();
      }).catch((err) => {
        console.log('Delete request failed', err);
      })
  }

  //handles post request for new image submission.
  function handleNewImage(newImg) {
    axios.post(`/gallery`, newImg)
      .then((response) => {
        console.log('post success', response)
        fetchImages();
      })
      .catch((err) => {
        console.log('post failed', err)
      })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <ImageForm addImg={handleNewImage} />
      <div className='gallery-list'>
        <GalleryList images={imageList} handleDelete={handleDelGalleryItem} handleLike={handleLikePut} />
      </div>
    </div>
  );
}

export default App;
