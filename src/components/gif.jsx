import React, { Component } from 'react';

class Gif extends Component {
    render(){
        const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif?cid=cf05e475cf60ef9e7964f897d9bcfdfcd7cc2c4fde389b6&rid=giphy.gif`
        return(
            <img src={src} alt="" className="gif"/>
            );
    }
}

export default Gif;

