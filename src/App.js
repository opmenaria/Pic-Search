// import axios from 'axios';
import React from 'react'
import Unsplash from './api/Unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
    state = { images: [] };

    // async onSearchSubmit(term) {
    //     const response = await axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID kFI_Nq-Wr1LMxojg19MdqWx9vC1n9vzgnn5dNMbKvQs'
    //         }
    //     }).then((Response) => {
    //         console.log(Response.data.results)
    //     })
    //     // console.log(response.data.results);
    //     this.setState({ images: response.data.results })
    // }
    onSearchSubmit = async (term) => {
        const response = await Unsplash.get('/search/photos', {
            params: { query: term }
        });
        console.log(response.data.results);
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
export default App;
