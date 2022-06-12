import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList'

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>

    </div>
  );
}

export default App;
