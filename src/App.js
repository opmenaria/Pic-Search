// import axios from 'axios';
import React, { useState } from 'react'
import Unsplash from './api/Unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { Spin } from 'antd';

function App() {
    const [images, setImages] = useState([])
    const [lodin, setlodin] = useState(false)

    const onSearchSubmit = async (term) => {
        setlodin(true)
        const response = await Unsplash.get('/search/photos', {
            params: { query: term }
        });
        setImages(response.data.results);
        setlodin(false)
    }

    return (
        <div className='ui container' style={{ paddingTop: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', color: "blue", fontWeight: 500, fontSize: 16 }}>
            <SearchBar onSubmit={onSearchSubmit} />
            Found: {images.length} images
            {lodin ? <Spin tip="Loading" size='large' /> : <ImageList images={images} />}
        </div>
    )
}
export default App;
