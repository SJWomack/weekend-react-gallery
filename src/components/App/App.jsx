import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';



function App() {

  const [imageList, setImageList] = useState([])

useEffect(() => {
  fetchImages();
}, [])

function fetchImages() {
  axios.get('/gallery')
    .then((results) => {
      console.log('Get', results.data);
      setImageList(results.data)
    }).catch((err) => {
      console.log('Get require failed', err)
    })
}

function handleLikePut(id,likes){
  console.log(id, likes);
  axios.put(`/gallery/like/${id}`,{likes:likes})
  .then(() =>{
    console.log('like success');
    fetchImages();
  })
  .catch((err) =>{
    console.log('like failed', err);
  })
}


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
        <GalleryList images={imageList} handleLike={handleLikePut} />
    </div>
  );
}

export default App;
