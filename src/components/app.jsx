import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            gifs: [],
            selectedGif: "muHlnG1WU9YfS"
        }
        this.search("pokemon");
    }

    search = (query) => {
        giphy('H0kWb9t3gpZqFZZgLh5UquYbkjBvBBBB').search({
            q: query,
            rating: 'g',
            limit:10
        },  (error, result) => {
            this.setState({
                gifs: result.data
            });             
        });
    }


    render (){
        const gifs = [
            {id: "lOtf1Yt5CxgME" },
            {id: "3oeHLrjZGBgnPx5VII"}
        ]
        return ( 
        <div>
            <div className="left-scene">
                <SearchBar search={this.search}/>
                <div className="selected-gif">
                    <Gif id = {this.state.selectedGif} />
                </div>
            </div>
            <div className="right-scene">
                <div className="gif-list">
                <GifList gifs = {this.state.gifs}/>
                </div>

            </div>
        </div>
     );  
    }
}

export default App;